import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Article } from '../models/articles';
import { ArticleService } from '../services/article.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
    articles$: Observable<Article[]> = of<Article[]>([]);

    constructor(private readonly articleService: ArticleService) {}

    ngOnInit(): void {
        this.articles$ = this.articleService.articles$;
    }
}
