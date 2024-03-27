import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of, switchMap } from 'rxjs';
import { Article } from '../models/articles';
import { ArticleService } from '../services/article.service';

@Component({
    selector: 'app-article-detail',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './article-detail.component.html',
    styleUrl: './article-detail.component.scss',
})
export class ArticleDetailComponent implements OnInit {
    article$: Observable<Article | null> = of(null);

    constructor(
        private readonly route: ActivatedRoute,
        private readonly articleService: ArticleService,
    ) {}

    ngOnInit(): void {
        this.article$ = this.route.paramMap.pipe(
            map((params) => params.get('slug')),
            switchMap((slug) => this.articleService.getArticle(slug || '')),
        );
    }
}
