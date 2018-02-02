import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from "react-dom";
import PhotoGrid from "react-photo-feed";
import { Col, Row, Container } from "../../components/Grid";
import "react-photo-feed/library/style.css";
import "./Discover.css";
import ImgList from '../../components/ImgList';
import SearchForm from '../../components/SearchForm';
import Jumbotron from "../../components/Jumbotron";
import InfiniteScroll from 'react-infinite-scroll-component';


class Discover extends React.Component {
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

	performSearch = (query = 'landscape') => {
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
        this.setState({imgs: potatoes})



			})
			.catch(err => {
				console.log('Error happened during fetching!', err);
        // <PhotoGrid columns={4} photos={this.renderContent()} />
			});



	};



  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <div className="jumbo-text">
            <div className="headline">Captionized</div>
            <div className="blah">Be inspirational Be creative</div>
            <div className="search-bar"><SearchForm onSearch={this.performSearch} /> </div>
			
          </div>
        </Jumbotron>
      	<div>
          {!this.state.loadingState ? <div>Loading ... </div>
            :<PhotoGrid columns={4} photos={this.state.imgs} />}

      	</div>
        </Container>



    )
  }
}
export default Discover;