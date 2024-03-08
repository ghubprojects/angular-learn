import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-progress-bar',
    standalone: true,
    imports: [],
    templateUrl: './progress-bar.component.html',
    styleUrl: './progress-bar.component.scss',
})
export class ProgressBarComponent {
    @Input() set progress(val: number) {
        // validation
        if (typeof val != 'number') {
            const progress = Number(val);
            if (Number.isNaN(progress)) {
                this._progress = 0;
            } else {
                this._progress = progress;
            }
        } else {
            this._progress = val;
        }
    }
    private _progress = 50;
    get progress() {
        return this._progress;
    }

    @Input('bg-color') bgColor = '#ccc';
    @Input() progressColor = 'tomato';
    @Input() id = 1;

    @Output() selected = new EventEmitter<number>();
    @Output() removed = new EventEmitter<number>();

    select() {
        this.selected.emit(this.id);
    }

    remove() {
        this.removed.emit(this.id);
    }
}
