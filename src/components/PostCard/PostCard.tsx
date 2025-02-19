import { useContext } from "react";
import Post from "../../interfaces/post-interface";
import { deletePost, getAllPosts } from "../../services/post-service";
import { PostsContext } from "../../contexts/PostsContextProvider";

interface PostCardProps {
    post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
    const { setPosts } = useContext(PostsContext);

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
        <button onClick={
            () => deletePost(post.id)
                .then(() => getAllPosts()
                    .then((res) => setPosts(res))
                    .catch((err) => console.error(err.message)))}>
            Delete
        </button>
    </div>
};

export default PostCard;