var rIndex,
              table=document.getElementById("table");
		        var stagiares=[{"Nom":"Rhnizar","Prenom":"Rida","Age":20,"Marié":false},
                               {"Nom":"Rhnizar","Prenom":"Amire","Age":2,"Marié":false},
                               {"Nom":"kali","Prenom":"linux","Age":70,"Marié":true},
                              ]
 function Afficher()
 {
        for(var j=0;j<stagiares.length;j++)
    {
        document.getElementsByTagName('table')[0].insertAdjacentHTML("beforeend","<tr><td>"+stagiares[j].Nom+"</td><td>"+stagiares[j].Prenom+"</td><td>"+stagiares[j].Age+"</td><td>"+stagiares[j].Marié+"</td></tr>")
    }
        select();
 }
 function Ajouter()
  {
     var newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    cell3 = newRow.insertCell(2),
    cell4 = newRow.insertCell(3),
    Nom = document.getElementById('nom').value,
    Prenom = document.getElementById('prenom').value,
    Age = document.getElementById('age').value,
    Marié = document.getElementById('marie').value;
    cell1.innerHTML = Nom;
    cell2.innerHTML = Prenom;
    cell3.innerHTML = Age;
    cell4.innerHTML = Marié;
          
     }
function select ()
{
    for(var i =0; i < table.rows.length; i++)
    {
       
        table.rows[i].onclick = function()
        {    
		    rIndex = this.rowIndex;
            document.getElementById("nom").value = this.cells[0].innerHTML;
            document.getElementById("prenom").value = this.cells[1].innerHTML;
            document.getElementById("age").value = this.cells[2].innerHTML;
            document.getElementById("marie").value = this.cells[3].innerHTML;
        };
    }
}
function modifier()
{
    
           var nom =  document.getElementById("nom").value,
               prenom =  document.getElementById("prenom").value,
               age = document.getElementById("age").value,
               marie = document.getElementById("marie").value;


                 table.rows[rIndex].cells[0].innerHTML = nom;
                 table.rows[rIndex].cells[1].innerHTML = prenom;
                 table.rows[rIndex].cells[2].innerHTML = age;
                 table.rows[rIndex].cells[3].innerHTML = marie;    
}
 function supprimer()
 {
     // clear element selectioner dans la table
      table.deleteRow(rIndex);
    //clear input text
      document.getElementById("nom").value = "";
      document.getElementById("prenom").value = "";
      document.getElementById("age").value = "";
      document.getElementById("marie").value = "";  
 }
 ///// styel de les proprieté
 function over()
 {
     window.nom.style.width="180px";
     window.nom.style.height="40px";
 }
 function out()
{
    window.nom.style.width="170px";
     window.nom.style.height="30px";
}
function over1()
{
    window.prenom.style.width="180px";
    window.prenom.style.height="40px";
}
function out1()
{
   window.prenom.style.width="170px";
    window.prenom.style.height="30px";
}
function over2()
{
    window.age.style.width="180px";
    window.age.style.height="40px";
}
function out2()
{
   window.age.style.width="170px";
    window.age.style.height="30px";
}
function over3()
{
    window.marie.style.width="180px";
    window.marie.style.height="40px";
}
function out3()
{
   window.marie.style.width="170px";
    window.marie.style.height="30px";
}