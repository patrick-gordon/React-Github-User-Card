import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props){
        super();
        this.state={
            search: '',
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
