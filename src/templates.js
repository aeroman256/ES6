function greet(name) {
    console.log(`Hello ${name}`)
}

greet("Bill");

function creatEmail(to, from, subject, message) {
    console.log(`
        To: ${to}
        From: ${from}
        Subject: ${subject}
        Message: ${message}
    `)
}
creatEmail('Ivan', 'Dima', 'hello', 'How you doing?')

let name = 'Bill'
console.log(upperName`hello ${name} ${name} ${name} ${name}`)

function upperName(literals, ...values) {
    let res = '';
    for (let i = 0; i < values.length; i++){
        res += values[i] + ', '
    }
    return literals[0].toUpperCase() + res.toUpperCase()
}