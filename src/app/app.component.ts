import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ToggleComponent } from './components/toggle/toggle.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, FormsModule, ToggleComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'angular-learn';
    name = 'world';
    isChecked = false;
}
