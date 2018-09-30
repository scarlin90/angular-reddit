import { Component, OnInit, Input, HostBinding } from '@angular/core';

import { Article } from '../state/models/article.model';
import { ArticleService } from '../state/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor(private _articleService: ArticleService) {}

  ngOnInit() {}

  voteUp(): boolean {
    this._articleService.updateVoteCount(this.article.id);
    return false;
  }

  voteDown(): boolean {
    this._articleService.updateVoteCount(this.article.id, -1);
    return false;
  }
}
