import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { articleRoutes } from './articles/articles.routes';

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes), provideRouter(articleRoutes)],
};
