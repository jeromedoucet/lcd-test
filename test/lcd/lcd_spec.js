import { expect } from 'chai';
import { transform } from '../../src/lcd'

describe('LCD', () => {

  describe('transform', () => {
   it('should transform some numeric in order to print it directly on a LCD screen', () => {
    // given
    const inputData = "0123456789";
    const expectedResult = `
 _           _     _           _     _     _     _     _ 
| |     |    _|    _|   |_|   |_    |_      |   |_|   |_|
|_|     |   |_     _|     |    _|   |_|     |   |_|     |`

    // when
    const result = transform(inputData);

    // then
    expect(result).to.eql(expectedResult); 
   }); 
   it('should replace non numeric chars by spaces', () => {
    // given
    const inputData = "0123.456 78a9";
    const expectedResult = `
 _           _     _                 _     _           _     _           _ 
| |     |    _|    _|         |_|   |_    |_            |   |_|         |_|
|_|     |   |_     _|           |    _|   |_|           |   |_|           |`

    // when
    const result = transform(inputData);

    // then
    expect(result).to.eql(expectedResult); 
   }); 
  })
});
