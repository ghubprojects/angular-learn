import { Injectable } from '@angular/core';
import { filter, map, Observable, of, shareReplay } from 'rxjs';
import { Article } from '../models/articles';

@Injectable({
    providedIn: 'root',
})
export class ArticleService {
    constructor() {}

    get articles$() {
        return of<Article[]>([
            {
                title: 'Title 1',
                body: 'Lorem magna esse aliquip sint in non adipisicing qui aliqua dolor.',
                slug: 'title-1',
            },
            {
                title: 'Title 2',
                body: 'Lorem magna esse aliquip sint in non adipisicing qui aliqua dolor.',
                slug: 'title-2',
            },
        ]).pipe(shareReplay(1));
    }

    getArticle(slug: string): Observable<Article> {
        return this.articles$.pipe(
            map((articles) => articles.find((x) => x.slug === slug)),
            filter((x): x is Article => x !== undefined),
        );
    }
}
