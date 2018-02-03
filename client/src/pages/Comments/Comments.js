import React, { Component } from 'react';
// import UserProfile from '../../components/UserProfile';
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from '../../components/List'
// import { Input, FormBtn } from "../../components/Form";
import SkyLight from "react-skylight";
import { Input, Button } from 'antd';
import Discover from "../Discover";

class Comments extends Component {
  // Setting our component's initial state

  constructor() {
    super();
    this.state = {
      comments: [],
      body: "",
      likeTotal: "",
      _post: "",
      image: "",
      loadingState: true
    };
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
        this.setState({ comments: res.data, body: "", _post: "", userName: this.props.userInfo.firstName }) //???
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
    const { comments, image} = this.state

    return (


      <Container fluid>
        <Row>
          <Col size='md-5 sm-12'>

            <h2 style={{ paddingTop: 25, paddingLeft: 25 }}>
              Comments
            </h2>

            {comments.length ? (
              <List>
                {comments.map(comment => (
                  <ListItem
                    key={comment.id}
                    style={{ cursor: 'pointer' }}
                    onClick={() => this.setState({ selectedcomment: comment })}
                  >
                    <div>
                      {comment.body}
                    </div>
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3 className='alert alert-warning'>No Comments</h3>
              )}
          </Col>

        </Row>
      </Container>
    )
  }
}


export default Comments;
