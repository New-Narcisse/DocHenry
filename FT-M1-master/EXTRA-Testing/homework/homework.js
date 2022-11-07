

describe('checkSeatStatus',() => {
    let checkSeatStatus = function (row, number) {
        if(typeof row !== 'string') throw new TypeError('First parameter it`s not a string');
        if(typeof number !== 'number') throw new TypeError('Second parameter it`s not a number')
    
        const layout = [
            [{type: 'VIP', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}],
            [{type: 'NORMAL', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}, {type: 'NORMAL', booked: false}],
            [{type: 'NORMAL', booked: false}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: false}],
            [{type: 'ECONOMIC', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'ECONOMIC', booked: false}],
            [{type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: true}, {type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: false}]
        ];
    
        
    
    describe('getRowNumber', () => {
        let getRowNumber = function (letter){
            return letter.charCodeAt(0) - 65;
            }
    })
    
        let numberRow = getRowNumber(row);
        let layoutRows = layout[numberRow];
        let seat = layoutRows[number];
        return seat.booked;
    
    }
   
})
module.exports = { checkSeatStatus }

