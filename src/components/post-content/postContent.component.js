import React, { Component } from "react";

class PostContent extends Component {
    state = {};
    render() {
        const { postContent, postImage } = this.props;
        return (
            <div class="post__content content">
                <p class="content__paragraph">{postContent}</p>
                {postImage === "" ? null : (
                    <img src={postImage} class="content__image" />
                )}
            </div>
        );
    }
}

export default PostContent;
