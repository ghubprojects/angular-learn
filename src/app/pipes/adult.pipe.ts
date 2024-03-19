import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'adult',
    standalone: true,
})
export class AdultPipe implements PipeTransform {
    transform(value: any, ...args: unknown[]): any {
        return value.filter((x: any) => x.age >= 18);
    }
}
