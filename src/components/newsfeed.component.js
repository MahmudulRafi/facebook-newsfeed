import React, { Component } from "react";
import { getPosts } from "../services/post.service";
import Post from "./post.component";

class Newsfeed extends Component {
    state = {
        posts: getPosts(),
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

    render() {
        const { posts } = this.state;

        return posts.map((post) => (
            <Post
                key={post.id}
                post={post}
                allPost={posts}
                onPostLike={this.handlePostLike}
            />
        ));
    }
}

export default Newsfeed;
