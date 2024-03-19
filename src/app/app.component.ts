import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabGroupComponent } from './components/tab-group/tab-group.component';
import { TabPanelComponent } from './components/tab-panel/tab-panel.component';
import { CounterComponent } from './components/counter/counter.component';
import { TabContentDirective } from './directives/tab-content.directive';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        NgIf,
        TabGroupComponent,
        TabPanelComponent,
        CounterComponent,
        TabContentDirective,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    title = 'angular-learn';
    currentIndex = 0;
    showTab3 = true;
}
