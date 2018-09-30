import { Injectable } from '@angular/core';

import { ArticleStore } from '../article.store';
import { createArticle, Article } from '../models/article.model';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {

    constructor(private articleStore: ArticleStore) {}

    add(title: string, link: string) {
        const article = createArticle({ id: Math.random(), title, link });
        this.articleStore.add(article);
    }

    updateVoteCount(articleId: Article['id'], operand = 1) {
        this.articleStore.update(articleId, entity => {
            const newCount = entity.votes + operand;
            return {
              ...entity,
              votes: newCount
            };
        });
    }
}
