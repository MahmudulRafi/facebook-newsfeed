(this["webpackJsonpfacebook-newsfeed"]=this["webpackJsonpfacebook-newsfeed"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n(7),r=n.n(c),a=(n(12),n(2)),o=n(3),i=n(5),u=n(4),j=[{postId:0,userId:100,userName:"Tamim Iqbal",userImageSource:"/images/user-images/Tamim.jpg",postingDateTime:"09 Aug, 2021",postContent:"No greater feeling than being back with the squad. How your lockdown days are passing guys!",postImageSource:"/images/post-content/bd-cricket.jpg",isLiked:!1,likeCount:2,shareCount:2,comments:[{postId:0,userId:102,commentId:0,comment:"Miss you my team"},{postId:0,userId:101,commentId:1,comment:"Well played"}]},{postId:1,userId:101,userName:"Sakib Al Hasan",userImageSource:"/images/user-images/sakib.jpg",postingDateTime:"05 Aug, 2021",postContent:"Golden Memories. Century with west indies",postImageSource:"/images/post-content/sakib-century.jpg",isLiked:!1,likeCount:6,shareCount:1,comments:[{postId:1,userId:100,commentId:0,comment:"Congratulations again."},{postId:1,userId:102,commentId:1,comment:"Amazing Memories Sakib Bhai!"}]},{postId:2,userId:102,userName:"Mushfiqure Rahim",userImageSource:"/images/user-images/mushfique.jpg",postingDateTime:"01 Aug, 2021",postContent:"What a moment for us! What a victory! 4-1 against a strong Australian team. Congratulations to each and everyone of my team mates!!",postImageSource:"/images/post-content/bd-win.jpg",isLiked:!0,likeCount:3,shareCount:0,comments:[{postId:2,userId:100,commentId:0,comment:"Hello"},{postId:2,userId:101,commentId:1,comment:"Nice"}]}],l=function(){return j},m=(n(13),n(0)),d=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.userName,n=e.postingDateTime,s=e.userImage;return Object(m.jsxs)("div",{class:"header__left",children:[Object(m.jsx)("a",{href:"#",children:Object(m.jsx)("img",{src:s,class:"post__author-pic"})}),Object(m.jsxs)("div",{class:"post__author author",children:[Object(m.jsx)("span",{class:"author__name",children:Object(m.jsx)("a",{children:t})}),Object(m.jsx)("i",{class:"author__verified"})]}),Object(m.jsx)("span",{class:"post__date",children:Object(m.jsx)("a",{children:n})}),Object(m.jsx)("span",{class:"post__date-privacy-separator",children:"\xa0\xb7 "}),Object(m.jsx)("i",{class:"post__privacy"})]})}}]),n}(s.Component),p=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{class:"header__right",children:Object(m.jsx)("div",{class:"post__options options",children:Object(m.jsx)("i",{class:"options__icon"})})})}}]),n}(s.Component),b=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.postContent,n=e.postImage;return Object(m.jsxs)("div",{class:"post__content content",children:[Object(m.jsx)("p",{class:"content__paragraph",children:t}),""===n?null:Object(m.jsx)("img",{src:n,class:"content__image"})]})}}]),n}(s.Component),h=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{class:"comments__box box",children:[Object(m.jsx)("div",{class:"box__profile profile",children:Object(m.jsx)("img",{src:"/images/user-images/mashrafe.jpg",class:"profile__pic"})}),Object(m.jsx)("div",{class:"box__bar bar",children:Object(m.jsx)("input",{type:"text",placeholder:"Write a comment...",class:"bar__input"})})]})}}]),n}(s.Component),O=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.comment,n=e.userName,s=e.userImage;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{class:"comments__friend-comment friend-comment",children:[Object(m.jsx)("img",{src:s,class:"friend-comment__pic"}),Object(m.jsxs)("div",{class:"friend-comment__comment comment",children:[Object(m.jsx)("a",{href:"#",class:"comment__author",children:n}),Object(m.jsx)("span",{class:"comment__content",children:t})]})]})})}}]),n}(s.Component),f=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.comments,n=e.allPost;return Object(m.jsxs)("div",{class:"footer__comments comments",children:[Object(m.jsx)(h,{}),t.map((function(e){return Object(m.jsx)(O,{comment:e.comment,userName:n.find((function(t){return t.userId===e.userId})).userName,userImage:n.find((function(t){return t.userId===e.userId})).userImageSource},e.commentId)}))]})}}]),n}(s.Component),v=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("span",{class:"buttons__share share",children:[Object(m.jsx)("i",{class:"share__icon"}),"Share"]})}}]),n}(s.Component),_=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.postId,n=e.isLiked,s=e.onPostLike;return Object(m.jsxs)("span",{class:n?"buttons__like__active":"buttons__like like",onClick:function(){return s(t)},children:[Object(m.jsx)("i",{class:"like__icon"}),n?"Liked":"Like"]})}}]),n}(s.Component),g=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("span",{class:"buttons__comment comment",children:[Object(m.jsx)("i",{class:"comment__icon"}),"Comment"]})}}]),n}(s.Component),x=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.postId,n=e.isLiked,s=e.onPostLike;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{class:"footer__buttons buttons",children:[Object(m.jsx)(_,{isLiked:n,postId:t,onPostLike:s}),Object(m.jsx)(g,{}),Object(m.jsx)(v,{})]})})}}]),n}(s.Component),k=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.isLiked,n=e.likeCount,s=e.commentsCount,c=e.shareCount;return Object(m.jsxs)("div",{class:"footer__reactions reactions",children:[Object(m.jsxs)("div",{class:"reactions__emojis emojis",children:[Object(m.jsx)("img",{src:"/images/like.svg",class:"emojis__like"}),Object(m.jsx)("span",{class:"emojis__count",children:Object(m.jsxs)("p",{children:[t?"You and ":"",n," ",t?"others":""]})})]}),Object(m.jsxs)("div",{class:"reactions__comment-shares",children:[Object(m.jsx)("span",{class:"comment-shares__comments",children:Object(m.jsxs)("a",{children:[s," Comments "]})}),Object(m.jsx)("span",{class:"comment-shares__shares",children:Object(m.jsxs)("a",{children:[0===c?null:c,0===c?null:" Shares"]})})]})]})}}]),n}(s.Component),I=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.postId,n=e.isLiked,s=e.likeCount,c=e.commentsCount,r=e.shareCount,a=e.onPostLike;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(k,{isLiked:n,likeCount:s,commentsCount:c,shareCount:r}),Object(m.jsx)(x,{postId:t,isLiked:n,onPostLike:a})]})}}]),n}(s.Component),y=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.post,n=e.allPost,s=e.onPostLike;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{class:"container",children:Object(m.jsxs)("div",{class:"post",children:[Object(m.jsxs)("div",{class:"post__header header",children:[Object(m.jsx)(d,{userName:t.userName,postingDateTime:t.postingDateTime,userImage:t.userImageSource}),Object(m.jsx)(p,{})]}),Object(m.jsx)(b,{postContent:t.postContent,postImage:t.postImageSource}),Object(m.jsxs)("div",{class:"post__footer footer",children:[Object(m.jsx)(I,{postId:t.postId,isLiked:t.isLiked,likeCount:t.likeCount,commentsCount:t.comments.length,shareCount:t.shareCount,onPostLike:s}),Object(m.jsx)(f,{comments:t.comments,allPost:n})]})]})})})}}]),n}(s.Component),C=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={posts:l()},e.handlePostLike=function(t){var n=e.state.posts;n.forEach((function(e){e.postId===t&&(!1===e.isLiked?e.isLiked=!0:e.isLiked=!1)})),e.setState({posts:n})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state.posts;return t.map((function(n){return Object(m.jsx)(y,{post:n,allPost:t,onPostLike:e.handlePostLike},n.id)}))}}]),n}(s.Component);var L=function(){return Object(m.jsx)(C,{})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),r(e),a(e)}))};r.a.render(Object(m.jsx)(L,{}),document.getElementById("root")),w()}},[[15,1,2]]]);
//# sourceMappingURL=main.43a7c68e.chunk.js.map