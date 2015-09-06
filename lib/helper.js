exports.checkInArray = function (arr, obj) {
    return (arr.indexOf(obj) != -1);
}

exports.fuzzy = function (string, match) {
    var hay = string.toLowerCase(), i = 0, n = -1, l;
    match = match.toLowerCase();
    for (; l = match[i++] ;) if (!~(n = hay.indexOf(l, n + 1))) return false;
    return true;
}
