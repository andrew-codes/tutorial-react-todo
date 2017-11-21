import React, {PropTypes} from 'react';
import RepoPreview from './RepoPreview';
import {Route} from 'react-router-dom';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

const RepoDetail = () => {
  return <span>Show Repo Information Here</span>;
}

const RepoList = (props) => (
  <div>
    <List>
      {props.repos.map((item, index) => (
        <ListItem button>
          <RepoPreview
            id={item.id}
            title={item.title}
           />
        </ListItem>
      ))}
    </List>
    <Route path={`/:repoId`} component={RepoDetail}/>
  </div>
);

RepoList.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })),
}

RepoList.defaultProps = {
  repos: [],
}

export default RepoList;
