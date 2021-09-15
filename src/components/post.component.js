import React, { Component } from "react";
import "./assets/css/post.css";
import UserInfo from "./user-info/userInfo.component";
import PostOptions from "./post-options/postOptions.component";
import PostContent from "./post-content/postContent.component";
import PostComments from "./post-comments/postComments.component";
import PostReactions from "./post-reactions/postReactions.component";

class Post extends Component {
    state = {};

    render() {
        const { post, allPost, onPostLike, onCreateComment, logedinUser } =
            this.props;

        return (
            <>
                <div class="container">
                    <div class="post">
                        {/*  POST HEADER */}

                        <div class="post__header header">
                            {/*  header left */}

                            <UserInfo
                                userName={post.userName}
                                postingDateTime={post.postingDateTime}
                                userImage={post.userImageSource}
                            />

                            {/*  Header right  */}

                            <PostOptions />
                        </div>
                        {/*  POST CONTENT  */}

                        <PostContent
                            postContent={post.postContent}
                            postImage={post.postImageSource}
                        />

                        {/*  POST FOOTER  */}
                        <div class="post__footer footer">
                            {/* Reactions */}

                            <PostReactions
                                postId={post.postId}
                                isLiked={post.isLiked}
                                likeCount={post.likeCount}
                                commentsCount={post.comments.length}
                                shareCount={post.shareCount}
                                onPostLike={onPostLike}
                            />

                            {/*  Comments */}

                            <PostComments
                                postId={post.postId}
                                comments={post.comments}
                                allPost={allPost}
                                onCreateComment={onCreateComment}
                                logedinUser={logedinUser}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Post;
