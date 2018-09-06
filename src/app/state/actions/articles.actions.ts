import { Action } from "@ngrx/store";
import { Article } from "../models/article.model";

export enum ArticlesActionTypes {
  Get = "[Articles] Get",
  Upvote = "[Articles] Upvote Article",
  Downvote = "[Articles] Downvote Article",
  Create = "[Articles] Create New Article"
}

export class Get implements Action {
  readonly type = ArticlesActionTypes.Get;
}

export class Upvote implements Action {
  readonly type = ArticlesActionTypes.Upvote;
  constructor(public payload: Article) {}
}

export class Downvote implements Action {
  readonly type = ArticlesActionTypes.Downvote;
  constructor(public payload: Article) {}
}

export class Create implements Action {
  readonly type = ArticlesActionTypes.Create;
  constructor(public payload: Article) {}
}

export type ArticlesAction = Get | Upvote | Downvote | Create;
