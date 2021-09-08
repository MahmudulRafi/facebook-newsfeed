const posts = [
    {
        postId: 0,
        userId: 100,
        userName: "Tamim Iqbal",
        userImageSource: "/images/user-images/Tamim.jpg",
        postingDateTime: "09 Aug, 2021",
        postContent:
            "No greater feeling than being back with the squad. How your lockdown days are passing guys!",
        postImageSource: "/images/post-content/bd-cricket.jpg",
        isLiked: false,
        likeCount: 2,
        shareCount: 2,
        comments: [
            {
                postId: 0,
                userId: 102,
                commentId: 0,
                comment: "Miss you my team",
            },
            {
                postId: 0,
                userId: 101,
                commentId: 1,
                comment: "Well played",
            },
        ],
    },

    {
        postId: 1,
        userId: 101,
        userName: "Sakib Al Hasan",
        userImageSource: "/images/user-images/sakib.jpg",
        postingDateTime: "05 Aug, 2021",
        postContent: "Golden Memories. Century with west indies",
        postImageSource: "/images/post-content/sakib-century.jpg",
        isLiked: false,
        likeCount: 6,
        shareCount: 1,
        comments: [
            {
                postId: 1,
                userId: 100,
                commentId: 0,
                comment: "Congratulations again.",
            },
            {
                postId: 1,
                userId: 102,
                commentId: 1,
                comment: "Amazing Memories Sakib Bhai!",
            },
        ],
    },
    {
        postId: 2,
        userId: 102,
        userName: "Mushfiqure Rahim",
        userImageSource: "/images/user-images/mushfique.jpg",
        postingDateTime: "01 Aug, 2021",
        postContent:
            "What a moment for us! What a victory! 4-1 against a strong Australian team. Congratulations to each and everyone of my team mates!!",
        postImageSource: "/images/post-content/bd-win.jpg",
        isLiked: true,
        likeCount: 3,
        shareCount: 0,
        comments: [
            {
                postId: 2,
                userId: 100,
                commentId: 0,
                comment: "Hello",
            },
            {
                postId: 2,
                userId: 101,
                commentId: 1,
                comment: "Nice",
            },
        ],
    },
];

const getPosts = () => {
    return posts;
};

export { getPosts };
