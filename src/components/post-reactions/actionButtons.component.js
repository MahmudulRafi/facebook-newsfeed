import React, { Component } from "react";
import Share from "./buttons/share.component";
import Like from "./buttons/like.component";
import Comment from "./buttons/comment.component";

class ActionButtons extends Component {
    render() {
        const { postId, isLiked, onPostLike } = this.props;
        return (
            <>
                <div class="footer__buttons buttons">
                    <Like
                        isLiked={isLiked}
                        postId={postId}
                        onPostLike={onPostLike}
                    />
                    <Comment />
                    <Share />
                </div>
            </>
        );
    }
}

export default ActionButtons;
