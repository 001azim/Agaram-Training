

    var getUrlParameter = function getUrlParameter(sParam) {
var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
}
return false;
};



var id = getUrlParameter('id');
console.log('js',id)


function get(id){

$.ajax({type :'get',
data :
{
request : "get_resume_by_id",
user :"azim",
id:id
},

url:"http://agaram.academy/api/action.php",
success: function(list){
let details=JSON.parse(list)
console.log('data',details)
console.log(JSON.parse(details.data.data).name)

let x=JSON.parse(details.data.data)


$('#name').html(x.name)
$('#email').html(x.email)
$('#phone').html(x.phone_number)

// console.log('lang',x.personal_details)
let h=""
for(let i=0;i<x.skill.length;i++){
h=h+`<li>${x.skill[i]}</li>`


}
$('#skill').html(h)

ht=""

for(let i=0;i<x.lang.length;i++){
ht=ht+`<li>${x.lang[i]}</li>`

}
$('#lang').html(ht)

$('#fn').html(x.personal_details.father_name)
$('#mn').html(x.personal_details.mother_name)

let html_data=''
for(let i=0;i<x.education.length;i++){
    console.log(x.education[i].institution_name)
html_data=html_data+`    <tr>
<th scope="row">${x.education[i].institution_name}</th>
<td>${x.education[i].degree}</td>
<td>${x.education[i].year}</td>
<td>${x.education[i].percentage}</td>
</tr>`
}
$('#test').html(html_data)

$('#dec').html(x.objective)

},

error: function(error){
console.log(error)
}

})
}

function previous(){
window.location="arrange.html"
}


function download() {
    
const page = document.getElementById('tes');
var opt = {
margin:
1,
filename: 'Demopdf.pdf',
image:
{ type: 'jpeg', quality:0.98},
html2canvas:
{ scale: 1},
jsPDF:
{ unit: 'in', format: 'letter', orientation: 'portrait' }
};
// Choose the element that our invoice is rendered in.
html2pdf().set(opt). from (page).save();
}

