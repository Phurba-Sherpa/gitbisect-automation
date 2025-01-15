
export const sub = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        throw new Error("Parameter is not number")
    }
    return a - b
}
