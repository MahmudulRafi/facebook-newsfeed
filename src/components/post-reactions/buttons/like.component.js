import React, { Component } from "react";
import { BiLike } from "react-icons/bi";
import { AiTwotoneLike } from "react-icons/ai";

class Like extends Component {
    state = {};
    render() {
        const { postId, isLiked, onPostLike } = this.props;
        return (
            <>
                <span
                    class={
                        isLiked ? "buttons__like__active" : "buttons__like like"
                    }
                    onClick={() => onPostLike(postId)}
                >
                    <i class="like__icon"></i>
                    {isLiked ? "Liked" : "Like"}
                </span>
            </>
        );
    }
}

export default Like;
