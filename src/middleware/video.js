const ls = window.localStorage;


const getVideos = (localCollection) => {
    let result = ls.getItem(localCollection)
    let videos = JSON.parse(result)
    console.log('getting from localStorage:', videos)
    return videos
}

const uploadVideo = (localCollection,videos) => {
    console.log('saving in localStorage:', videos)
    ls.setItem(localCollection, JSON.stringify(videos))
}

module.exports = {
    getVideos : getVideos,
    uploadVideo: uploadVideo
};