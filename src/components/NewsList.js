import React, {PropTypes} from 'react';
import NewsItemPreview from './NewsItemPreview';

const NewsList = (props) => (
    <ul>
      {props.newsItems.map((item, index) => (
        <li>
        <NewsItemPreview
          id={item.id}
          title={item.title}
          href={item.href} />
        </li>
      ))}
    </ul>
);

NewsList.propTypes = {
  newsItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })),
}

NewsList.defaultProps = {
  newsItems: [],
}

export default NewsList;
