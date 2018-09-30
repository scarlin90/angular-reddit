import { Injectable } from '@angular/core';

import { StoreConfig, EntityState, EntityStore } from '@datorama/akita';
import { Article, createArticle } from './models/article.model';

export interface ArticleState extends EntityState<Article> {}
​
@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'article' })
export class ArticleStore extends EntityStore<ArticleState, Article> {
  constructor() {
    super();
    this.add(createArticle({ id: 1, title: 'Angular 2', link: 'http://angular.io', votes: 3}));
    this.add(createArticle({ id: 2, title: 'Fullstack', link: 'http://fullstack.io', votes: 2}));
    this.add(createArticle({ id: 3, title: 'Angular Homepage', link: 'http://angular.io', votes: 1}));
  }
}
