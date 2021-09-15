import React, { Component } from "react";
import AddNewComment from "./addNewComment.component";
import UserComment from "./userComment.component";

class PostComments extends Component {
    render() {
        const { comments, allPost, postId, onCreateComment, logedinUser } =
            this.props;

        return (
            <div class="footer__comments comments">
                <AddNewComment
                    postId={postId}
                    allPost={allPost}
                    onCreateComment={onCreateComment}
                    logedinUser={logedinUser}
                />

                {comments.map((comment) => {
                    return (
                        <UserComment
                            key={comment.commentId}
                            comment={comment.comment}
                            userName={
                                allPost.find(
                                    (user) => user.userId === comment.userId
                                ).userName
                            }
                            userImage={
                                allPost.find(
                                    (user) => user.userId === comment.userId
                                ).userImageSource
                            }
                        />
                    );
                })}
            </div>
        );
    }
}

export default PostComments;
