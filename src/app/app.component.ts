import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { defer, from, fromEvent, fromEventPattern, interval, of, throwError, timer } from 'rxjs';

const observer = {
    next: (value: any) => console.log(value),
    error: (error: any) => console.error(error),
    complete: () => console.log('completed'),
};

/* how to run: call method subscribe(observer) */

/* of */
of(1, 2, 3, 'hello', [1, 2, 3], { foo: 'bar' }, Promise.resolve('hi'));

/* from */
from(Promise.resolve('hi'));
from([1, 2, 3]);
from('hello world');

/* fromEvent */
fromEvent(document, 'click');

/* fromEventPattern */
fromEventPattern(
    (handler) => document.addEventListener('click', handler),
    (handler) => document.removeEventListener('click', handler),
);

/* interval */
interval(1000);

/* timer */
timer(1000);
timer(1000, 1000);

/* throwError */
throwError(() => new Error('testError')).subscribe(observer);

/* defer */
const random$ = defer(() => of(Math.random()));
random$.subscribe(observer);
random$.subscribe(observer);
random$.subscribe(observer);

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
