var fs = require('fs')

exports.LocalizableString = function(locale){

    //เตรียมข้อมูลก่อน
    var fileName = 'langfile/'+locale+'.txt' //ชื่อ File
    var langFile = fs.readFileSync(fileName, 'utf8') //อ่าน File
    const langObject = JSON.parse(langFile) //แปลงจากเนื้อหาในไฟล์ดเป็น JSON

    return {
        langTable : langObject,
        getString : function(name, data){
            var txt = this.langTable[name]//Text ต้นฉบับ

            if( txt == undefined ) {
                return ""//ไม่เจอคำใน Lang file ให้คืนค่าว่าง ออกไป
            }

            for(i in data){
                var find = '{{'+i+'}}' //ค้นหาเครื่องหมาย {{ตัวเลข}} ในข้อความ
                var replae = String(data[i]) //เตรียมคำที่จะแทนที่
                txt = txt.split(find).join(replae)// แทนที่ {{x}} ด้วยคำนั้นๆ
            }
            return txt //คืนคำที่ สมบูรณ์แล้ว ออกไป
        }
    }

}

