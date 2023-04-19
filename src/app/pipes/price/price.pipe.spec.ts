import {PricePipe} from './price.pipe';

describe('PricePipe', () => {
  let pipe: PricePipe;

  beforeEach(() => {
    pipe = new PricePipe();
  });
  it('Should be created', () => {
    expect(pipe).toBeTruthy();
  });
  it('Testing from ca to usd', () => {
    expect(pipe.transform(100, 'en-us')).toBe('$75.00 US');
  });

})
