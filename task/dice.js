function generateNumber() {
    let x = Math.trunc(Math.random() * 7) + 1
    console.log("🚀 ~ file: dice.js:2 ~ generateNumber ~ x:",x)
  
}
generateNumber()
generateNumber()
generateNumber()
generateNumber()
generateNumber()


function generateWithLoop(params) {
    for (let i = 0; i > 0; i++) {
        let x = Math.trunc(Math.random() * 100) + 1
        if (x % 2 === 0) return x
    }
}

let num = generateWithLoop()