/* Write your code below */
class Matrix {
    constructor(r, c) {
        this.matrix = []
        this.generateMatrix(r, c)
    }


    generateMatrix(RDIM, CDIM) {
        let counter = 1
        for (let r = 0; r < RDIM; r++) {
            let row = []
            for (let c = 0; c < CDIM; c++) {
                row.push(counter++)
            }
            this.matrix.push(row)
        }
        return this.matrix
    }

    findCoordinate(value){
        for (let r = 0; r < this.matrix.length; r++) 
            for (let c = 0; c < this.matrix[0].length; c++)
            if (this.matrix[r][c] == value)
            return {x: c, y: r}

    }
}



//You can paste the code from the lesson below to test your solution

let m = new Matrix(3, 4)
console.log(m.findCoordinate(12)) //prints {x: 3, y: 2}
console.log(m.findCoordinate(7)) //prints {x: 2, y: 1}

/* Do not remove the exports below */
module.exports = Matrix