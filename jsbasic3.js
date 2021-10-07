let marks = [20,40,35,12,17,100]

let sum = 0
for (let i = 0; i < marks.length; i++){
    sum = sum + marks[i]
}
console.log(sum)

let total = marks.reduce((sum, marks) => sum-marks,0)
console.log(total)