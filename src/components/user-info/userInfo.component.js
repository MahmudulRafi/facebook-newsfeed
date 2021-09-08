import React, { Component } from "react";

class UserInfo extends Component {
    state = {};
    render() {
        const { userName, postingDateTime, userImage } = this.props;

        return (
            <div class="header__left">
                <a href="#">
                    <img src={userImage} class="post__author-pic" />
                </a>
                <div class="post__author author">
                    <span class="author__name">
                        <a>{userName}</a>
                    </span>
                    <i class="author__verified"></i>
                </div>
                <span class="post__date">
                    <a>{postingDateTime}</a>
                </span>
                <span class="post__date-privacy-separator">&nbsp;· </span>
                <i class="post__privacy"></i>
            </div>
        );
    }
}

export default UserInfo;
