{-# LANGUAGE NoImplicitPrelude #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE MultiParamTypeClasses #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE ExplicitForAll #-}
{-# OPTIONS_GHC -fno-warn-orphans #-}
module Seeder (loadSeedData) where

import ClassyPrelude.Yesod
import Model
import System.Directory (listDirectory)
import Data.Aeson (decodeStrict)
import Control.Monad.Logger

-- Define a function to load seed data from a directory
loadSeedData :: FilePath -> ReaderT SqlBackend IO ()
loadSeedData seedDir = do
    -- Get a list of all files in the seeder directory
    files <- liftIO $ listDirectory seedDir
    -- Loop through each file and load its data
    forM_ files $ \file -> do
        let filePath = seedDir </> file
        -- Read the file content (assuming JSON format for this example)
        content <- liftIO $ readFileUtf8 filePath
        -- Parse the content and insert into the database
        -- Here you would add your logic to parse and insert data
        -- Example for inserting roles from a JSON file
        case decodeStrict (encodeUtf8 content):: (Maybe [Role]) of
            Just roles ->  do
                forM_ roles $ \r -> do
                  _ <- upsert r [RoleName =. roleName r]
                  liftIO $ putStrLn $ "Inserted role " <> (roleName r)
            Nothing -> liftIO $ putStrLn $ "Failed to parse " ++ pack file

-- Example decode function (you should adapt this to your data structure)

