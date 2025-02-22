import { useForm } from 'react-hook-form';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { postSchema } from "../../schemas/post-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { deletePost, getAllPosts, updatePost } from '../../services/post-service';
import { useContext } from 'react';
import { PostsContext } from '../../contexts/PostsContextProvider';

const EditPostPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { post } = location.state;
    const { setPosts } = useContext(PostsContext);
    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm({
            resolver: zodResolver(postSchema),
            defaultValues: {
                title: post.title,
                author: post.author,
                introduction: post.introduction,
                body: post.body,
                conclusion: post.conclusion,
                tags: post.tags
            }
        });

    return <>
        <h1>Edit post</h1>
        <form onSubmit={handleSubmit((data) => updatePost(post.id, data).then(() => navigate(`/post/${post.id}`)))}>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" {...register('title')} />
                        {errors?.title && <p>{errors.title.message?.toString()}</p>}
                    </div>
                    <div>
                        <label htmlFor="author">Author</label>
                        <input type="text" id="author" {...register('author')}/>
                        {errors?.author && <p>{errors.author.message?.toString()}</p>}
                    </div>
                    <div>
                        <label htmlFor="introduction">Introduction</label>
                        <textarea id="introduction" {...register('introduction')}></textarea>
                        {errors?.introduction && <p>{errors.introduction.message?.toString()}</p>}
                    </div>
                    <div>
                        <label htmlFor="body">Body</label>
                        <textarea id="body" {...register('body')}></textarea>
                        {errors?.body && <p>{errors.body.message?.toString()}</p>}
                    </div>
                    <div>
                        <label htmlFor="conclusion">Conclusion</label>
                        <textarea id="conclusion" {...register('conclusion')}></textarea>
                        {errors?.conclusion && <p>{errors.conclusion.message?.toString()}</p>}
                    </div>
                    <div>
                        <label htmlFor="tags">Tags</label>
                        <select id="tags" {...register('tags')} multiple>
                            <option value="cooking">Cooking</option>
                            <option value="secret">Secret</option>
                            <option value="spongebob">Spongebob</option>
                        </select>
                        {errors?.tags && <p>{errors.tags.message
                            ? errors.tags.message.toString()
                            : 'At least one tag is required'}</p>}
                    </div>
                    <NavLink to={`/post/${post.id}`}>
                        <button>Cancel</button>
                    </NavLink>
                    <button onClick={
                        () => deletePost(post.id)
                            .then(() => getAllPosts()
                                .then((res) => setPosts(res))
                                .catch((err) => console.error(err.message)))}>
                        Delete
                    </button>
                    <button type="submit">Update post</button>
                </form>
    </>
};

export default EditPostPage;