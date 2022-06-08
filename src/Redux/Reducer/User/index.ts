export const setUser = (state: any, action: any): void => {
  state.loading = true;
  state.auth = { ...action.payload };
};

export const setLoading = (state: any, action: any): void => {
  state.loading = action.payload;
};

export const setLogin = (state: any, action: any): void => {
  state.login = action.payload;
};
