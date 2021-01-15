function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve()
        }, ms)
    })
}

let p1 = sleep(1500).then(function () {
    return {
        name: "Promise 1500"
    }
})

let p2 = sleep(3000).then(function () {
    return {
        name: "Promise 3000"
    }
})

let p3 = sleep(4500).then(function () {
    return {
        name: "Promise 4500"
    }
})

async function start() {
    let dataAll = await Promise.all([p1, p2, p3]) // возвращает обещание, которое выполнится тогда, когда будут выполнены все обещания

    let dataRace = await Promise.race([p1, p2, p3]) // возвращает выполненное или отклоненное обещание, в зависимости от того, с каким результатом завершится первое из переданных обещаний

    console.log("dataAll", dataAll)
    console.log("dataRace", dataRace)
}

start()



