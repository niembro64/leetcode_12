var intToRoman = function (num) {
    var s = "|";

    var symbol = ["M", "D", "C", "L", "X", "V", "I"];
    var value = [1000, 500, 100, 50, 10, 5, 1];

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
