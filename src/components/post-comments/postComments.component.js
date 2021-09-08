import React, { Component } from "react";
import AddNewComment from "./add-new-comment/addNewComment.component";
import UserComment from "./load-comments/userComment.component";

class PostComments extends Component {
    render() {
        const { comments, allPost } = this.props;

        return (
            <div class="footer__comments comments">
               
                <AddNewComment />

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
