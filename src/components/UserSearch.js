import React, {Component, PropTypes} from 'react';
import {Route} from 'react-router-dom';

const UserSearch = (props) => (
  <div>
    <input placeholder="value" type="text" value={props.value} onChange={(evt) => props.onChange(evt.target.value)} />
    <button onClick={(evt) => props.onSearch(props.value)}>Search</button>
  </div>
)

UserSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
}

UserSearch.defaultProps = {
  value: '',
  onSearch: (value) => {
  },
  onChange: (value) => {
  },
}

export default UserSearch;
