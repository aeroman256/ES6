function applyForVisa(documents, resolve, reject) {
    console.log('Подготавливаем документы...')
    let promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            Math.random() > 0 ? resolve({}): reject('В визе отказано, не хватило документов')
        }, 2000)
    })
    return promise
}

function getVisa(visa){
    console.info('Виза получена')
    console.log("getVisa---", visa)
    return new Promise(function(resolve, reject){
        setTimeout(() => {Promise.resolve(visa)}, 2000)
    })
}

function bookHotel(visa) {
    console.log('bookHotel---', visa)
    console.info('Бронируем отель')
    return new Promise.resolve(visa)

}

function buyTicket() {
    console.info('Покупаем билет')
}

let visa = {}

applyForVisa(visa)
    .then(getVisa)
    .then(bookHotel)
    .then(buyTicket)
    .catch(error => console.error(error))