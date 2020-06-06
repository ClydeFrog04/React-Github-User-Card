import React, {Component} from "react";
import GitHubCalendar from "github-calendar";


export default class Calendar extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        GitHubCalendar(".calendar", "ClydeFrog04", {responsive: true, summary_text: " ", tooltips: true})
            .then(res => {
                console.log("Calendar: ", res)
            });
    }

    render() {
        return(
            <div className="calendar">
            </div>
        );
    }
}