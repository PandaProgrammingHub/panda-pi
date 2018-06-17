import React, { Component } from 'react';
import { Player } from 'video-react';
import Collapse from '@material-ui/core/Collapse';
import _ from 'lodash';
import Button from '@material-ui/core/Button';
import FileUpload from '@material-ui/icons/FileUpload';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import uuid from 'uuid-random';


class Middle extends Component {
  constructor(props){
    super(props)
    this.state = {
      expanded:false,
      open: false,
      uploadVideo:{
        id:uuid(),
        description:'kung-fu-panda-3',
        posterUrl:'https://www.wallpaperflare.com/static/724/38/555/kung-fu-panda-3-po-family-kung-fu-wallpaper.jpg',
        videoUrl:'http://www.w3schools.com/html/mov_bbb.mp4',
        default:false
      },
     }
  }
  
   handleUploadSubmit = prop => event => {
     let uploadVideo = prop;
     uploadVideo['id']          = uuid();
     uploadVideo['description'] = document.getElementById("description").value;
     uploadVideo['posterUrl']   = document.getElementById("posterUrl").value;
     uploadVideo['videoUrl']   = document.getElementById("videoUrl").value;
     uploadVideo['default']   = false;
     if(typeof this.props.uploadVideoItems ==='function') this.props.uploadVideoItems("videoCollection",uploadVideo);
    this.handleClose();
   }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
   toggleCommentBox = (prop,value) => event =>{
    let temp = {};
    temp[prop] = !value;
    this.setState(temp);
    return false;
}  
  render() {
    console.log("====Middle=====");
    console.log(this.props);
     const {classes,getVideoItems,getDefaultVideoItem} = this.props;
     const viddeoLists = getVideoItems("videoCollection");
     const defaultVideo = getDefaultVideoItem(viddeoLists);

    return (
        <div className="w3-col m9">        
          <div className="w3-row-padding">
            <div className="w3-col m12">
              <div className="w3-card w3-round w3-white">
                <div className="w3-container w3-padding">
                  <Button onClick={this.handleClickOpen} style={{"float": "right","marginTop": "6px"}} variant="contained" color="secondary" className={classNames(classes.button)}>
                    Upload
                    <FileUpload className={classes.rightIcon} />
                  </Button>
                  <h4>Speridian Technologies: Machine Test!</h4>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w3-container w3-card w3-white w3-round w3-margin"><br />
            <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{"width":"60px"}} />
            <span className="w3-right w3-opacity">1 min</span>
            <h4>John Doe</h4><br />
            <hr className="w3-clear" />
            {_.isEmpty(this.props.video.selectedVideo)?
            <Player
                playsInline
                autoPlay = {true}
                poster={defaultVideo.posterUrl}
                src={defaultVideo.videoUrl}
            />:
            <Player
                playsInline
                autoPlay = {true}
                poster={this.props.video.selectedVideo.posterUrl}
                src={this.props.video.selectedVideo.videoUrl}
            />
          }
            <br />
            <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom"><i className="fa fa-thumbs-up"></i>  Like</button> 
            <button onClick={this.toggleCommentBox('expanded',this.state.expanded)} type="button" className="w3-button w3-theme-d2 w3-margin-bottom"><i className="fa fa-comment"></i>  Comment</button> 
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <div class="w3-container w3-card w3-white w3-round w3-margin"><br />
                <img src="https://www.w3schools.com/w3images/avatar5.png" alt="Avatar" class="w3-left w3-circle w3-margin-right" style={{"width":"60px"}} />
                <span class="w3-right w3-opacity">16 min</span>
                <h4>Jane Doe</h4><br />
                <hr class="w3-clear" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
             </div>
             </Collapse>  
        </div>
          {/* ====Dialod For Upload Video ======= */}
          <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Upload Videos</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              id="posterUrl"
              label="Poster URL"
              defaultValue = {this.state.uploadVideo.posterUrl}
              type="url"
              fullWidth
            />
            <TextField
              margin="dense"
              id="videoUrl"
              defaultValue = {this.state.uploadVideo.videoUrl}
              label="Video URL"
              type="url"
              fullWidth
            />
             <TextField
              margin="dense"
              id="description"
              defaultValue = {this.state.uploadVideo.description}
              label="Description"
              type="tex"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleUploadSubmit(this.state.uploadVideo)} variant="contained" color="primary" className={classes.button}>
              Submit
            </Button>
            <Button onClick={this.handleClose} variant="contained" color="default" className={classes.button}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>

        </div>
    );
  }
}

export default Middle;
