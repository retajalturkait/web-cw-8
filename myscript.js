// ------------------------------ 1️⃣ السؤال الأول ------------------------------
//     - driving اسمها function عرف دالة او
//     - تأخذ عمر شخص (رقم) واذا كان اكبر من 18 تطبع
//          🚘😍 مبروك سوف تحصل على الليسن
//     - واذا كان اقل من 18 يطبع
//          😢 للاسف عمرك لا يسمح
//     console.log ، if ملاحظة: سوف تستخدم

// 👇 هنا function عرف الدالة او
function driving(a){
    if( a>18 ){
      console.log (`🚘😍 مبروك سوف تحصل على الليسن`)
    }else {
            console.log (`😢 للاسف عمرك لا يسمح`)
    }
 }
    driving(20)




// لا تنسى أن تنادي الدالة



// ------------------------------ 2️⃣ السؤال الثاني ------------------------------
// 2️⃣ السؤال الثاني
//     - iceCream واجعل اسمها array عرف مصفوفة او
//     - 🍦 احفظ فيها مجموعة من نكهات الآيس كريم
//     - console.log لطباعة قائمة نكهات الآيس كريم بإستخدام for loop استخدم

// 👇 هنا array عرف المصفوفة او
var iceCeam = [`vanila`, `banana`, `rasberry`,`chocolate`,`coconut`,`coffe`];

for (const retaj of iceCeam) {
    console.log (retaj)
}


// --------------------------------- ✨ بونص ------------------------------------
// بحيث عند مناداة الدالة تطبع القائمة myIceCream بإسم function عرف دالة او
// for loop عرف مصفوفة أخرى تحتوي على أفلامك الكرتون المفضلة بالنسبة لك وقم بطباعة الأفلام بإستخدام
function myIceCream(){
    console.log( iceCeam )
}

var cartoon =[`shaun the sheep`,`tom & jerry`,`one piece`,`dora`]

for (const anything of cartoon) {
    console.log (anything)
}


// --------------------------------- 🔥 بونص ------------------------------------
// while loop اطبع احد المصفوفات بإستخدام
let t =0
while (t< cartoon.length) {
    console.log(cartoon[t]);
    t++
  }