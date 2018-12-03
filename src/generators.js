//Генератор

/*function* generate() {
    console.log('Welcome')
    console.log('Start')
    yield {name: 'Hello'}
    console.log('Finish')
}

let iterator = generate()
console.log(iterator.next())*/

//Iterator

/*function generate(){
    let current = 1
    console.log('Start')
    return {
        [Symbol.iterator]() {
            return {
                next(){
                    let result = { value: undefined, done: true}

                    if (current <= 3) {
                        result.value = current
                        result.done = false
                        current++
                    } else {
                        result.value = undefined
                        result.done = true
                    }

                    return result
                }
            }
        }
    }
    console.log('Finish')
}*/

function* range(start, end) {
   let current = start
    while(current <= end) {
       yield current++
    }
}

for (let num of range(1, 10)) {
    console.log(num)
}

