import { CommonModule } from '@angular/common';
import {
    AfterViewInit,
    Component,
    ElementRef,
    OnChanges,
    OnInit,
    QueryList,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ToggleComponent } from './components/toggle/toggle.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, FormsModule, ToggleComponent, CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
    @ViewChild('inputRef', { static: true }) inputRef!: ElementRef<HTMLInputElement>;
    @ViewChild('toggleRef2') toggleRefAlias!: ToggleComponent;

    @ViewChildren('toggleRef') toggleRefs!: QueryList<ToggleComponent>;

    title = 'angular-learn';
    name = 'world';

    isCheckedBtn1 = false;
    isCheckedBtn2 = false;

    count = 0;
    isCheckedAll = false;
    isShowLast = true;

    ngOnInit(): void {
        this.inputRef.nativeElement.focus();
    }

    ngAfterViewInit(): void {
        this.toggleRefs.changes.subscribe(() => {
            setTimeout(() => (this.count = this.toggleRefs.length), 0);
        });
    }

    handleToggle() {
        this.toggleRefAlias.toggle();
    }
}
