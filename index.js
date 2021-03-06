const sleep = (seconds, value) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(value)
        }, seconds * 1000)
    })
}


const run = async () => {

    console.log('before-1')

    const res = await sleep(2, 1000)

    console.log(res)
    console.log('after')
console.log('Another message')
}

run()