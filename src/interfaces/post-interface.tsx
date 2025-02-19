interface Post {
    id: number;
    title: string;
    createdAt: Date;
    modifiedAt: Date;
    author: string;
    introduction: string;
    body: string;
    conclusion: string;
    tags: string[];
};

export default Post;