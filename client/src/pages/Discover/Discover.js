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



// const demoPhotos = [
//   {
//     id : 1, src : "https://images.unsplash.com/photo-1504814532849-cff240bbc503?ixlib=rb-0.3.5&s=33eae9438f015e797df3fcf129401bc3&auto=format&fit=crop&w=3136&q=80",
//     bigSrc : "https://images.unsplash.com/photo-1504814532849-cff240bbc503?ixlib=rb-0.3.5&s=33eae9438f015e797df3fcf129401bc3&auto=format&fit=crop&w=3136&q=80"
//   },
//   {
//     id : 2, src : "https://images.unsplash.com/photo-1490365728022-deae76380607?ixlib=rb-0.3.5&s=cd0352c4c74192651e42f1949116e5fa&auto=format&fit=crop&w=1867&q=80",
//     bigSrc : "https://images.unsplash.com/photo-1490365728022-deae76380607?ixlib=rb-0.3.5&s=cd0352c4c74192651e42f1949116e5fa&auto=format&fit=crop&w=1867&q=80"
//   },
//   {
//     id : 3, src : "https://images.unsplash.com/photo-1437818628339-19ded67ade8e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bedf43281551e7aa76f7d2f2c20a9c56&auto=format&fit=crop&w=2853&q=80",
//     bigSrc : "https://images.unsplash.com/photo-1437818628339-19ded67ade8e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bedf43281551e7aa76f7d2f2c20a9c56&auto=format&fit=crop&w=2853&q=80"
//   },
//   {
//     id : 4, src : "https://images.unsplash.com/photo-1506333438925-a6203045b492?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c7bfdf674c3b2d8901e883a022718292&auto=format&fit=crop&w=2850&q=80",
//     bigSrc : "https://images.unsplash.com/photo-1506333438925-a6203045b492?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c7bfdf674c3b2d8901e883a022718292&auto=format&fit=crop&w=2850&q=80"
//   },
//   {
//     id : 5, src : "https://images.unsplash.com/photo-1437209484568-e63b90a34f8b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b250a2e715b60e123c6b5ba13b299e7e&auto=format&fit=crop&w=2866&q=80",
//     bigSrc : "https://images.unsplash.com/photo-1437209484568-e63b90a34f8b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b250a2e715b60e123c6b5ba13b299e7e&auto=format&fit=crop&w=2866&q=80"
//   },
//   {
//     id : 6, src : "https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43c3102acd760c745225ce9d389b10e4&auto=format&fit=crop&w=1950&q=80",
//     bigSrc : "https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43c3102acd760c745225ce9d389b10e4&auto=format&fit=crop&w=1950&q=80"
//   },
//   {
//     id : 7, src : "https://images.unsplash.com/photo-1429092324841-82311c5f9c23?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0ad784827a265d748e9b48fd546640a5&auto=format&fit=crop&w=934&q=80",
//     bigSrc : "https://images.unsplash.com/photo-1429092324841-82311c5f9c23?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0ad784827a265d748e9b48fd546640a5&auto=format&fit=crop&w=934&q=80"
//   }
// ];

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
				`https://api.unsplash.com/search/photos/?page=1&per_page=15&query=${query}&client_id=7c576b9235c5943df0c01ef4561602af3d56d65052d7bff4b207e6aee46b041e`
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
  // const metricPhoto = {this.state.loadingState
  //         ? <p>Loading</p>
  //         : <ImgList data={this.state.imgs} />};
  // {!this.state.imgs ? <div>Loading ... </div> : <PhotoGrid columns={4} photos={this.renderContent()} />}

//   <InfiniteScroll
// pullDownToRefresh
// pullDownToRefreshContent={
// <h3 style={{textAlign: 'center'}}>&#8595; Pull down to refresh</h3>
// }
// releaseToRefreshContent={
// <h3 style={{textAlign: 'center'}}>&#8593; Release to refresh</h3>
// }
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

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <div className="jumbo-text">
            <div className="headline">Captionized</div>
            <div className="blah">Be inspirational Be creative</div>
            <div className="search-bar"><SearchForm onSearch={this.performSearch} /> </div>
<button className="comment"> comment </button>
          </div>
        </Jumbotron>
      	<div>
          {!this.state.loadingState ? <div>Loading ... </div>
            :<PhotoGrid columns={5} photos={this.state.imgs} />}

      	</div>
        </Container>



    )
  }
}
export default Discover;
