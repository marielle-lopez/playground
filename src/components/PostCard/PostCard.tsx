import Post from "../../interfaces/post-interface";
import { NavLink } from "react-router-dom";

interface PostCardProps {
    post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
    return <div>
        <h1>{post.title}</h1>
        <p>{post.modifiedAt.toDateString()}</p>
        <p>{post.author}</p>
        <p>{post.introduction}</p>
        <ul>
            {post.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <NavLink to={`/post/${post.id}`}>
            <button>Read more</button>
        </NavLink>
    </div>
};

export default PostCard;