import { Injectable } from '@angular/core';

import { QueryEntity } from '@datorama/akita';
import { Article } from '../models/article.model';
import { ArticleState, ArticleStore } from '../article.store';

@Injectable({
  providedIn: 'root'
})
export class ArticleQuery extends QueryEntity<ArticleState, Article> {
  constructor(protected store: ArticleStore) {
    super(store);
  }
}