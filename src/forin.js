let fruits = ['Apple','Cherry','Pinapple','Orange']

for (let index in fruits) {
    let fruit = fruits[index]
    console.log(fruit)
}

for (let fruit of fruits) {
    console.log(fruit)
}