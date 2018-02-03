import React, { Component } from 'react';
import Comment from '../Comments/Comments';
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      img: {}
    }
  }
  componentDidMount() {
    this.getPost()
    console.log(this);
    
  }

  getPost() {
    
    API.getPost(this.props.match.params.id)
      .then(res => this.setState({img: res.data})
      )
      .catch(err => console.error(err));
  }

  render() {
    console.log(this.state.img);
    
    return (
      <div className="post">
        <h1> Post Page </h1>
        <div className="container">
          <div className="col-xs-6">
            {!this.state.img ? <div>Loading ... </div> : <img src={this.state.img.image} />}
          </div>
          <div className="col-xs-6">
            <Comment />
          </div>
          <div className="form">
            <form>
              <TextArea
                value={this.state.comment}
                onChange={this.handleInputChange}
                name="comment"
                placeholder="comment (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Comment
              </FormBtn>
            </form>
          
          </div>

        </div>
      </div>
    )
  }
}


export default Post;