import React, {Component} from "react";
import "./GhUsercard.css";


export default class GhUsercard extends Component{
    constructor(props) {
        super(props);
    }
    /*
    todo: add a collapse button
    things needed here: profile img separate container to the left, Name h2, username h3, location p, profile link a, followers p, folling p, bio p
    * */
    render() {
        console.log(this.props);
        return (
            <div className="ghCardContainer">
                <div className="leftContent">
                    <img src={this.props.userData.avatar_url} alt=""/>
                    <button>collapse</button>
                </div>
                <div className="rightContent">
                    <h2>{this.props.userData.name}</h2>
                    <h3>{this.props.userData.login}</h3>
                    <p>{this.props.userData.location}</p>
                    <a href={this.props.userData.html_url} target="_blank"><p>{this.props.userData.html_url}</p></a>
                    <p>Followers: {this.props.userData.followers}</p>
                    <p>Following: {this.props.userData.following}</p>
                    <p>Bio: {this.props.userData.bio}</p>
                </div>
            </div>
        );
    }
}