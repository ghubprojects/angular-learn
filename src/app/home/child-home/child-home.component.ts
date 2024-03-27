import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';

@Component({
    selector: 'app-child-home',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './child-home.component.html',
    styleUrl: './child-home.component.scss',
})
export class ChildHomeComponent implements OnInit {
    ngOnInit(): void {}
}
