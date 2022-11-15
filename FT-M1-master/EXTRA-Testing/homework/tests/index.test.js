const {checkSeatStatus, getRowNumber, book} = require('../homework.js')

describe('checkSeatStatus function test', function(){
    it('checkSeatStatus is a fonction', () => {
        expect (typeof checkSeatStatus).toBe('function')
        }
    );
    
    it('should throw a TypeError if first parameter is not a string', () => {
        expect(() => checkSeatStatus(2)).toThrow(
            new TypeError('First parameter it`s not a string')
        )
    })
    
    it('should throw a TypeError if the second parameter is not a number', () => {
        expect(() => checkSeatStatus('e', '2')).toThrow(
            new TypeError('Second parameter it`s not a number')
        )
    })
    it('should return true if the given seat bokking is not free', () => {
        expect(checkSeatStatus('A', 1).toBeFalsy(true))
    })
    
    it('should return false if the given seat bokking is free', () => {
        expect(checkSeatStatus('E', 3).toBeTruty(false))
    })
})

describe('getRowNumber function test', function(){
    it('sould return 0 if the letter is an "A"', () => {
        expect(getRowNumber('A')).toBe(0)
    });
    
    it('sould return 0 if the letter is an "A"', () => {
        expect(getRowNumber('B')).toBe(1)
    });
})

describe('book function test', function (){
    it('should return "Seat in XX successfully booked" if the given seat is not booked', () => {
        expect(book('E',3)).toBe('Seat in E3 successfully booked');
      });
      
      it('should return "Seat in XX is already booked" if the given seat is already booked', () => {
        expect(book('A',1)).toBe('Seat in A1 is already booked');
      });
})





