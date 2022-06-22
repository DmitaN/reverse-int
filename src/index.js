module.exports = function reverse (n) {
    const int = Math.abs(n);
    const str = String(int).split("").reverse().join("");
    return parseInt(str);
}
