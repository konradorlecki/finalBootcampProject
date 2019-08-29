var SpotifyWebApi = require('spotify-web-api-node');
export const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes
export const clientId = "bbc968e4ba644fa9a3a95ed1f6ea804e";
export const redirectUri = "http://localhost:3000/";
export const scopes = [
    "user-top-read",
    "user-read-currently-playing",
    "user-read-playback-state",
];
console.log()
