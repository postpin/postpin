import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from "react-dom";
import PhotoGrid from "react-photo-feed";
import { Col, Row, Container } from "../../components/Grid";
import "react-photo-feed/library/style.css";
import "./Gallery.css";
import ImgList from '../../components/ImgList';
import SearchForm from '../../components/SearchForm';
import Jumbotron from "../../components/Jumbotron";
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from "react-router-dom"
import API from '../../utils/API';

class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      imgs: [],
      photos: [],
      loadingState: true
    };
  }

  componentDidMount() {
    this.performSearch();

  }

  performSearch = (query = 'people') => {
    axios
      .get(
      `https://api.unsplash.com/search/photos/?page=1&per_page=28&query=${query}&client_id=7c576b9235c5943df0c01ef4561602af3d56d65052d7bff4b207e6aee46b041e`
      )
      .then(response => {
        // this.setState({ imgs: response.data.results, loadingState: false });
        console.log('response.data.results: ', response.data.results);

        const potatoes = []
        if (!response.data.results || response.data.results.length === 0) {
          return <div>Loading ... </div>
        }
        response.data.results.map(img => {
          potatoes.push({
            id: img.id,
            src: img.urls.regular,
            bigSrc: img.urls.regular
          });
        });
        this.setState({ imgs: potatoes })



      })
      .catch(err => {
        console.log('Error happened during fetching!', err);
        // <PhotoGrid columns={4} photos={this.renderContent()} />
      });



  };
  // const metricPhoto = {this.state.loadingState
  //         ? <p>Loading</p>
  //         : <ImgList data={this.state.imgs} />};
  // {!this.state.imgs ? <div>Loading ... </div> : <PhotoGrid columns={4} photos={this.renderContent()} />}

  //   <div>
  //   <InfiniteScroll
  //   pullDownToRefresh
  //   pullDownToRefreshContent={
  //     <h3 style={{textAlign: 'center'}}>&#8595; Pull down to refresh</h3>
  //   }
  //   releaseToRefreshContent={
  //     <h3 style={{textAlign: 'center'}}>&#8593; Release to refresh</h3>
  //   }
  //
  // refreshFunction={this.refresh}
  // next={fetchData}
  // hasMore={true}
  // loader={<h4>Loading...</h4>}
  // endMessage={
  // <p style={{textAlign: 'center'}}>
  //   <b>Yay! You have seen it all</b>
  // </p>
  // }>
  // {items}
  // </InfiniteScroll>
  // </div>

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <div className="jumbo-text">
            <div className="headline">Gallery View</div>
            {/* <div className="blah">Be inspirational Be creative</div> */}
            <div className="search-bar"><SearchForm onSearch={this.performSearch} /> </div>

          </div>
        </Jumbotron>
        <div>
          {!this.state.loadingState ? <div>Loading ... </div>
            : <PhotoGrid columns={4} photos={this.state.imgs} />}

        </div>
      </Container>


    )
  }
}
export default Gallery;