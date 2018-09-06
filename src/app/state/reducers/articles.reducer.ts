import { Action } from "@ngrx/store";

import {
  ArticlesAction,
  ArticlesActionTypes
} from "../actions/articles.actions";
import { Article } from "../models/article.model";

export interface State {
  articles: Article[];
  pending: boolean;
  error: any;
}

const initialState: State = {
  articles: [
    new Article("Angular 2", "http://angular.io", 3),
    new Article("Fullstack", "http://fullstack.io", 2),
    new Article("Angular Homepage", "http://angular.io", 1)
  ],
  pending: false,
  error: null
};

export function articlesReducer(
  state: State = initialState,
  action: ArticlesAction
): State {
  switch (action.type) {
    case ArticlesActionTypes.Get:
      return { ...state };

    case ArticlesActionTypes.Upvote:
      state.articles.forEach(article => {
        if (article === action.payload) {
          article.voteUp();
        }
      });

    case ArticlesActionTypes.Downvote:

    case ArticlesActionTypes.Create:

    default:
      return state;
  }
}
