import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
    auditTime,
    debounceTime,
    distinct,
    distinctUntilChanged,
    filter,
    find,
    first,
    from,
    fromEvent,
    interval,
    last,
    map,
    Observable,
    pluck,
    sampleTime,
    single,
    skip,
    skipUntil,
    skipWhile,
    take,
    takeLast,
    takeUntil,
    takeWhile,
    throttleTime,
    timer,
} from 'rxjs';

const observer = {
    next: (value: any) => console.log(value),
    error: (error: any) => console.log(error),
    complete: () => console.log('completed'),
};

const items = [1, 2, 3, 4, 5, 6];

/* how to run: call method subscribe(observer) */

/* filter */
from(items).pipe(filter((x) => x % 2 === 0));

/* first */
from(items).pipe(first());

/* last */
from(items).pipe(last((x) => x < 4));

/* find */
from(items).pipe(find((x) => x > 1));

/* single */
from(items).pipe(single((x) => x > 2));

/* take */
from(items).pipe(take(4));

/* takeLast */
from(items).pipe(takeLast(2));

/* takeUntil */
interval(1000).pipe(takeUntil(timer(5000)));
/**
 * Application in Angular to auto-unsubscribe when destroyed:
 * @Directive()
 * public abstract class Destroyable implements OnDestroy {
 *     destroy$ = new Subject();
 *
 *     ngOnDestroy() {
 *         destroy$.next();
 *         destroy$.complete();
 *     }
 * }
 *
 * class SomeComponent extends Destroyable {
 *     state$.pipe(
 *         map(),
 *         takeUntil(destroy$)
 *     ).subscribe();
 * }
 */

/* takeWhile */
interval(1000).pipe(takeWhile((x) => x < 10));

/* skip */
interval(1000).pipe(skip(3));

/* skipUntil */
interval(1000).pipe(skipUntil(timer(5000)));

/* skipWhile */
interval(1000).pipe(skipWhile((x) => x < 4));

/* distinct */
from([1, 2, 3, 4, 5, 6, 3, 2, 4, 3, 2, 2]).pipe(distinct());

/* distinctUntilChanged */
from([1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4]).pipe(distinctUntilChanged());

/* auditTime: timer chỉ start khi có giá trị được emit */
interval(1000).pipe(auditTime(1500));

/* sampleTime: timer tự động restart sau mỗi khoảng thời gian cố định */
interval(1000).pipe(sampleTime(1500));

/* throttleTime */
interval(1000).pipe(throttleTime(1500)); // default: leading is true
interval(1000).pipe(throttleTime(1500, undefined, { trailing: true }));

/* debounceTime: above */

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'angular-learn';

    ngOnInit(): void {
        /* debounceTime */
        const inputElm = document.getElementById('searchInput')!;
        fromEvent<KeyboardEvent>(inputElm, 'keydown')
            .pipe(
                debounceTime(1000),
                map((event: KeyboardEvent) => (event.target as HTMLInputElement).value),
            )
            .subscribe(observer);
    }
}
