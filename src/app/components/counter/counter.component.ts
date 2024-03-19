import { Component } from '@angular/core';

let _count = 1;
@Component({
    selector: 'app-counter',
    standalone: true,
    imports: [],
    templateUrl: './counter.component.html',
    styleUrl: './counter.component.scss',
})
export class CounterComponent {
    count = _count++;
}
