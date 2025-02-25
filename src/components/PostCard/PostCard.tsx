import { useContext } from "react";
import Post from "../../interfaces/post-interface";
import { deletePost, getAllPosts } from "../../services/post-service";
import { PostsContext } from "../../contexts/PostsContextProvider";
import { NavLink } from "react-router-dom";

interface PostCardProps {
    post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
    const { setPosts } = useContext(PostsContext);

    return <div>
        <h1>{post.title}</h1>
        <p>{post.modifiedAt.toDateString()}</p>
        <p>{post.author}</p>
        <p>{post.introduction}</p>
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
        <NavLink to={`/post/${post.id}`}>
            <button>Read more</button>
        </NavLink>
    </div>
};

export default PostCard;