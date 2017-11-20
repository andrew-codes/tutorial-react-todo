import React, {Component} from 'react';
import { createSelector } from 'reselect';

const getRepos = state => state.repos;
const getReposOrder = state => state.repoOrder;

export const getOrderedRepos = createSelector(
  [getRepos, getReposOrder],
  (repos, reposOrder) => reposOrder
    .map((key) => ({
      ...repos[key],
      id: key,
    }))
)

export const getGithubUsername = state => state.githubUsername;
export const getSearchedUsername = state => state.searchedUsername;
