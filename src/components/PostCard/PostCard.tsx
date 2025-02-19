import Post from "../../interfaces/post-interface";

interface PostCardProps {
    post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
    return <div>
        <h1>{post.title}</h1>
        <p>{post.createdAt.toDateString()}</p>
        <p>{post.modifiedAt.toDateString()}</p>
        <p>{post.author}</p>
        <p>{post.introduction}</p>
        <p>{post.body}</p>
        <p>{post.conclusion}</p>
        <ul>
            {post.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
    </div>
};

export default PostCard;