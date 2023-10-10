let x=['a','b','c','d','e']


function runn(){
    let htmldata=" "

for (let i=0;i<x.length;i++){
    htmldata=htmldata+`<tr>
    <td>${x[i]}</td>
    <td>${x[i]}</td>
    <td>${x[i]}</td>
    </tr>`
}
document.getElementById('table').innerHTML=htmldata
}
