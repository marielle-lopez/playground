import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import Post from '../../interfaces/post-interface';
import { deletePost, getAllPosts, getPost } from '../../services/post-service';
import { PostsContext } from '../../contexts/PostsContextProvider';

const PostPage = () => {
    const { id } = useParams();
    const { setPosts } = useContext(PostsContext);
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [editMode, setEditMode] = useState<boolean>(false);

    useEffect(() => {
        getPost(Number(id))
            .then((res) => setPost(res))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [loading])

    return <>
        {!post && !loading &&
            <>
                <h1>Post not found</h1>
                <p>Sorry, we couldn't find the post you were looking for.</p>
            </>
        }
        {!post && loading &&
            <p>Loading...</p>
        }
        {post && !editMode &&
            <>
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
                <button onClick={() => setEditMode(true)}>Edit</button>
            </>
        }
        {post && editMode &&
            <p>Edit mode</p>
        }
    </>
};

export default PostPage;