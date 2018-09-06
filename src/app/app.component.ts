import { Component } from "@angular/core";
import { Observable } from "rxjs";

import { Article } from "./state/models/article.model";
import { State as AppState } from "./state/reducers/articles.reducer";
import { AppStateService } from "./state/state.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public articles$: Observable<AppState>;

  constructor(private _stateService: AppStateService) {
    this.articles$ = this._stateService.getArticlesState();
  }

  // addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
  //   console.log(`Adding article title: ${title.value} and link: ${link.value}`);
  //   this.articles.push(new Article(title.value, link.value, 0));
  //   title.value = "";
  //   link.value = "";
  //   return false;
  // }
  //
  // sortedArticles(): Article[] {
  //   return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  // }
}
