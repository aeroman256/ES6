/*
function Task () {

}

let task = function Task() {

}

class Task {
    constructor() {
        console.log() {
            console.log('Creating task')
        }
    }
}*/

let Task = class {
    constructor() {
        console.log('Creating a task')
    }
}

let Subtask = class extends Task {
    constructor() {
        super()
        console.log('Creating a subtask')
    }
}

let task = new Task
let subtask = new Subtask

console.dir(task)
console.dir(subtask)