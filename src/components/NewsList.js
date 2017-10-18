import React, {PropTypes} from 'react';
import NewsItemPreview from './NewsItemPreview';
import {
  Route,
} from 'react-router-dom';

const Topic = () => {
  return <span>Best Topic evar!</span>;
}

const NewsList = (props) => (
  <div>
    <ul>
      {props.newsItems.map((item, index) => (
        <li>
        <NewsItemPreview
          id={item.id}
          title={item.title}
          body={item.body}
         />
        </li>
      ))}
    </ul>
    <Route path={`/:topicId`} component={Topic}/>
  </div>
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
