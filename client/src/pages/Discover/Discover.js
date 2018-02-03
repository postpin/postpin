import React, {Component} from 'react';
import axios from 'axios';
import ReactDOM from "react-dom";
import PhotoGrid from "react-photo-feed";
import {Col, Row, Container} from "../../components/Grid";
import "react-photo-feed/library/style.css";
import "./Discover.css";
import ImgList from '../../components/ImgList';
import SearchForm from '../../components/SearchForm';
import Jumbotron from "../../components/Jumbotron";
import InfiniteScroll from 'react-infinite-scroll-component';
import {Link} from "react-router-dom"
import API from '../../utils/API';
import Post  from "../Post/Post";

class Discover extends React.Component {
  constructor() {
    super();
    this.state = {
      imgs: [],
      loadingState: true,
      hideComponent: false
    };
  }

  componentDidMount() {
    this.performSearch();

  }

  performSearch = (query = 'landscape') => {
    axios.get(`https://api.unsplash.com/search/photos/?page=1&per_page=28&query=${query}&client_id=fa0b26bd4c0834d6a66f39587142bd9bac839fc21d640ed07a509347b37dbd5c`).then(response => {
      this.setState({imgs: response.data.results});

    }).catch(err => {
      console.log('Error happened during fetching!', err);
    });
  };

  onImageClick(img) {
    const imgToSave = {
      imageID: img.id,
      image: img.urls.small
    }
    API.getPost(img.id)
      .then(res => {
        const imgExists = res.data;

        if (imgExists) {
          console.log('it exists');
          console.log(this.props.history.push(`/posts/${img.id}/comments`));
        }
        else {
          console.log('it created one');
          API.createPost(imgToSave)
            .then(this.props.history.push(`/posts/${img.id}/comments`))
        }

      })
      .catch(
        err => {console.error(err);}
      );
  }



  render() {
    return (<Container fluid="fluid">
      <Jumbotron>
        <div className="jumbo-text">
          <div className="headline">Captionized</div>
          <div className="blah">Be inspirational Be creative</div>
          <div className="search-bar"><SearchForm onSearch={this.performSearch}/>
          </div>
        </div>
      </Jumbotron>
      <div>
        The content should load here

        {!this.state.imgs? <div>Loading...</div>: this.state.imgs.map(img => {
          return (
            <div key={img.id}>
              <div onClick={() => {this.onImageClick(img)}}>
                <img src={img.urls.thumb} />
              </div>
            </div>
          )
        })}
      </div>
    </Container>)
  }
}
export default Discover;
