class Task {
    constructor(title = Task.getDefaultTitle()) {
        console.log('Создание задачи')
        this.title = title
        this._done = false
        Task.count += 1
    }

    get done() {
        return this._done ? 'Задача выполнена' : 'Задача не выполнена'
    }

    set done(value) {
        if (value !== undefined && typeof value === 'boolean') {
            this._done = value
        } else {
            console.error('Укажите значение true или false')
        }
    }

    complete() {
        this.done = true
        console.log(`Задача "${this.title}" выполнена`)
    }

    static getDefaultTitle() {
        return 'Задача'
    }
}

let task = new Task('Убрать комнату')
console.log(task.done, '__', task._done)
task.complete();
console.log(task.done, '__', task._done)


