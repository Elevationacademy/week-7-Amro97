// 1. n
// 2. logn
// 3. 1
// 4. mn
// 5. n

// Ex6

const findDuplicates = (arr) =>{
    let temp = {}
    for (let i = 0; i < arr.length; i++) {
        if (temp[arr[i]])
            console.log(`duplicated ${arr[i]}`)

        else
            temp[arr[i]] = 1
    }
}

//Ex7

const emps = {
    "ax01": { name: "Ray", age: 28, salary: 1300 },
    "qs84": { name: "lucius", age: 31, salary: 840 },
    "bg33": { name: "Taylor", age: 18, salary: 2700 }
}

const findEmployeeSalary = (employeeID) =>{
    console.log(emps[employeeID].salary)
}


//Ex8

const findIndex = function(numbers, num)
{
    let first = 0
    let last = numbers.length - 1
    for(;first < last;)
    {
        let mid = Math.floor((first+last)/2)
        if(num < numbers[mid])
        {
            last = mid - 1
        }
        else if(num > numbers[mid])
        {
            first = mid + 1
        }
        else if(num === numbers[mid])
        {
            console.log(mid)
            first = last
        }

    }
}




//Ex9 Green = O(1), Yellow = O(logn), Blue = O(n), Red = O(n^2)