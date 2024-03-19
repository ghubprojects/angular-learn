import {
    AsyncPipe,
    CurrencyPipe,
    DatePipe,
    DecimalPipe,
    JsonPipe,
    LowerCasePipe,
    NgFor,
    PercentPipe,
    TitleCasePipe,
    UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { interval } from 'rxjs';
import { AddressType } from './types/address.type';
import { AddressPipe } from './pipes/address.pipe';
import { AdultPipe } from './pipes/adult.pipe';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        NgFor,
        DatePipe,
        LowerCasePipe,
        TitleCasePipe,
        UpperCasePipe,
        CurrencyPipe,
        DecimalPipe,
        PercentPipe,
        JsonPipe,
        AsyncPipe,
        AddressPipe,
        AdultPipe,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'angular-learn';
    nowTime = new Date();
    user = {
        name: 'angular',
        age: 20,
    };
    interval$ = interval(1000);
    myAddress: AddressType = {
        address1: '123 Some St',
        address2: 'STE 100',
        city: 'Acne',
        state: 'State',
        zip: '12345',
        country: 'US',
    };
    userList = [
        {
            name: 'user 1',
            age: 20,
        },
        {
            name: 'user 2',
            age: 11,
        },
        {
            name: 'user 3',
            age: 16,
        },
        {
            name: 'user 4',
            age: 18,
        },
        {
            name: 'user 5',
            age: 19,
        },
    ];
}
