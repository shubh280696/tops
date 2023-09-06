let arr = [
    {
        name: "shubh",
        age: 25,
    },
    {
        name: "chiudi",
        age: 23,
    },
    {
        name: "teju",
        age: 25,
    },
    {
        name: "ana",
        age: 22,
    },
    {
        name: "shiv",
        age: 26,
    },
]

arr.map((e) => {
    console.log("----e", e.name)
    console.log("-----e", e.age)
})

let filteredarr = arr.filter((e)=> {
    return e.age >24
})
console.log("🚀 ~ file: array_of_obj.js:31 ~ filteredarr ~ filteredarr:", filteredarr)


let matchuser= arr.find((e)=>{
return e.name="chuidi"
})
console.log("🚀 ~ file: array_of_obj.js:37 ~ matchuser ~ matchuser:", matchuser)