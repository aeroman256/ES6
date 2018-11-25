let staticlang = ['C', 'C++', 'Java']
let dynamiclang = ['js', 'php', 'ruby']
let lang = [...staticlang, 'Python', ...dynamiclang]

console.log(lang)

function add(x, y, z) {
    console.log(x + y + z)
}

let numbers = [8, 2]

add(...numbers)


