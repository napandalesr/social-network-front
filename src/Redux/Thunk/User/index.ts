import { Dispatch } from "@reduxjs/toolkit";
import { authHttp } from "../../../Api/Module/auth";
import { setLoadingActions, setLoginActions, setUserActions } from "../../Slices/User";

export const httpUser = async (values: any): Promise<any> => async (dispatch: Dispatch) => {
  void authHttp.post(values).then((response: any) => {
    dispatch(setUserActions(response.data.data));
    dispatch(setLoginActions(true));
    dispatch(setLoadingActions(false));
  }).catch(error => console.log(error));
};
