var LocalizableString = require('./LocalizableString').LocalizableString

var thai = LocalizableString("th")
var english = LocalizableString("en")
var japanese = LocalizableString("jp")

var thWord = thai.getString("hello", ["ทศพล"])
var enWord = english.getString("hello", ["ทศพล"])
var jpWord = japanese.getString("hello", ["ทศพล"])
console.log(thWord)
console.log(enWord)
console.log(jpWord)

var thWord2 = thai.getString("age", ["ทศพล", 25])
var enWord2 = english.getString("age", ["ทศพล", 25])
var jpWord2 = japanese.getString("age", ["ทศพล", 25])
console.log(thWord2)
console.log(enWord2)
console.log(jpWord2)