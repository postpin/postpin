import React, { Component } from "react";
import SkyLight from "react-skylight";
// import API from "../../routes/api/post";
import { Input, FormBtn } from "../../components/Form";
import { Col, Row, Container } from "../../components/Grid";
import ReactDOM from "react-dom";
// import deer from "./Post";

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }
//
//   _onClick = e => {
//     this.setState({ liked: true });
//   }
//
//   render() {
//     const label = this.state.liked ? 'Liked' : 'Like';
//
//     return <button onClick={this._onClick} disabled={this.state.liked}>{label}</button>;
//   }
// }

// ReactDOM.render(
//   <LikeButton />,
//   document.querySelector('#main')
// );


class Post extends React.Component {
  constructor(props){
    super(props);
  }

  // componentDidMount() {
  // this.loadPosts();
  // }

//   handleFormSubmit = event => {
//   event.preventDefault();
//   if (this.state.postTitle && this.state.postDescription) {
//     API.savePost({
//       title: this.state.postTitle,
//       discription: this.state.postDescription,
//     })
//       .then(res => this.loadPosts())
//       .catch(err => console.log(err));
//   }
// };

  render() {

    var postModalCSS = {
      backgroundColor: '#FFFFEF',
      color: 'black',
      width: '70%',
      height: '600px',
      marginTop: '-300px',
      marginLeft: '-35%',
    };

    return (
      <div>
        <section>
          <button onClick={() => this.customDialog.show()}>Open Modal</button>
        </section>



        <SkyLight dialogStyles={postModalCSS}
        hideOnOverlayClicked ref={ref => this.customDialog = ref}
        title="Caption this">

        <Row>
          <Col size="md-6">
          <h1> picture render here </h1>

          <button> download image </button>
          <button> like </button>

            </Col>
            <Col size="md-6 sm-12">

            <form>
              <Input
                // value={this.state.postTitle}
                // onChange={this.handleInputChange}
                name="comment"
                placeholder="your comment here..."
              />

              <FormBtn
                // disabled={!(this.state.postDescription && this.state.postTitle)}
                onClick={this.handleFormSubmit}
              >
                post your comment
              </FormBtn>
              </form>
            </Col>
          </Row>
        </SkyLight>
      </div>
    )
  }
}

Post.displayName = 'PostPage';

export default Post;
