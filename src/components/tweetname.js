import React, { Component } from 'react';


class Tweetname extends Component {
  constructor(props) {
    super(props);
    this.state = 
    { value: '',
      submission:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    this.setState({submission: this.state.value});
    event.preventDefault();
  }
  //how to grab the state and pass it into props
  render() {
    var name = this.state.submission;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:{" "}
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div>This is what was inputted: {name}</div>
      </div>
    );
  }
}

export default Tweetname;