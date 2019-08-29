import React,{Component} from "react";
import "./Player.css";
import logo from "../images/logo.svg";
import '../App/App.css'
// const searchTracks = ()=>{
//     spotifyApi.searchTracks('Love')
//         .then(function(data) {
//             console.log('Search by "Love"', data.body);
//         }, function(err) {
//             console.error(err);
//         });
// }
class Player extends Component{
    render() {
        console.log(this.props.spotifyWebApi)
        var spotifyApi =`${this.props.spotifyWebApi}`;
       console.log(spotifyApi);
        return (
        <>
            {/*<input placeholder='Wyszukaj'onSubmit={searchTracks}/>*/}
        <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
        </>
    );
}}

export default Player;