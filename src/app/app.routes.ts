import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'articles',
        loadChildren: () => import('./articles/articles.routes').then((x) => x.articleRoutes),
    },
];
