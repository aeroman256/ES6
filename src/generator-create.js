function* generator() {
    let res = yield 1
    console.log(`Result: ${result}`)
}

let iterator = generator()
console.log(iterator.next())