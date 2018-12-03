
let humans = ['Alex', , 'John']

for (let human of humans) {
    //console.log(human)
}

let iterator = humans[Symbol.iterator]()

/*
let next = iterator.next()

while(!next.done) {
    console.log(next.value)
    next = iterator.next()
}*/


//Генератор случайных чисел

/*let randomGenerator = {
    //Получаем доступ у итератору
    generate() {
        return this[Symbol.iterator]()
    },
    //Получаем доступ у итератору
    [Symbol.iterator]() {
        let count = 0
        return {
            next() {
                let value = Math.ceil(Math.random() * 100)
                let done = count > 9
                count += 1
                return {value, done}
            }
        }
    }
}

let random = randomGenerator.generate()
console.log(random.next().value)*/









//Добавление елементов в массив

/*
class TaskList {
    constructor() {
        this.tasks = []
    }

    addTasks(...tasks) {
        this.tasks = this.tasks.concat(tasks)
    }

    [Symbol.iterator]() {
        let tasks = this.tasks
        let index = 0

        return {
            next() {
                let result = { value: undefined, done: true}

                if (index < tasks.length){
                    result.value = tasks[index]
                    result.done = false
                    index += 1
                }

                return result
            }
        }
    }
}

let taskList = new TaskList()
taskList.addTasks('Изучить JavaScript', 'Изучить ES6', 'Найти стажировку')

for (let task of taskList){
    console.log(task)
}*/


//Добавление елементов в массив
// Вынесли добавление в отдельный класс


class ArrayIterator {
    constructor(array) {
        this.array = array.map(item => item).sort() // сортировка по алфавиту
        //this.array = array
        this.index = 0
    }

    next() {
        let result = { value: undefined, done: true}

        if (this.index < this.array.length){
            result.value = this.array[this.index]
            result.done = false
            this.index += 1
        }

        return result
    }
}


class TaskList {
    constructor() {
        this.tasks = []
    }

    addTasks(...tasks) {
        this.tasks = this.tasks.concat(tasks)
    }

    [Symbol.iterator]() {
        return new ArrayIterator(this.tasks)
    }
}

let taskList = new TaskList()
taskList.addTasks('Изучить JavaScript', 'Изучить ES6', 'Найти стажировку')

for (let task of taskList) {
    console.log(task)
}