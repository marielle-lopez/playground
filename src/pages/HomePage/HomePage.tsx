import { useEffect, useContext } from 'react';
import { getAllPosts } from '../../services/post-service';
import PostCard from '../../components/PostCard/PostCard';
import { PostsContext } from '../../contexts/PostsContextProvider';

const HomePage = () => {
    const { posts, setPosts } = useContext(PostsContext);

    useEffect(() => {
        getAllPosts()
            .then((res) => setPosts(res))
            .catch((err) => console.log(err));
    }, [])

    return <>
        <h1>Home</h1>
        {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
    </>
};

export default HomePage;