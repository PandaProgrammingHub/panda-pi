import React, { Component } from 'react';
// import { Player } from 'video-react';

class Rightbar extends Component {
    
    handelSelectVideoItem = (selectVideoItem,video) => event => {
        if(typeof selectVideoItem === "function") this.handlerVideo(selectVideoItem,video);
    }
    handlerVideo = (selectVideoItem,video) => selectVideoItem(video);
    render() {
        console.log("====Right=====");
        console.log(this.props);
     const {video,getVideoItems,selectVideoItem} = this.props;
     const viddeoLists = getVideoItems("videoCollection");
     const selectVideoId = (video && video.selectedVideo.id)?video.selectedVideo.id:null;    
        return (
            <div className="w3-col m3">
                <div className="w3-card w3-round w3-white w3-center">
                    <p style={{"textAlign": "left","margin": "5px","padding":"5px"}}>Videos List:</p>
                    {viddeoLists.map( (video,index) => {
                        return (
                        <div key={index} index={index} style={{ "backgroundColor":(video.id === selectVideoId)?"#e6e4e4":(!selectVideoId && video.default === true )?"#e6e4e4":""}}>
                        <div className="w3-container" style={{ "padding":(video.id === selectVideoId)?"20px":(!selectVideoId && video.default === true )?"20px":""}} onClick={this.handelSelectVideoItem(selectVideoItem,video)}>
                        <div className="w3-row-padding" style={{"margin": "0px -16px","cursor": "pointer"}}>
                            <div className="w3-half">
                                <img src={video.posterUrl} alt="Northern Lights" className="w3-margin-bottom" style={{"width": "100%"}} />
                            </div>
                            <div className="w3-half">
                            <p>{video.description}</p>
                            </div>
                        </div>
                    </div>
                    <hr className="w3-clear" />
                    </div>
                        )
                        })
                    }   
                </div>
                <br />
            </div>
        );
    }
}

export default Rightbar;
