const posts = [
    {
        postId: 0,
        userId: 100,
        userName: "Tamim Iqbal",
        userImageSource:
            "https://pbs.twimg.com/profile_images/1396734062031630343/tDgBGQSt.jpg",
        postingDateTime: "09 Aug, 2021",
        postContent:
            "No greater feeling than being back with the squad. How your lockdown days are passing guys!",
        postImageSource:
            "https://staticg.sportskeeda.com/editor/2021/03/cd85c-16164979048627-800.jpg",
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
        userImageSource:
            "https://www.crictracker.com/wp-content/uploads/2019/10/Shakib-Al-Hasan-1-1.jpg",
        postingDateTime: "05 Aug, 2021",
        postContent: "Golden Memories. Century with west indies",
        postImageSource:
            "https://s3.ap-southeast-1.amazonaws.com/newsbytes.image-bucket.01/assets/banners/facebook-1616055823-page-odi-centuries-scored-by-shakib-al-hasan.jpg",
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
        userImageSource:
            "https://pbs.twimg.com/profile_images/1401882435021725699/BY90pnvA_400x400.jpg",
        postingDateTime: "01 Aug, 2021",
        postContent:
            "What a moment for us! What a victory! 4-1 against a strong Australian team. Congratulations to each and everyone of my team mates!!",
        postImageSource:
            "https://s01.sgp1.cdn.digitaloceanspaces.com/article/162620-viymckqkjm-1628526039.jpeg",
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
    {
        postId: 3,
        userId: 103,
        userName: "Mahrafe Mortaza",
        userImageSource:
            "https://s.ndtvimg.com/images/entities/300/mashrafe-mortaza-288.png",
        postingDateTime: "01 Aug, 2021",
        postContent: "What a moment for us!",
        postImageSource: "",
        isLiked: false,
        likeCount: 3,
        shareCount: 0,
        comments: [
            {
                postId: 3,
                userId: 100,
                commentId: 0,
                comment: "Hello",
            },
        ],
    },
];

const getPosts = () => {
    return posts;
};

export { getPosts };
