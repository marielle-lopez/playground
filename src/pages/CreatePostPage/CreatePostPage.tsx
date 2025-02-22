import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { postSchema } from '../../schemas/post-schema';
import { createPost } from '../../services/post-service';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePostPage = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm({
        resolver: zodResolver(postSchema),
    });

    useEffect(() => {
        reset();
    }, [isSubmitSuccessful]);

    return <>
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit((data) => 
            createPost(data)
                .then((createdPost) => navigate(`/post/${createdPost.id}`))
                .catch((error) => console.error(error)))}>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" {...register('title')} />
                {errors?.title && <p>{errors.title.message}</p>}
            </div>
            <div>
                <label htmlFor="author">Author</label>
                <input type="text" id="author" {...register('author')}/>
                {errors?.author && <p>{errors.author.message}</p>}
            </div>
            <div>
                <label htmlFor="introduction">Introduction</label>
                <textarea id="introduction" {...register('introduction')}></textarea>
                {errors?.introduction && <p>{errors.introduction.message}</p>}
            </div>
            <div>
                <label htmlFor="body">Body</label>
                <textarea id="body" {...register('body')}></textarea>
                {errors?.body && <p>{errors.body.message}</p>}
            </div>
            <div>
                <label htmlFor="conclusion">Conclusion</label>
                <textarea id="conclusion" {...register('conclusion')}></textarea>
                {errors?.conclusion && <p>{errors.conclusion.message}</p>}
            </div>
            <div>
                <label htmlFor="tags">Tags</label>
                <select id="tags" {...register('tags')} multiple>
                    <option value="cooking">Cooking</option>
                    <option value="secret">Secret</option>
                    <option value="spongebob">Spongebob</option>
                </select>
                {errors?.tags && <p>{errors.tags.message
                    ? errors.tags.message
                    : 'At least one tag is required'}</p>}
            </div>
            <button type="submit">Create Post</button>
        </form>
    </>
};

export default CreatePostPage;