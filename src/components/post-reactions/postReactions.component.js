import React, { Component } from "react";
import ActionButtons from "./actionButtons.component";
import ReactionsViewer from "./reactionsViewer.components";

class PostReactions extends Component {
    state = {};
    render() {
        const {
            postId,
            isLiked,
            likeCount,
            commentsCount,
            shareCount,
            onPostLike,
        } = this.props;
        return (
            <>
                <ReactionsViewer
                    isLiked={isLiked}
                    likeCount={likeCount}
                    commentsCount={commentsCount}
                    shareCount={shareCount}
                />
                <ActionButtons
                    postId={postId}
                    isLiked={isLiked}
                    onPostLike={onPostLike}
                />
            </>
        );
    }
}

export default PostReactions;
