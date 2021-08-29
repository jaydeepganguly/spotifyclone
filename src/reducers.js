export const initialState = {
    user: null,
    token: null,
    playlists: [],
    playing: false,
    item: null,
  };
  
  const reducer = (state, action) => {
    console.log(action);
  
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
      case "SET_TOKEN":
        return {
          ...state,
          token: action.token,
        };
      case "SET_PLAYLISTS":
        return {
          ...state,
          playlists: action.playlists,
        };
      case "SET_DISCOVER_WEEKLY":
        return {
          ...state,
          discover_weekly: action.discover_weekly,
        };
      default:
        return state;
    }
  };
  export default reducer;


  // BQADf4XkEvFV_P4ubERBNsbO5H2UtqQLqwSVdqfr02SjwpjhYF2t26zipCMf8Hpzpd5mWcb_AfmduPWNbqFhDQlPWFKIDOdf7V1KA7feyuyi7
  // _aBmIC3aTk0As__tx7G528-PZIUOdESW-J4hv65hOJI3_XIPhHU_oGDgmyhDsJcXXy2cnXmuT5lEnWb9WDGAxsdp82V5pQDRzg8smSiKZwWqg