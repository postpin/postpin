import React, { Component } from 'react';
// import UserProfile from '../../components/UserProfile';
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
// import { Input, FormBtn } from "../../components/Form";
import SkyLight from "react-skylight";
import { Input, Button} from 'antd';

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

  // <Input
  //   name="comment"
  //   placeholder="your comment here..."
  // />

  render() {
    return (
      <Container fluid>

        <div className="comment-div">
        <Row>
          <Col size="md-6">
          <h1> picture render here </h1>


          </Col>

          <Col size="md-6 sm-12">
          <h1> top comments </h1>
          <h1> render all comments here</h1>
            <form>

              <div>
                <Input placeholder="Your comments here..." /> <Button type="primary">submit</Button>
              </div>

              </form>
            </Col>
          </Row>

        </div>
        </Container>

    )
  }
}


export default Comments;
