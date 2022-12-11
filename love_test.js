
function hesapla() {
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;

    name1 = name1.toLowerCase();
    name2 = name2.toLowerCase();


    nameArr = (name1 + name2).split("");
    nameArr2 = (name1 + name2).split("");
    var countArr = [];
    text = "";
    for (let i = 0; i < nameArr.length; i++) {
        count = 0;
        text += nameArr[i] + "<br>"

        for (let j = i; j < nameArr2.length; j++) {
            if (nameArr[i] == nameArr2[j]) {
                count++;
                nameArr2[j] = "/";
                text += nameArr2 + "<br>";
            }
        }
        text += "--------------------- <br>"
        if (count != 0) {
            countArr.push(count);
        }
    }

    text += "<p>" + countArr;
    result = 0;
    arr2 = [];
    text += "<br>--------------------- <br>"
    while (countArr.length > 2) {

        while (countArr.length > 0) {
            if (countArr.length == 1) {
                arr2.push(countArr[0]);
                break;
            }
            text += "<br> önceki liste: " + countArr;
            arr2.push(countArr[0] + countArr[countArr.length - 1]);
            countArr.shift();
            countArr.pop(countArr.length - 1);

            text += "<br>  listede kalanlar: " + countArr;
            text += "<br> oluşan liste : " + arr2;
            text += "<br>---------------------"
        }
        if (arr2.length > 2) {
            text += "<br> Oluşturulan listeye işlem baştan uygulanıyor ";
            text += "<br>---------------------"
        }

        countArr = arr2;
        arr2 = [];
    }
    text += "<br>Sonuç : <h1>&#128151;" + countArr[0] + "" + countArr[1] + "&#128151;</h1>";
    document.getElementById("result").innerHTML = "<br>Sonuç : <h1>&#128151; %" + countArr[0] + "" + countArr[1] + "&#128151;</h1>";
    document.getElementById("sonuc").innerHTML = text;


}

$("#sonuc").hide();
function showHide() {
    if ($("#showHideC").is(":checked")) {

        $("#sonuc").show(300);
    } else {

        $("#sonuc").hide(200);
    }
}