import { combineReducers } from 'redux'

import video from './video'

const rootReducer = combineReducers({
    video,
});
export const getVideo = state => state.selectedVideo ? state.selectedVideo : {};

export default rootReducer