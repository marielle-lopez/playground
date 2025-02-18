const CreatePostPage = () => {
    return <>
        <h1>Create Post</h1>
        <form>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" />
            </div>
            <div>
                <label htmlFor="author">Author</label>
                <input type="text" id="author" name="author" />
            </div>
            <div>
                <label htmlFor="introduction">Introduction</label>
                <textarea id="introduction" name="introduction"></textarea>
            </div>
            <div>
                <label htmlFor="body">Body</label>
                <textarea id="body" name="body"></textarea>
            </div>
            <div>
                <label htmlFor="conclusion">Conclusion</label>
                <textarea id="conclusion" name="conclusion"></textarea>
            </div>
            <div>
                <label htmlFor="tags">Tags</label>
                <input type="text" id="tags" name="tags" />
            </div>
            <button type="submit">Create Post</button>
        </form>
    </>
};

export default CreatePostPage;