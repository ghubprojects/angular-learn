import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NgIf, NgFor],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'angular-learn';

    user = {
        name: 'Angular',
        age: 20,
    };

    userList = [
        {
            name: 'Angular 1',
            age: 10,
        },
        {
            name: 'Angular 2',
            age: 20,
        },
        {
            name: 'Angular 3',
            age: 30,
        },
        {
            name: 'Angular 4',
            age: 40,
        },
        {
            name: 'Angular 5',
            age: 50,
        },
    ];

    increaseAge() {
        this.user.age++;
    }

    decreaseAge() {
        this.user.age--;
    }
}
