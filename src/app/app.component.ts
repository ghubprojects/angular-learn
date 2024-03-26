import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
    exhaustMap,
    fromEvent,
    interval,
    map,
    merge,
    mergeAll,
    mergeMap,
    of,
    partition,
    repeat,
    take,
    tap,
    timeInterval,
    timeout,
} from 'rxjs';

/* higher order observable (hoo) */
const hoo = interval(1000).pipe(map((val) => of(`I am at: ${val}`)));
// hoo.subscribe((obs) => obs.subscribe(console.log));

/* mergeAll, switchAll, concatAll */
fromEvent(document, 'click').pipe(
    map((val) => interval(500).pipe(take(5))),
    mergeAll(), // switchAll() or concatAll()
);

/**
 * mergeMap = map + mergeAll
 * switchMap = map + switchAll
 * concatMap = map + concatAll
 */
fromEvent(document, 'click').pipe(mergeMap((val) => interval(500).pipe(take(5))));

/* exhaustMap */
fromEvent(document, 'click').pipe(exhaustMap((val) => interval(500).pipe(take(5))));

/* partition */
const interval$ = interval(1000);
const [even$, odd$] = partition(interval$, (val) => val % 2 === 0);
merge(even$.pipe(map((x) => `I am even: ${x}`)), odd$.pipe(map((x) => `I am odd: ${x}`)));

/* tap */
fromEvent(document, 'click').pipe(tap((val) => console.log(val)));

/* finalize */
// this.apiService.get().pipe(finalize(() => (this.loading = false)).subscribe()

/* repeat */
of('repeat data').pipe(repeat(3));

/* timeInterval */
fromEvent(document, 'click').pipe(timeInterval());

/* timeout */
fromEvent(document, 'click').pipe(timeout(2000));

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
