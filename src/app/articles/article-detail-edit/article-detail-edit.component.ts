import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { filter, map, Observable, of, shareReplay, switchMap, take } from 'rxjs';
import { Article } from '../../models/articles';
import { ArticleService } from '../../services/article.service';
import { CheckDeactivate } from '../../models/interfaces/check-deactivate';

@Component({
    selector: 'app-article-detail',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './article-detail-edit.component.html',
    styleUrl: './article-detail-edit.component.scss',
})
export class ArticleDetailEditComponent implements OnInit, CheckDeactivate {
    form$!: Observable<FormGroup>;
    private initialFormValue: unknown;

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly route: ActivatedRoute,
        private readonly articleService: ArticleService,
    ) {}

    ngOnInit(): void {
        this.form$ = this.route.paramMap.pipe(
            map((params) => params.get('slug')),
            switchMap((slug) => this.articleService.getArticle(slug || '')),
            filter((article) => !!article),
            switchMap((article) => of(this.initForm(article))),
            shareReplay(1),
        );
    }

    checkDeactivate(
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot | undefined,
    ): Observable<boolean> {
        let formValue: unknown;
        this.form$.pipe(take(1)).subscribe((form) => (formValue = form.getRawValue()));
        const isEdited = JSON.stringify(this.initialFormValue) !== JSON.stringify(formValue);
        return of(!isEdited || confirm('Do you want to cancel changes?'));
    }

    private initForm(article: Article): FormGroup {
        const form = this.formBuilder.group({
            title: [article.title],
            body: [article.body],
        });
        this.initialFormValue = form.getRawValue();
        return form;
    }
}
