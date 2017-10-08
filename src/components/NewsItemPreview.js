import React, {PropTypes} from 'react';

const NewsItemPreview = (props) => (
    <div><a href={props.href} target="_blank">{props.title}</a></div>
);

NewsItemPreview.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}

export default NewsItemPreview;
