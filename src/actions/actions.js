import * as types from '../constants/actionTypes'
import video from '../middleware/video';
import _ from 'lodash';


// const setCurrentVideo = video => ({
//     type: types.SET_CURRENT_VIDEO,
//     video
// });

const getVideoLists = videos => ({
    type: types.GET_VIDEO_LISTS,
    videos
});

const selectVideo = video =>({
    type: types.SELECT_VIDEO,
    video,
});

export const uploadVideoItemsIntial = (localCollection,videoObj) => dispatch => {
    video.uploadVideo(localCollection,videoObj);
}

export const getDefaultVideoItem = (videoItems) => dispatch => {
    let videoItem = _.find(videoItems, { 'default': true });
    return videoItem
} 

export const getVideoItems = (localCollection) => dispatch => {
    let resData = video.getVideos(localCollection);
     return resData;
}

export const uploadVideoItems = (localCollection,videoObj) => dispatch => {
    let resData = video.getVideos(localCollection);
    resData.push(videoObj);
    console.log(resData);
    video.uploadVideo(localCollection,resData);
    let uuid = videoObj.id;
    let resData1 = video.getVideos(localCollection);
    let videoItem = _.find(resData1, { 'id': uuid });
    if (typeof videoItem === 'object' && Object.keys(videoItem).length > 0){
        dispatch(getVideoLists(resData1));
        dispatch(selectVideo(videoItem));
    } 
    return resData;
}

export const selectVideoItem = video => dispatch => {
     if (typeof video === 'object' && Object.keys(video).length > 0) dispatch(selectVideo(video));
  
}