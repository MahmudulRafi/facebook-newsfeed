import React, { Component } from "react";

class UserComment extends Component {
    render() {
        const { comment, userName, userImage } = this.props;
        return (
            <>
                <div class="comments__friend-comment friend-comment">
                    <img src={userImage} class="friend-comment__pic" />
                    <div class="friend-comment__comment comment">
                        <a href="#" class="comment__author">
                            {userName}
                        </a>
                        <span class="comment__content">{comment}</span>
                    </div>
                </div>
            </>
        );
    }
}

export default UserComment;
