import React, { Component } from 'react';
// import UserProfile from '../../components/UserProfile';
// import API from "../../utils/API";

class Comments extends Component {
  // Setting our component's initial state
  state = {
    comments: [],
    body: "",
    likeTotal: "",
    userName: "", //ask how to past props down
    _post: ""
  };

  // When the component mounts, load all Comments and save them to this.state.Comments
  componentDidMount() {
    this.loadPost();
    this.loadComments();
    this.saveComment();
  }

  // Loads Post  and sets them to this.state.Comments
  loadPost = () => {
    API.getPost()
      .then(res => {
        this.setState({ _post: res.data })
      })
      .catch(console.error)
  };


  // Loads all Comments  and sets them to this.state.Comments
  loadComments = () => {
    API.getAllComments()
      .then(res =>
        this.setState({ comments: res.data, comment_body: "", comment_likeTotal: "", comment_userName: "" })
      )
      .catch(err => console.log(err));
  };


  saveComment = () => {
    API.createComment()
      .then(res =>
        this.setState({ comments: res.data, body: "", _post:"", userName: this.props.userInfo.firstName }) //???
      )
      .catch(err => console.log(err));
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <div className="Comments">
        <h1> Comments Page </h1>

      </div>
    )
  }
}


export default Comments;
