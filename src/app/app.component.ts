import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

const observable = new Observable((observer) => {
    const id = setInterval(() => {
        observer.next('Hello Rxjs');
    }, 1000);

    return () => clearInterval(id);
});

const subcription = observable.subscribe({
    next: (value) => console.log(value),
    error: (error) => console.error(error),
    complete: () => console.log('completed'),
});

subcription.add(observable.subscribe(console.log));

setTimeout(() => subcription.unsubscribe(), 5000);

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
