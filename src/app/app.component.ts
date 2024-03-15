import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabGroupComponent } from './components/tab-group/tab-group.component';
import { TabPanelComponent } from './components/tab-panel/tab-panel.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, TabGroupComponent, TabPanelComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    title = 'angular-learn';
    currentIndex = 0;
}
