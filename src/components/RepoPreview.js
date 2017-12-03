import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';

const RepoPreview = (props) => (
    <div><Link to={`/${props.id}`}>{props.title}</Link></div>
);

RepoPreview.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

export default RepoPreview;
