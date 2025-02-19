import { useEffect, useState } from 'react';
import Post from '../../interfaces/post-interface';
import { getAllPosts } from '../../services/post-service';
import PostCard from '../../components/PostCard/PostCard';

const HomePage = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        getAllPosts()
            .then((res) => setPosts(res))
            .catch((err) => console.log(err));
    }, [])

    return <>
        <h1>Home</h1>
        {
            posts && posts.map((post) => <PostCard key={post.id} post={post} />)
        }
    </>
};

export default HomePage;