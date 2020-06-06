import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import GhUsercard from "./Components/GhUsercard";

export default class App extends Component {

    state = {
        githubUserData: {},
        followers: []
    }

    componentDidMount() {
        //todo: personal stretch: make a form to search for the username
        const githubUsername = "ClydeFrog04";
        axios.get(`https://api.github.com/users/${githubUsername}`)
            .then(res => {
                this.setState({
                    githubUserData: res.data,
                });
                return axios.get(res.data.followers_url);
            })
            .then(res => {
                console.log(res);
                this.setState({...this.state, followers: res.data});
            })
            .catch(console.log);
    }

    render() {
        return (
            <div className="App">
                <GhUsercard userData={this.state.githubUserData}/>
                {this.state.followers.map(user => {
                    return <GhUsercard key={user.id} userData={user}/>
                })}
            </div>
        );
    }
}
