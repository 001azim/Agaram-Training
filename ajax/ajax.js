function display(){
    $.ajax({
        type:'get',
        url:'https://jsonplaceholder.typicode.com/posts',
        data:{},
        success: function(list){
            console.log(list)
           let h=''
        for(let i=0;i<list.length;i++){
            h=h+`  
            <tr>
            <th scope="row"> ${list[i].userId}</th>
        <td   <button type="button" onclick="run(${list[i].id})">${list[i].id}</button></td>
            <td>${list[i].title}</td>
            <td>${list[i].body}</td>
          </tr>`
            $('#table_body').html(h)
        }

        },
        error: function( error){
            console.log(error)
        }

        })
}

$('#show').toggle()



function run(id){
    alert(id)
    console.log('id number',id)
    $.ajax({
        type:'get',
        url:`https://jsonplaceholder.typicode.com/posts/${id}/comments`,
        data:{},
        success: function(list){
            console.log(list)
         
        

        },
       
        })



}

function sentdata(){
alert('done')
    $.ajax({
        type:'POST',
        url:'https://jsonplaceholder.typicode.com/posts',
        data:{userId:'azim',id:2001,title:2002,body:11},
        success: function(list){
            console.log(list)
         
        

        },
        error: function(error) {
            console.log(error)
        }
       
        })


       

}