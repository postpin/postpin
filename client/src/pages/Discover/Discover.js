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


const demoPhotos = [
  {
    id : 1, src : "https://images.unsplash.com/photo-1504814532849-cff240bbc503?ixlib=rb-0.3.5&s=33eae9438f015e797df3fcf129401bc3&auto=format&fit=crop&w=3136&q=80",
    bigSrc : "https://images.unsplash.com/photo-1504814532849-cff240bbc503?ixlib=rb-0.3.5&s=33eae9438f015e797df3fcf129401bc3&auto=format&fit=crop&w=3136&q=80"
  },
  {
    id : 2, src : "https://images.unsplash.com/photo-1490365728022-deae76380607?ixlib=rb-0.3.5&s=cd0352c4c74192651e42f1949116e5fa&auto=format&fit=crop&w=1867&q=80",
    bigSrc : "https://images.unsplash.com/photo-1490365728022-deae76380607?ixlib=rb-0.3.5&s=cd0352c4c74192651e42f1949116e5fa&auto=format&fit=crop&w=1867&q=80"
  },
  {
    id : 3, src : "https://images.unsplash.com/photo-1504814532849-cff240bbc503?ixlib=rb-0.3.5&s=33eae9438f015e797df3fcf129401bc3&auto=format&fit=crop&w=3136&q=80",
    bigSrc : "https://images.unsplash.com/photo-1504814532849-cff240bbc503?ixlib=rb-0.3.5&s=33eae9438f015e797df3fcf129401bc3&auto=format&fit=crop&w=3136&q=80"
  },
  {
    id : 4, src : "https://images.unsplash.com/photo-1490365728022-deae76380607?ixlib=rb-0.3.5&s=cd0352c4c74192651e42f1949116e5fa&auto=format&fit=crop&w=1867&q=80",
    bigSrc : "https://images.unsplash.com/photo-1490365728022-deae76380607?ixlib=rb-0.3.5&s=cd0352c4c74192651e42f1949116e5fa&auto=format&fit=crop&w=1867&q=80"
  },
  {
    id : 5, src : "https://images.unsplash.com/photo-1504814532849-cff240bbc503?ixlib=rb-0.3.5&s=33eae9438f015e797df3fcf129401bc3&auto=format&fit=crop&w=3136&q=80",
    bigSrc : "https://images.unsplash.com/photo-1504814532849-cff240bbc503?ixlib=rb-0.3.5&s=33eae9438f015e797df3fcf129401bc3&auto=format&fit=crop&w=3136&q=80"
  },
  {
    id : 6, src : "https://images.unsplash.com/photo-1490365728022-deae76380607?ixlib=rb-0.3.5&s=cd0352c4c74192651e42f1949116e5fa&auto=format&fit=crop&w=1867&q=80",
    bigSrc : "https://images.unsplash.com/photo-1490365728022-deae76380607?ixlib=rb-0.3.5&s=cd0352c4c74192651e42f1949116e5fa&auto=format&fit=crop&w=1867&q=80"
  },
  {
    id : 7, src : "https://images.unsplash.com/photo-1504814532849-cff240bbc503?ixlib=rb-0.3.5&s=33eae9438f015e797df3fcf129401bc3&auto=format&fit=crop&w=3136&q=80",
    bigSrc : "https://images.unsplash.com/photo-1504814532849-cff240bbc503?ixlib=rb-0.3.5&s=33eae9438f015e797df3fcf129401bc3&auto=format&fit=crop&w=3136&q=80"
  }
];

class Discover extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <div className="jumbo-text">
            <div className="headline">Caption it</div>
            <div className="blah">Be inspirational</div>
            <div className="blah">Be creative</div>
            <div className="search-bar"><SearchForm onSearch={this.performSearch} /> </div>
          </div>
        </Jumbotron>

      	<div>
      		<PhotoGrid columns={6} photos={demoPhotos} />
      	</div>
      </Container>
    )
  }
}
export default Discover;


// class Metrics extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			imgs: [],
// 			loadingState: true
// 		};
// 	}
//
// 	componentDidMount() {
// 		this.performSearch();
// 	}
//
// 	performSearch = (query = 'lanscape') => {
// 		axios
// 			.get(
// 				`https://api.unsplash.com/search/photos/?page=1&per_page=15&query=${query}&client_id=fa0b26bd4c0834d6a66f39587142bd9bac839fc21d640ed07a509347b37dbd5c`
// 			)
// 			.then(data => {
// 				this.setState({ imgs: data.data.results, loadingState: false });
// 			})
// 			.catch(err => {
// 				console.log('Error happened during fetching!', err);
// 			});
// 	};
//
//
// 	render() {
// 		return (
// 			<div>
// 				<div className="main-header">
// 					<div className="inner">
// 						<h1 className="main-title">ImageSearch</h1>
// 						<SearchForm onSearch={this.performSearch} />
// 					</div>
// 				</div>
// 				<div className="main-content">
// 					{this.state.loadingState
// 						? <p>Loading</p>
// 						: <ImgList data={this.state.imgs} />}
// 				</div>
// 			</div>
// 		);
// 	}
// }
// export default Metrics;
