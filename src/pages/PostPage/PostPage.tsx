import { NavLink, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Post from '../../interfaces/post-interface';
import { getPost } from '../../services/post-service';

const PostPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

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
        {post &&
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
                <NavLink to={`/editPost`} state={{ post: post }}>
                    <button>Edit</button>
                </NavLink>
            </>
        }
    </>
};

export default PostPage;