import {
    Component,
    ContentChild,
    Input,
    OnDestroy,
    OnInit,
    TemplateRef
} from '@angular/core';
import { TabContentDirective } from '../../directives/tab-content.directive';
import { TabGroupComponent } from '../tab-group/tab-group.component';

@Component({
    selector: 'app-tab-panel',
    standalone: true,
    imports: [],
    templateUrl: './tab-panel.component.html',
    styleUrl: './tab-panel.component.scss',
})
export class TabPanelComponent implements OnInit, OnDestroy {
    @Input() title!: string;
    @ContentChild(TabContentDirective, { static: true, read: TemplateRef })
    contentBody!: TemplateRef<unknown>;

    // dependency injection
    constructor(private tabGroup: TabGroupComponent) {}

    ngOnInit(): void {
        this.tabGroup.addTab(this);
    }

    ngOnDestroy(): void {
        this.tabGroup.removeTab(this);
    }
}
