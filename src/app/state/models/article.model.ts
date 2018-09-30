import { ID } from '@datorama/akita';

export function createArticle({
  id = null, title = '', link = '', votes = 0
}: Partial<Article>) {
  return {
    id,
    title,
    link,
    votes
  } as Article;
}

export class Article {
  id: ID;
  title: string;
  link: string;
  votes: number;
}
