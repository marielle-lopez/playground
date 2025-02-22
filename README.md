# Playground

## Changelog

### 22 February 2025
- Create `EditPostPage` to provide a page dedicated to editing a specific post
    - Ensure presented form is prefilled with information of post being edited to enhance user experience
- Improve user experience by navigating the user to specific pages upon successful interactions (i.e., after a post is successfully deleted, the user is automatically navigated to the homepage)
- Fix a bug where deleting a post causes the form for updating a post to submit
    - The button for deleting a post was misplaced between the `<form></form>` tags

I had some trouble with getting the form prefilled, mainly because the `post` should not, at any point, be `null`, Otherwise, `Zod` would throw a fit. So, I isolated 'Edit mode' into its own page at `/editPost/{id}`, which the user would be able to navigate to by clicking the 'Edit' button. The next speedbump was knowing how to pass the `post` to the edit page when the user arrived to it. I got some good help from this page: [How to Pass Props Through React Router's Link Component](https://ui.dev/react-router-pass-props-to-link).

### 20 February 2025
- Create `PostsContextProvider` to house `posts` state and corresponding setter, ultimately allowing `posts` state to refresh when a post is deleted
- Create `PostPage` to display specific information of a post with a specific ID and add a corresponding route
- Add a button to `PostCard` component to navigate to `/post/{id}` when specific post is clicked
- Add loading display when post is being retrieved for `PostPage`
- Add button to delete post on `PostPage`
- Add button to change to 'Edit' mode on `PostPage`

### 19 February 2025
- Create `PostCard` component to display all posts on the homepage
- Add basic form with schema validation to allow user to create a post

### 18 February 2025
- Set up basic React application
- Create basic pages for home and creating a post
- Create `NavigationBar` component and use React Router for page navigation
- Set up `Post` service to call backend for `post`-related data