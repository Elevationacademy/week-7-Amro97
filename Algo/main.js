//Ex1
const printStars = (num) => {
    for (let i = 1; i <= num; i++)
        for (let j = 1; j <= i; j++)
            console.log('*')
}

//Ex2
const printBackwardsStars = (num) => {
    let j
    while (num) {
        for (j = num; j > 0; j--) {
            console.log('*')
        }
        num--
    }
}

printStars(5)
console.log('Done')
printBackwardsStars(5)
console.log('Done')

//Ex3
const printStarSeries = (num, count) => {
    for (let i = 0; i < count; i++) {
        printStars(num)
        printBackwardsStars(num - 1)
    }
}

printStarSeries(5, 3)