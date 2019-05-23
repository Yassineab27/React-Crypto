import React, { Component } from "react";
import "../App/App.css";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
    };

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        });
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                type="text"
                placeholder="Search your coin"
                value={this.state.search}
                onChange={this.handleChange}/>
            </form>
        )
    };
};

export default Search;