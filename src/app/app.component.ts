import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { catchError, defaultIfEmpty, every, iif, map, of, retry, throwError, throwIfEmpty } from 'rxjs';

const observer = {
    next: (value: any) => console.log(value),
    error: (error: any) => console.error(error),
    complete: () => console.log('completed'),
};

const handleError = () => console.log('=== I am handling the error ===');

/* catchError */
throwError(() => new Error('i am an error')).pipe(
    catchError((err) => {
        handleError();
        return throwError(() => new Error(err.message.toUpperCase()));
    }),
);

/* retry */
const cached = [4, 5];
of(1, 2, 3, 4, 5).pipe(
    map((n) => {
        if (cached.includes(n)) throw new Error('Duplicated: ' + n);
        return n;
    }),
    retry(3),
);

/* defaultIfEmpty */
of().pipe(defaultIfEmpty(() => new Error('this is an error')));

/* throwIfEmpty */
of().pipe(throwIfEmpty(() => new Error('this is an error')));

/* every */
of(1, 2, 3, 4, 5).pipe(every((x) => x > 0));

/* iif */
const userId = 123;
const updateObservable = () => of('update');
const createObservable = () => of('create');
iif(() => userId != null, updateObservable(), createObservable());

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
