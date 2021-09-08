import React, { Component } from "react";

class ReactionsViewer extends Component {
    state = {};
    render() {
        const { isLiked, likeCount, commentsCount, shareCount } = this.props;
        return (
            <div class="footer__reactions reactions">
                <div class="reactions__emojis emojis">
                    <img
                        src="https://cdn.worldvectorlogo.com/logos/facebook-like.svg"
                        class="emojis__like"
                    />
                    <span class="emojis__count">
                        <p>
                            {isLiked ? "You and " : ""}
                            {likeCount} {isLiked ? "others" : ""}
                        </p>
                    </span>
                </div>
                <div class="reactions__comment-shares">
                    <span class="comment-shares__comments">
                        <a>{commentsCount} Comments </a>
                    </span>
                    <span class="comment-shares__shares">
                        <a>
                            {shareCount === 0 ? null : shareCount}
                            {shareCount === 0 ? null : " Shares"}
                        </a>
                    </span>
                </div>
            </div>
        );
    }
}

export default ReactionsViewer;
