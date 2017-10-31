import React, {Component} from 'react';
import {Route} from 'react-router-dom';

class UserSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      githubUsername: '',
      selectedUsername: '',
    };

    this.searchUser = this.searchUser.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
  }

  searchUser(evt) {
    evt.preventDefault();
    // TODO: Dispatch action that will request data from githubs API
    this.setState({selectedUsername: this.state.githubUsername});
  }

  updateUsername(evt) {
    this.setState({
      githubUsername: evt.target.value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.searchUser}>
          <label>Github Username</label>
          <input type="text" name="github-username" value={this.state.githubUsername} onChange={this.updateUsername} />
          <button type="submit">Search</button>
        </form>
        <p>{this.state.selectedUsername}</p>
      </div>
    );
  }
}

export default UserSearch;
