import {
    GET_VIDEO_LISTS,
    UPLOAD_VIDEO,
    SELECT_VIDEO
} from '../constants/actionTypes'


const initialState = {
    videos: [],
    selectedVideo: {}
};

const video = (state = initialState, action) => {
    switch (action.type) {
        case GET_VIDEO_LISTS:
            if (!action.videos) {
                return state
            }
            return {...state,
                videos: action.videos
            };
        case UPLOAD_VIDEO:
            if (!action.videos) {
                return state
            }
            return {...state,
                videos: action.videos
            };

        case SELECT_VIDEO:
            if (!action.video) {
                return state
            }

            return {...state,
                selectedVideo: action.video,
            };

        default:
            return state
    }
};

export default video;
