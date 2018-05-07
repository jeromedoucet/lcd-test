import { expect } from 'chai';
import { transform } from '../../src/lcd'

describe('LCD', () => {

  describe('transform', () => {
   it('transform some numeric in order to print it directly on a LCD screen', () => {
    // given
    const inputData = "012456789";
    const expectedResult = `
 _           _     _           _     _     _     _     _ 
| |     |    _|    _|   |_|   |_    |_      |   |_|   |_|
|_|     |   |_     _|     |    _|   |_|     |   |_|     |`

    // when
    const result = transform(inputData);
    
    // then
    expect(result).to.eql(expectedResult); 
   }); 
  })
});
