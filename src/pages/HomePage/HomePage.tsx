import { useEffect, useState } from 'react';
import Post from '../../interfaces/post-interface';
import { getAllPosts } from '../../services/post-service';

const HomePage = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        getAllPosts()
            .then((res) => setPosts(res))
            .catch((err) => console.log(err));
    }, [])

    return <>
        <h1>Home</h1>
        <ul>
            {
                posts.map((post) => {
                    return <li key={post.id}>{post.title}</li>
                })
            }
        </ul>
    </>
};

export default HomePage;