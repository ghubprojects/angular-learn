import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../../models/articles';
import { ArticleService } from '../../services/article.service';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-article-list',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './article-list.component.html',
    styleUrl: './article-list.component.scss',
})
export class ArticleListComponent implements OnInit {
    articles$: Observable<Article[]> = of<Article[]>([]);

    constructor(private readonly articleService: ArticleService) {}

    ngOnInit(): void {
        this.articles$ = this.articleService.articles$;
    }
}
