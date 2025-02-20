# Playground

## Changelog

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