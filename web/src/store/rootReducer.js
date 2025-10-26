import { combineReducers } from "redux";
import authSlice from "./slices/authSlice";
import userSlice from "./slices/userSlice";
const rootReducer = combineReducers({ auth: authSlice, user: userSlice });

export default rootReducer;
