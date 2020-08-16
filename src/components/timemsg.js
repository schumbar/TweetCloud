import React, { Component } from 'react';

class Timemsg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            currentTime: ''
        };
    }

    componentDidMount() {
        fetch("/time")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        currentTime: result.time
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        error
                    });
                }
            )
    }

    render() {
        const { error, currentTime} = this.state;
        if (error) {
            return (<div>Error: {error.message}</div>);
          } else {
            return (<div>This is the current time: {currentTime} </div>);
          }
      }


}
export default Timemsg;

