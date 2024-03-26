import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, finalize, of, ReplaySubject, Subject, switchMap, timer } from 'rxjs';

const createObserver = (observer: any) => ({
    next: (value: any) => console.log(observer, value),
    error: (error: any) => console.error(observer, error),
    complete: () => console.log('completed'),
});

/* Subject */
const loadingSubject = new Subject();
function getUsers() {
    loadingSubject.next(true);
    return timer(3000).pipe(
        switchMap(() => of('users')),
        finalize(() => loadingSubject.next(false)),
    );
}

loadingSubject.subscribe(createObserver('Component'));
getUsers().subscribe();

/* Behavior Subject */
const behaviorSubject = new BehaviorSubject('hello');
behaviorSubject.subscribe(createObserver('Component A'));
behaviorSubject.next('world');
behaviorSubject.subscribe(createObserver('Component B'));
console.log(behaviorSubject.value);

/* Replay Subject */
const replaySubject = new ReplaySubject(2);
replaySubject.subscribe(createObserver('Component A'));
replaySubject.next('hello');
replaySubject.next('world');
replaySubject.next('rxjs');
replaySubject.subscribe(createObserver('Component B'));

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
