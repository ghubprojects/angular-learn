import { Routes } from '@angular/router';
import { canActivateArticleDetail, canDeactivateArticle } from '../shared/guards/articles.guard';
import { ArticleDetailEditComponent } from './article-detail-edit/article-detail-edit.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';

export const articleRoutes: Routes = [
    {
        path: '',
        component: ArticleListComponent,
    },
    {
        path: ':slug',
        canActivateChild: [canActivateArticleDetail],
        children: [
            {
                path: '',
                component: ArticleDetailComponent,
            },
            {
                path: 'edit',
                component: ArticleDetailEditComponent,
                canDeactivate: [canDeactivateArticle],
            },
        ],
    },
];
