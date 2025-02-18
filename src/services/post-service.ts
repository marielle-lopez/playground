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

    return posts;
};

export const createPost = async (data: Post): Promise<Post> => {
    const response = await fetch('http://localhost:8080/posts', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    });

    if (response.status != 201) {
        throw new Error('Failed to create post');
    }

    const createdPost = await response.json();

    return createdPost
};