import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform{
  transform(value: number, locale: string): string {
    //1 cad = 0.63 £, 1 cad = 0.75 USD;
    const exchange: Map<string, string> = new Map<string, string>();
    exchange.set('en-ca', `$${value.toFixed(2)} CAD`);
    exchange.set('en-us', `$${(value * 0.75).toFixed(2)} US`);
    exchange.set('en-gb', `$${(value * 0.63).toFixed(2)} GB`);
    if (exchange.has(locale)) {
      return exchange.get(locale) || 'error on displaying';
    }
    return 'currency not found'
  }
}
