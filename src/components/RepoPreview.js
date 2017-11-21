import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
import Button from 'material-ui/Button';

const RepoPreview = (props) => (
    <div><Button color="primary"><Link to={`/${props.id}`}>{props.title}</Link></Button></div>
);

RepoPreview.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

export default RepoPreview;
