{-# LANGUAGE NoImplicitPrelude #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE MultiParamTypeClasses #-}
{-# LANGUAGE TypeFamilies #-}

module Handler.Zahra where

import Import
import Yesod.Form.Bootstrap3 ()
import Text.Julius ()


getZahraR :: Handler Html
getZahraR = do
    defaultLayout $ do
        setTitle "Zahra's User page"
        $(widgetFile "zahra")