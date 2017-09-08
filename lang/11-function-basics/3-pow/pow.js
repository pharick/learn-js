function pow(x, n) {
    result = x;
    for (var i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

console.log(pow(6, 3));
