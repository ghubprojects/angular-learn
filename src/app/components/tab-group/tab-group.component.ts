import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TabPanelComponent } from '../tab-panel/tab-panel.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-tab-group',
    standalone: true,
    imports: [CommonModule, TabPanelComponent],
    templateUrl: './tab-group.component.html',
    styleUrl: './tab-group.component.scss',
})
export class TabGroupComponent {
    tabPanelList: TabPanelComponent[] = [];
    @Input() activeIndex = 0;
    @Output() activeIndexChange = new EventEmitter<number>();

    addTab(tab: TabPanelComponent) {
        this.tabPanelList.push(tab);
    }

    removeTab(tab: TabPanelComponent) {
        this.tabPanelList = this.tabPanelList.filter((item) => item != tab);
    }
}
