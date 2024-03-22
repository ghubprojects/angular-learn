import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { buffer, bufferTime, from, fromEvent, interval, map, of, reduce, scan, toArray } from 'rxjs';

const users = [
    { id: 1, username: 'Arin Jerry', firstname: 'Arin', lastname: 'Jerry', salary: 1000 },
    { id: 2, username: 'Fran Marley', firstname: 'Fran', lastname: 'Marley', salary: 2000 },
    { id: 3, username: 'John Doe', firstname: 'John', lastname: 'Doe', salary: 3000 },
];

const observer = {
    next: (value: any) => console.log(value),
    error: (error: any) => console.error(error),
    complete: () => console.log('completed'),
};

/* how to run: call method subscribe(observer) */

/* map */
of(users).pipe(map((data) => ({ length: data.length, data })));

/* reduce */
from(users).pipe(
    map((user) => user.salary),
    reduce((acc, cur) => acc + cur, 0),
);

/* scan */
from(users).pipe(
    map((user) => user.salary),
    scan((acc, cur) => acc + cur, 0),
);

/* toArray */
from(users).pipe(
    map((user) => user.salary),
    toArray(),
);

/* buffer */
const source$ = interval(1000);
const click$ = fromEvent(document, 'click');
source$.pipe(buffer(click$));

/* bufferTime */
source$.pipe(bufferTime(2000));

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
