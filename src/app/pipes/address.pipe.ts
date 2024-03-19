import { Pipe, PipeTransform } from '@angular/core';
import { AddressType } from '../types/address.type';

@Pipe({
    name: 'address',
    standalone: true,
})
export class AddressPipe implements PipeTransform {
    transform(value: AddressType, ...args: unknown[]): unknown {
        return `${value.address1} ${value.address2}, ${value.city}, ${value.state} ${value.zip}, ${value.country}`;
    }
}
