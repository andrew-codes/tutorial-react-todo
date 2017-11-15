import React, {Component} from 'react';
import { createSelector } from 'reselect';

const getNewsItems = state => state.newsItems;
const getNewsItemsOrder = state => state.newsItemOrder;

export const getOrderedNewsItems = createSelector(
  [getNewsItems, getNewsItemsOrder],
  (newsItems, newsItemsOrder) => newsItemsOrder
    .map((key) => ({
      ...newsItems[key],
      id: key,
    }))
)
