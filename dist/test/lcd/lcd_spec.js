'use strict';

var _chai = require('chai');

var _lcd = require('../../src/lcd');

describe('LCD', function () {

  describe('transform', function () {
    it('should transform some numeric in order to print it directly on a LCD screen', function () {
      // given
      var inputData = "0123456789";
      var expectedResult = '\n _           _     _           _     _     _     _     _ \n| |     |    _|    _|   |_|   |_    |_      |   |_|   |_|\n|_|     |   |_     _|     |    _|   |_|     |   |_|     |';

      // when
      var result = (0, _lcd.transform)(inputData);

      // then
      (0, _chai.expect)(result).to.eql(expectedResult);
    });
    it('should replace non numeric chars by spaces', function () {
      // given
      var inputData = "0123.456 78a9";
      var expectedResult = '\n _           _     _                 _     _           _     _           _ \n| |     |    _|    _|         |_|   |_    |_            |   |_|         |_|\n|_|     |   |_     _|           |    _|   |_|           |   |_|           |';

      // when
      var result = (0, _lcd.transform)(inputData);

      // then
      (0, _chai.expect)(result).to.eql(expectedResult);
    });
  });
});