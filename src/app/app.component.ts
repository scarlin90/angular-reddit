import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Article } from './state/models/article.model';
import { ArticleQuery } from './state/queries/article.query';
import { ArticleService } from './state/services/article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  articles$: Observable<Article[]>;

  constructor(private _articleQuery: ArticleQuery, private _articleService: ArticleService) {}

  ngOnInit() {
    this.articles$ = this._articleQuery.selectAll().pipe(map(items => items.sort((a: Article, b: Article) => b.votes - a.votes)));
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this._articleService.add(title.value, link.value);
    title.value = '';
    link.value = '';
    return false;
  }
}
