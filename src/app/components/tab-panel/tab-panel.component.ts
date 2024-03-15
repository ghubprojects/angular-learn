import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TabGroupComponent } from '../tab-group/tab-group.component';

@Component({
    selector: 'app-tab-panel',
    standalone: true,
    imports: [],
    templateUrl: './tab-panel.component.html',
    styleUrl: './tab-panel.component.scss',
})
export class TabPanelComponent implements OnInit {
    @Input() title!: string;
    @ViewChild(TemplateRef, { static: true }) panelBody!: TemplateRef<unknown>;

    // dependency injection
    constructor(private tabGroup: TabGroupComponent) {}

    ngOnInit(): void {
        this.tabGroup.addTab(this);
    }
}
