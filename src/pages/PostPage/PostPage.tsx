import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Post from '../../interfaces/post-interface';
import { getPost } from '../../services/post-service';

const PostPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        getPost(Number(id))
            .then((res) => setPost(res))
            .catch((err) => console.error(err));
    }, [])

    return <>
        {post 
            ? <>
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
              </>
            : <h1></h1>}
    </>
};

export default PostPage;