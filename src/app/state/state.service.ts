import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import { State as AppState } from "./reducers/articles.reducer";
import * as ArticlesActions from "./actions/articles.actions";

import { Article } from "./models/article.model";

@Injectable({
  providedIn: "root"
})
export class AppStateService {
  constructor(private _store: Store<AppState>) {
    console.log("constructed");
  }

  getArticlesState(): Observable<any> {
    return this._store.select("articles");
  }

  upvoteArticle(article: Article): void {
    this._store.dispatch(new ArticlesActions.Upvote(article));
  }
}
