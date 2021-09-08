import React, { Component } from "react";

class AddNewComment extends Component {
    state = {};
    render() {
        return (
            <div class="comments__box box">
                <div class="box__profile profile">
                    <img
                        src="/images/user-images/mashrafe.jpg"
                        class="profile__pic"
                    />
                </div>
                <div class="box__bar bar">
                    <input
                        type="text"
                        placeholder="Write a comment..."
                        class="bar__input"
                    />
                </div>
            </div>
        );
    }
}

export default AddNewComment;
