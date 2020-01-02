 
  $(".calender").on("change", function (e) {
   // $(".select2").select2();
var tr = '';
// Define variables
var value = $(this).val();  //get values of inout on keyup

var $filename = value;


var today = new Date();
var dd = today.getDate();

var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (mm < 10) {
    mm = '0' + mm;
}
today = dd + '.' + mm + '.' + yyyy;
//console.log("darte", today);

//if (data[i].GUN === today) {
var denemetarih = "8.01.2020"

// getting json data from file for search results
$.getJSON("../vakit.github.io/jsonDeneme/" + $filename + ".json", function (data) {


    for (var i = 0; i < data.length; i++) {

        if (data[i].GUN === today) {
            console.log("today ", today)
            var index = data.findIndex(x => x.GUN === today)
            console.log("index", index)

            var items = data.slice(index, index + 7); //bugun ev sonraki 7 gun ü al ve items array gonder


            for (j = 0; j < 7; j++) {
                tr += '<tr>';

                tr += '<td scope="row1" data-th="Tarih" >' + items[j].GUN + '</td>';
                tr += '<td data-th="İmsak" >' + items[j].IMSAK + '</td>';
                tr += '<td data-th="Güneş" >' + items[j].GUNES + '</td>';
                tr += '<td data-th="Öğle" >' + items[j].OGLE + '</td>';
                tr += '<td data-th="İkindi" >' + items[j].IKINDI + '</td>';

                tr += '<td data-th="Akşam" >' + items[j].AKSAM + '</td>';
                tr += '<td data-th="Yatsı" >' + items[j].YATSI + '</td>';

                tr += '</tr>'

            }
            console.log("tr", tr)
            return document.getElementById('vakit').innerHTML = tr;

        }
    }

});

});


 
