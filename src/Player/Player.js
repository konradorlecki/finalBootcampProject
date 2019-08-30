import React,{Component} from "react";
import "./Player.scss";
import logo from "../images/logo.svg";
import '../App/App.scss'
import Sound from 'react-sound';


class Player extends Component{
    state={
        name:'',
        data: null,
        play: 'paused'

    }
    searchTracks = ()=>{
        this.props.spotifyWebApi.searchTracks(this.state.name)
            .then((data)=> {
                console.log(data.body);
                this.setState({data: data.body})
                console.log(this.state.data);
            }, function(err) {
                console.error(err);
            });
    };
    render() {
        let tracks;
        if(this.state.data !== null){
            tracks =  this.state.data.tracks.items.map((currentValue)=>{
                console.log(currentValue.uri);
                return(
                  <div className='smalltracks' key={currentValue}  style={{
                      backgroundImage: `url(${currentValue.album.images[1].url})`,
                      height: "100px",
                      width: "100px",
                      backgroundSize: 'cover',
                  }}>
                      <button onClick={()=>{this.setState({play:'playing'})}} >ok</button>
                      <p>{currentValue.name}</p>
                      <Sound
                          url={currentValue.uri}
                          playStatus={this.state.play}


                      />
                 </div>
                   )
             })
        }


        return (
            <>
                <input type='text' onChange={(e)=> this.setState({name:e.target.value})} placeholder='Wyszukaj'/>
                <div className="App">
                    <button className='red push_button' onClick={this.searchTracks}/>
                </div>
                <div className='tracks'>
                {tracks}
                </div>
            </>
    );
}}

export default Player;