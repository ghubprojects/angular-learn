import { inject } from '@angular/core';
import type { CanActivateChildFn, CanActivateFn, CanDeactivateFn, CanMatchFn } from '@angular/router';
import { map, of } from 'rxjs';
import { CheckDeactivate } from '../../models/interfaces/check-deactivate';
import { AuthService } from '../../services/auth.service';

export const canActivateArticles: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    return authService.currentUser.pipe(map((user) => !!user));
};

export const canActivateArticleDetail: CanActivateChildFn = (childRoute, state) => {
    const authService = inject(AuthService);
    const targetSlug = childRoute.paramMap.get('slug');
    if (!targetSlug) return of(false);
    return authService.currentUser.pipe(map((user) => user.articles.includes(targetSlug)));
};

export const canMatchArticles: CanMatchFn = (route, segments) => {
    const authService = inject(AuthService);
    return authService.currentUser.pipe(map((user) => !!user));
};

export const canDeactivateArticle: CanDeactivateFn<any> = (
    component: CheckDeactivate,
    currentRoute,
    currentState,
    nextState,
) => component.checkDeactivate(currentRoute, currentState, nextState);
