import React, {Component} from 'react';
import logo from "../images/logo.svg";
import {authEndpoint, clientId, redirectUri, scopes} from "../config/config";
import Player from '../Player/Player'


class start extends Component{
    render() {
        console.log(this.props.spotifyWebApi);
        console.log(this.props.token);
        if(this.props.token === null){
        return(
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <a
                        className="btn btn--loginApp-link"
                        href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                            "%20"
                        )}&response_type=token&show_dialog=true`}
                    >
                        Login to Spotify
                    </a>
                </header>
            </div>
        )
    }else{
            return(
               <Player spotifyWebApi={this.props.spotifyWebApi}/>
                )
        }
    }
}
export default start;