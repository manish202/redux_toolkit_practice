const increment = (payload) => {
    return { type:"INC",payload }
}
const decrement = () => {
    return { type:"DEC" }
}
const multiply = () => {
    return { type:"MULTIPLY" }
}
const divide = () => {
    return { type:"DIVIDE" }
}
export {increment,decrement,multiply,divide}