// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const  authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = "https://spotify-clone-dc198.web.app/";

const clientId ="6e38475f64904886a708ad565f62a61c"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];
// gets access tokens from the spotify web api 
export const getTokenFromUrl = () => {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
      }, {});
  };
  

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
