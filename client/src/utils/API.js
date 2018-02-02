import axios from 'axios'

export default {

  // Gets all users
  getCurrentUser: () => ( axios.get('/api/current_user') ),

  // Gets all comments
  getAllComments: () => ( axios.get('/api/comments') ),

  // Gets the comments with the given id
  // getComments: id => ( axios.get(`/api/comment/${ id }`) ),

  // Saves a comment to the database
  // createComment: comment => (axios.post(`/api/comment/${id}`, comment)),

  // Gets all comments
  getAllPost: () => (axios.get('/api/posts')),

  // Gets the comments with the given id
  getPost: id => (axios.get(`/api/posts/${id}`)),

  // Saves a book to the database
  createPost: unsplashData => (axios.post('/api/posts', unsplashData) ),
  createComment: commentData => (axios.post('/api/posts/:id/comments', commentData)),


  signup: credentials => ( axios.post('/signup', credentials) ),

  login: credentials => ( axios.post('/login', credentials) ),

  checkForSession: credentials => ( axios.get('/session') ),

}
