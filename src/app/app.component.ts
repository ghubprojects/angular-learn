import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NgIf, ProgressBarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'angular-learn';
    currentProgress = 70;
    selectedProgress = 0;
    removedProgress: number[] = [];

    handleSelectProgress(val: number) {
        this.selectedProgress = val;
    }

    handleRemoveProgress(val: number) {
        if (!this.removedProgress.includes(val)) {
            this.removedProgress.push(val);
            this.selectedProgress = this.selectedProgress == val ? 0 : this.selectedProgress;
        }
    }
}
