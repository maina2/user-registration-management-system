// var selectedRow = null;

// function onformsub(){
//     Event.preventDefault();
//     var formdata = readformdata();
//     if(selectedRow === null){
//         InsertRecord(formdata);
//     }
//     else{

//     }


// }

// function readformdata(){

//     var formdata = ();
//     formdata['name'] = document.getElementById('name');
//     formdata['id'] = document.getElementById('id');
//     formdata['country'] = document.getElementById('country');
//     formdata['languages'] = document.getElementById('languages');
//     return formdata;
// }
// function InsertRecord(data){
//     var table  = document.getElementById('table').getElementsByTagName('tbody')[0];
//     var newRow = table.insertRow(table.length);

//     var cell1 = newRow.insertCell(0);
//     cell1.innerHTML = data.name;

//     var cell2 = newRow.insertCell(1);
//     cell2.innerHTML = data.id;

//     var cell3 = newRow.insertCell(2);
//     cell3.innerHTML = data.country;

//     var cell4 = newRow.insertCell(3);
//     cell4.innerHTML = data.languages;


// }

document.addEventListener('documentloaded',function(){

    const table = document.getElementById('table');
    const forms = document.forms;
})

table.addEventListener('click', (e) => {
    if (e.className == 'delete'){
        const tr = e.target.parentElement;
        tr.parentNode.removechild(tr)
    }
})




