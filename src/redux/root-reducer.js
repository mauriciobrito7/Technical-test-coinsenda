import { combineReducers } from "redux";

import activityReducer from "./activity/activity.reducer.js";

export default combineReducers({
  activity: activityReducer,
});
