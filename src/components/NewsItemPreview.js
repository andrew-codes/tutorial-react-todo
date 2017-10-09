import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';

const NewsItemPreview = (props) => (
    <div><Link to={`/${props.id}`}>{props.title}</Link></div>
);

NewsItemPreview.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

export default NewsItemPreview;
