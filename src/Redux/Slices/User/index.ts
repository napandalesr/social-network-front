import { setUser, setLoading, setLogin } from './../../Reducer/User/index';
import { createSlice } from "@reduxjs/toolkit";

export const UserSlices = createSlice({
  name: "user",
  initialState: {
    loading: false,
    auth: {},
    login: false
  },
  reducers: {
    setUser,
    setLoading,
    setLogin
  }
});

export default UserSlices.reducer;
const setUserActions = UserSlices.actions.setUser;
const setLoadingActions = UserSlices.actions.setLoading;
const setLoginActions = UserSlices.actions.setLogin;
export { setUserActions, setLoadingActions, setLoginActions };
