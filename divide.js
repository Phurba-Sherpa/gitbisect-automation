
export const divide = (nume, deno) => {
    if (isNaN(nume) || isNaN(deno)) {
        throw new Error("Parameter is not number")
    }

    if (deno === 0) {
        throw new Error("Divisor cannot be zero")
    }

    return a/b
}
