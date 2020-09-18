var array = [
    {name:"biswa",age:23,city: "kalahandi", salary: 50000},
    {name:"pragyan",age:21,city: "Bhubaneswar", salary: 55000}
];


//show the objects in a table

function show(){ 
    let table = "<table border = 1px id = 'myTable'>"
    table+= "<thead>";
    table+="<tr style = 'text-align : center'>";
   
        table+= "<th>Name</th>";
        table+= "<th>Age</th>";
        table+= "<th>City</th>";
        table+= "<th>Salary</th>";
    
    table+="</tr>";
    table+= "</thead>";
for ( var i = 0; i < array.length; i++) {

table +="<tr>";
table+="<td>"+array[i].name+"</td>";
 table+="<td>"+array[i].age+"</td>";
 table+="<td>"+array[i].city+"</td>";
 table+="<td>"+array[i].salary+"</td>";
table +="</tr>";

}
table+="</table>";


document.getElementById("box").innerHTML = table;
}
show();

//search for name and city


//function for searching by name
function searchName(){
    
  var input = document.getElementById("searchTable").value;
  var filter = input.toUpperCase();
  var table = document.getElementById("myTable");
  var tr = table.getElementsByTagName("tr");

  
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0]  ;
    
    if (td) {
      var txtValue = td.textContent || td.innerText || td1.textContent || td1.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
searchTable();


//function for searching by city 
function searchCity(){
    
    var input = document.getElementById("searchTable1").value;
    var filter = input.toUpperCase();
    var table = document.getElementById("myTable");
    var tr = table.getElementsByTagName("tr");

    //search for city

    for (var j= 0; j < tr.length; j++) {
        let td1 = tr[j].getElementsByTagName("td")[2];
        if (td1) {
            txtValue = td1.textContent || td1.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[j].style.display = "";
            } else {
              tr[j].style.display = "none";
            }
        }
    }
}
searchCity();

//delete all records ony by one

function deleteRow(){
  
  for(var d = document.getElementById("myTable").rows.length-1; d>0; d-- ){
    return document.getElementById("myTable").deleteRow(d);
 }
}

deleteRow();
