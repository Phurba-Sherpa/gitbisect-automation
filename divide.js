
export const divide = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {

        if (b === 0) {
            throw new Error("Denominator cannot be zero")
        }
        return a/b
    }
}
