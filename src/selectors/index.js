import React, {Component} from 'react';
import { createSelector } from 'reselect';

const newsItems = state => state.newsItems;

export const getNewsItems = createSelector(
  [newsItems],
  (newsItems) => {
    // Handle selection of different news items here by passing in filter options.
    return newsItems;
  }
)
