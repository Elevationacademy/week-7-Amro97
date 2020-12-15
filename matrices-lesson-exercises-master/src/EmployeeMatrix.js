/* Write your code below */
const mat = require('./Matrix')

class EmployeeMatrix extends mat {
    loadData(salaryData) {
        let r = []
        for (let row = 0; row < salaryData.length; row++) {
            r.push(salaryData[row]._id)
            r.push(salaryData[row].name)
            r.push(salaryData[row].department)
            r.push(salaryData[row].salary)
            this.matrix.push(r)
            r = []
        }
        return this.matrix
    }

    getEmployees(department) {
        let eArr = []
        for (let r = 0; r < this.matrix.length; r++) {
            if (this.matrix[r][2] === department)
                eArr.push(this.matrix[r][1])
        }
        return eArr
    }
    getTotalSalary(department) {
        let salarySum = 0
        for (let r = 0; r < this.matrix.length; r++) {
            if (this.matrix[r][2] === department)
                salarySum += this.matrix[r][3]
        }
        return salarySum
    }
    findRichest() {
        let max = 0
        let name = ''
        for (let r = 0; r < this.matrix.length; r++) {
            if (this.matrix[r][3] > max) {
                max = this.matrix[r][3]
                name = this.matrix[r][1]
            }
        }
        return name
    }
}



//You can paste the code from the lesson below to test your solution
let data = [
    { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
    { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
    { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
    { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
    { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
    { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 }
]

let m = new EmployeeMatrix()

console.log(m.loadData(data))

console.log(m.getEmployees("Finance")) //prints [ 'Gillian', 'Anisha' ]
console.log(m.getEmployees("Design")) //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]
console.log(m.getTotalSalary("Finance")) //prints 4300
console.log(m.getTotalSalary("Design")) //prints 5300
console.log(m.findRichest()) //prints Anisha

/* Do not remove the exports below */
module.exports = EmployeeMatrix