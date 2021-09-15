import React, { Component } from "react";
import { getPosts } from "../services/post.service";
import Post from "./post.component";

class Newsfeed extends Component {
    state = {
        posts: getPosts(),
        logedinUser: {
            userId: 103,
        },
    };

    handlePostLike = (postId) => {
        const posts = this.state.posts;

        posts.forEach((post) => {
            if (post.postId === postId)
                post.isLiked === false
                    ? (post.isLiked = true)
                    : (post.isLiked = false);
        });
        this.setState({ posts: posts });
    };

    handleCreateComment = (postIndex, event) => {
        const postId = postIndex;

        if (event.target.value === "") return;

        const posts = this.state.posts;

        if (event.key === "Enter") {
            const totalComment = posts[postId].comments.length;
            let newCommentId = 0;

            if (totalComment > 0)
                newCommentId =
                    posts[postId].comments[totalComment - 1].commentId + 1;

            posts[postId].comments.push({
                postId: postId,
                userId: this.state.logedinUser.userId,
                commentId: newCommentId,
                comment: event.target.value,
            });

            event.target.value = "";
            this.setState({ posts: posts });
        }
    };

    render() {
        const { posts } = this.state;

        return posts.map((post) => (
            <Post
                key={post.id}
                post={post}
                allPost={posts}
                onPostLike={this.handlePostLike}
                onCreateComment={this.handleCreateComment}
                logedinUser={this.state.logedinUser.userId}
            />
        ));
    }
}

export default Newsfeed;
