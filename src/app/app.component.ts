import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
    combineLatest,
    concat,
    delay,
    endWith,
    forkJoin,
    from,
    fromEvent,
    interval,
    map,
    merge,
    of,
    pairwise,
    race,
    startWith,
    take,
    withLatestFrom,
    zip
} from 'rxjs';

const observer = {
    next: (value: any) => console.log(value),
    error: (error: any) => console.log(error),
    complete: () => console.log('completed'),
};

/* forkJoin */
forkJoin(
    [of('Hello').pipe(delay(1000)), of('world').pipe(delay(2000)), of('!').pipe(delay(3000))],
    (value1, value2, value3) => `${value1}-${value2}-${value3}`,
);
/**
 * Application in Angular to send parallel api calls:
 * forkJoin([
 *     this.apiService.getAccountDropdown(),
 *     this.apiService.getDepartmentDropdown(),
 *     this.apiService.getStoreDropdown()
 * ]).subscribe(observer)
 */

/* combineLatest */
combineLatest([
    interval(2000).pipe(map((x) => `First: ${x}`)),
    interval(1000).pipe(map((x) => `Second: ${x}`)),
    interval(3000).pipe(map((x) => `Third: ${x}`)),
]);
/**
 * Application in Angular to build the pagination:
 * this.vm$ = combineLatest([
 *     this.paginationService.currentPage$,
 *     this.paginationService.currentSize$,
 *     this.paginationService.totalCount$,
 *     this.paginationService.currentOffset$,
 * ]).pipe(
 *     map(([currentPage, currentSize, totalCount, currentOffset]) => ({
 *         currentPage,
 *         currentSize,
 *         totalCount,
 *         currentOffset,
 *     }))
 *   );
 *
 *   onSizeChanged(newSize: number) {
 *     this.paginationService.updateSize(newSize);
 * }
 *
 *   onPageChanged(newPage: number) {
 *     this.paginationService.updatePage(newPage);
 * }
 *   <ng-container *ngIf="vm$ | async as vm">
 *     <app-show-total
 *       [offset]="vm.currentOffset"
 *       [total]="vm.totalCount"
 *       [size]="vm.currentSize"
 *     ></app-show-total>
 *     <!-- Display: 1 - 20 of 100 -->
 *     <app-paginator
 *       [current]="vm.currentPage"
 *       [total]="vm.totalCount"
 *       [size]="vm.currentSize"
 *       (sizeChanged)="onSizeChanged($event)"
 *       (pageChanged)="onPageChanged($event)"
 *     ></app-paginator>
 *   </ng-container>
 */

/* zip */
zip(of(1, 2, 3), of(4, 5, 6), of(7, 8, 9));

/* concat */
concat(interval(1000).pipe(take(3)), interval(500).pipe(take(5)));

/* merge */
merge(
    interval(1000).pipe(
        take(3),
        map((x) => `first ${x}`),
    ),
    interval(500).pipe(
        take(5),
        map((x) => `second ${x}`),
    ),
);

/* race */
race(
    interval(1000).pipe(
        take(3),
        map((x) => `slow ${x}`),
    ),
    interval(500).pipe(
        take(5),
        map((x) => `fast ${x}`),
    ),
);

/* withLatestFrom */
fromEvent(document, 'click').pipe(
    withLatestFrom(interval(2000).pipe(map((x) => `Need latest from this value: ${x}`))),
);
/**
 * Application in Angular:
 * this.apiService.getSomething().pipe(withLatestFrom(this.currentLoggedInUser$));
 */

/* startWith */
of('world').pipe(startWith('hello'));
/**
 * Application in Angular
 * interface ApiResponse<T> {
 *   data: T | null;
 *   isLoading: boolean;
 *   error: string;
 * }
 *
 * function getApiResponse<T>(apiCall: Observable<T>): Observable<ApiResponse<T>> {
 *   return apiCall.pipe(
 *     map((data: T): ApiResponse<T> => ({ isLoading: false, data, error: '' })),
 *     startWith<ApiResponse<T>>({ isLoading: true, data: null, error: '' }),
 *     catchError(
 *       (err: any): Observable<ApiResponse<T>> =>
 *         of({ isLoading: false, data: null, error: err.message || 'Unexpected error' }),
 *     ),
 *   );
 * }
 */

/* endWith */
of('hello').pipe(endWith('world'));

/* pairwise */
from([1, 2, 3, 4, 5]).pipe(pairwise()).subscribe(observer);

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'angular-learn';
}
