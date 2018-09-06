import { Component, OnInit, Input, HostBinding } from "@angular/core";
import { Article } from "../state/models/article.model";

import { AppStateService } from "../state/state.service";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {
  @HostBinding("attr.class") cssClass = "row";
  @Input() article: Article;

  constructor(private _appStateService: AppStateService) {}

  ngOnInit() {}

  voteUp(): boolean {
    this._appStateService.upvoteArticle(this.article);
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }
}
