var intToRoman = function (num) {
    var s = "";

    var symbol = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I",
    ];
    var value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    for (var i = 0; i < symbol.length; i++) {
        while (num - value[i] >= 0) {
            num -= value[i];
            s += symbol[i];
        }
    }

    return s;
};

var a = [2001, 1990, 1899, 39];

for (var i = 0; i < a.length; i++) {
    console.log(intToRoman(a[i]));
}
