import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Navbar from './components/navbar';
// import Leftbar from './components/leftbar'; 
import Middlebar from './components/middle';
import Rightbar from './components/rightbar';
import Footer from './components/footer';
import GlobalStyles from './containers/globalStyles';
import {connect} from 'react-redux'
import uuid from 'uuid-random'
import {
  uploadVideoItemsIntial,
  getVideoItems,
  getDefaultVideoItem,
  uploadVideoItems,
  selectVideoItem
} from "./actions/actions"
import {
  getVideo
} from './reducers/mainReducer'

const videoCollection = [
  {
    id:uuid(),
    description:'Demo Video 3',
    posterUrl:'https://upload.wikimedia.org/wikipedia/commons/e/e8/Elephants_Dream_s5_both.jpg',
    videoUrl:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
    default:true
  },
  {
    id:uuid(),
    description:'Demo Video 2',
    posterUrl:'https://media.w3.org/2010/05/bunny/poster.png',
    videoUrl:'https://media.w3.org/2010/05/bunny/movie_hd.ogv',
    default:false
    },
];

class App extends Component {
//   constructor(props) {
//     super(props);
// }
componentWillMount(){
  this.props.uploadVideoItemsIntial('videoCollection',videoCollection);
  console.log('First this called');
}
  render() {
    console.log("====app====");
    console.log(this.props);
    // this.props.uploadVideoItemsIntial('videoCollection',videoCollection);
    return (
      <div className = "APP">
        <Navbar
        />
      <div className="w3-container w3-content" style={{"maxWidth":"1400px","marginTop":"80px"}}>  
          <div className="w3-row">
          {/* <Leftbar /> */}
          <Middlebar
            classes             = {this.props.classes} 
            video               = {this.props.video} 
            getVideoItems       = {this.props.getVideoItems}
            getDefaultVideoItem = {this.props.getDefaultVideoItem}
            uploadVideoItems    = {this.props.uploadVideoItems} 
            selectVideoItem     = {this.props.selectVideoItem}              
          />
          <Rightbar  
             video               = {this.props.video} 
             getVideoItems       = {this.props.getVideoItems}
             getDefaultVideoItem = {this.props.getDefaultVideoItem}
             uploadVideoItems    = {this.props.uploadVideoItems} 
             selectVideoItem     = {this.props.selectVideoItem}    
          />
          </div>
      </div>
      <br />
        <Footer 
        />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  uploadVideoItemsIntial:PropTypes.func.isRequired,
  getVideoItems: PropTypes.func.isRequired,
  uploadVideoItems: PropTypes.func.isRequired,
  selectVideoItem: PropTypes.func.isRequired,
  getDefaultVideoItem:PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  ...state,
  ...getVideo(state),
});

export default withStyles(
  GlobalStyles, {withTheme: true})(
    connect(
      mapStateToProps,
      {
        uploadVideoItemsIntial,
        getVideoItems,
        uploadVideoItems,
        selectVideoItem,
        getDefaultVideoItem
      }
  )(App));
//export default App;
