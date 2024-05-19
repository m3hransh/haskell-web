module Handler.Comment where

import Import
import Data.Aeson as Aeson

postCommentR :: Handler Value
postCommentR = do
    -- requireCheckJsonBody will parse the request body into the appropriate type, or return a 400 status code if the request JSON is invalid.
    -- (The ToJSON and FromJSON instances are derived in the config/models file).
    comment <- (requireCheckJsonBody :: Handler Comment)

    -- The YesodAuth instance in Foundation.hs defines the UserId to be the type used for authentication.
    maybeCurrentUserId <- maybeAuthId
    let comment' = comment { commentUserId = maybeCurrentUserId }

    insertedComment <- runDB $ insertEntity comment'
    returnJson insertedComment


getCommentR :: Handler Value
getCommentR = do
  -- Fetch comments from the database
    comments <- runDB $ selectList [] [Desc CommentId]
  -- Convert comments to JSON
    let commentsJson = Aeson.toJSON comments
  -- Return comments as JSON response
    returnJson commentsJson