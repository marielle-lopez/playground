import { createContext, useState } from 'react';
import Post from '../interfaces/post-interface';

interface PostsContextType {
    posts: Post[];
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

export const PostsContext = createContext<PostsContextType>({
    posts: [],
    setPosts: () => {}
});

const PostsContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [posts, setPosts] = useState<Post[]>([]);

    return <PostsContext.Provider value={{ posts, setPosts}} >
        {children}
    </PostsContext.Provider>
};

export default PostsContextProvider;