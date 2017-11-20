import React, {PropTypes} from 'react';
import RepoPreview from './RepoPreview';
import {Route} from 'react-router-dom';

const RepoDetail = () => {
  return <span>Show Repo Information Here</span>;
}

const RepoList = (props) => (
  <div>
    <ul>
      {props.repos.map((item, index) => (
        <li>
        <RepoPreview
          id={item.id}
          title={item.title}
         />
        </li>
      ))}
    </ul>
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
