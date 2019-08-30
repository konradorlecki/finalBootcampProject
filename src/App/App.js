import React, { Component } from "react";
import hash from "../config/hash";
import "./App.scss";
import {HashRouter,Route,Switch} from "react-router-dom";
import Player from '../Player/Player'
import logo from "../images/logo.svg";
import Start from '../starting page/StartingPage'
var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
    clientId: 'bbc968e4ba644fa9a3a95ed1f6ea804e',
    clientSecret: '0fc64b956af5484592911d4f26b46417',
    redirectUri: 'http://127.0.0.1:3000/#/player'
});


class App extends Component {

    constructor() {
        super();
        this.state = {
            token: null,
            item: {
                album: {
                    images: [{ url: "" }]
                },
                name: "",
                artists: [{ name: "" }],
                duration_ms:0,
            },
            is_playing: "Paused",
            progress_ms: 0
        };
    }
    componentDidMount() {
        // Set token
        let _token = hash.access_token;
        if (_token) {
            // Set token
            this.setState({
                token: _token
            });
            spotifyApi.setAccessToken(_token);
        }
        spotifyApi.getMe()
            .then(function(data) {
                console.log('Some information about the authenticated user', data.body);
            }, function(err) {
                console.log('Something went wrong!', err);
            });
        spotifyApi.setRedirectURI('http://localhost:3000/#/player')
    }
    componentWillUnmount() {
        // Reset the credentials
        spotifyApi.resetAccessToken();
        spotifyApi.resetRefreshToken();
        spotifyApi.resetRedirectURI();
        spotifyApi.resetClientId();
        spotifyApi.resetClientSecret();

// Reset all credentials at the same time
        spotifyApi.resetCredentials();
    }

    render() {
        console.log(this.state.token, spotifyApi.getRedirectURI());
        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/' render={()=><Start token={this.state.token} spotifyWebApi={spotifyApi} /> } />

                </Switch>
            </HashRouter>
        );
    }
}

export default App;