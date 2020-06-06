import React, {Component} from "react";
import "./GhUsercard.css";
import axios from "axios";


export default class GhUsercard extends Component{
    constructor(props) {
        super(props);
    }

    state ={
        collapsed: true,
        name: ""
    }
    /*
    todo: add a collapse button
    things needed here: profile img separate container to the left, Name h2, username h3, location p, profile link a, followers p, folling p, bio p
    * */

    toggleHide = () => {
        this.setState({collapsed: !this.state.collapsed});
    }

    componentDidMount() {
        //have to have this because github api doesn't return a name on followers objects... I didn't realise until I had everything built.
        if(!this.props.userData.name){
            axios.get(this.props.userData.url)
                .then(res => {
                    this.setState({...this.state, name: res.data.name});
                })
                .catch(console.log);
        }
    }

    render() {
        return (
            <div className="ghCardContainer">
                <div className="leftContent">
                    <img
                        src={this.props.userData.avatar_url} alt=""
                        className={this.state.collapsed ? "hide" : ""}
                    />
                    <button onClick={this.toggleHide}>{this.state.collapsed ? "Expand" : "Collapse"}</button>
                </div>
                <div className="rightContent">
                    <h2>{this.props.userData.name ? this.props.userData.name : this.state.name}</h2>
                    <h3 className={this.state.collapsed ? "hide" : ""}>{this.props.userData.login}</h3>
                    <p className={this.state.collapsed ? "hide" : ""}>{this.props.userData.location}</p>
                    <a className={this.state.collapsed ? "hide" : ""} href={this.props.userData.html_url} target="_blank"><p>{this.props.userData.html_url}</p></a>
                    <p className={this.state.collapsed ? "hide" : ""}>Followers: {this.props.userData.followers}</p>
                    <p className={this.state.collapsed ? "hide" : ""}>Following: {this.props.userData.following}</p>
                    <p className={this.state.collapsed ? "hide" : ""}>Bio: {this.props.userData.bio}</p>
                </div>
            </div>
        );
    }
}