import CreateOrUpdatePost from '../interfaces/create-or-update-post-interface.tsx';
import Post from '../interfaces/post-interface.ts';

export const getAllPosts = async (): Promise<Post[]> => {
    const response = await fetch('http://localhost:8080/posts', {
        headers: {
                'Content-Type': 'application/json'
        }
    });
 
    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    };

    const posts = await response.json();

    posts.forEach((post: Post) => {
        post.createdAt = new Date(post.createdAt);
        post.modifiedAt = new Date(post.modifiedAt);
    });

    return posts;
};

export const getPost = async (id: number): Promise<Post> => {
    const response = await fetch(`http://localhost:8080/posts/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch post');
    }

    const post = await response.json();

    post.createdAt = new Date(post.createdAt);
    post.modifiedAt = new Date(post.modifiedAt);

    return post;
};

export const createPost = async (data: CreateOrUpdatePost): Promise<Post> => {
    const createdAt = new Date();
    const modifiedAt = new Date();

    const post = {
        ...data,
        createdAt,
        modifiedAt
    };

    const response = await fetch('http://localhost:8080/posts', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(post)
    });

    if (response.status != 201) {
        throw new Error('Failed to create post');
    }

    const createdPost = await response.json();

    return createdPost;
};

export const updatePost = async (id: number, data: CreateOrUpdatePost): Promise<Post> => {
    const modifiedAt = new Date();

    const post = {
        ...data,
        modifiedAt
    };

    const response = await fetch(`http://localhost:8080/posts/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify(post)
    });

    if (response.status != 200) {
        throw new Error('Failed to update post');
    }

    const updatedPost = await response.json();

    return updatedPost;
};

export const deletePost = async (id: number): Promise<void> => {
    const response = await fetch(`http://localhost:8080/posts/${id}`, {
        method: 'DELETE'
    });

    if (response.status != 204) {
        throw new Error('Failed to delete post');
    }
};