import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-toggle',
    standalone: true,
    imports: [],
    templateUrl: './toggle.component.html',
    styleUrl: './toggle.component.scss',
})
export class ToggleComponent {
    @Input() checked = false;
    @Output() checkedChange = new EventEmitter();
}
