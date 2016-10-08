function showMore(){
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var obj = JSON.parse(this.responseText);
                    console.log(obj);
                    var i = 0;
                    for (var j = document.getElementById("myTable").rows.length; j < obj.employees.length+1; j++) {
                            i++;
                            var table = document.getElementById("myTable");
                            var row = table.insertRow(j);
                            var cell1 = row.insertCell(0);
                            cell1.setAttribute("id", "nameCol");
                            var cell2 = row.insertCell(1);
                            cell2.setAttribute("id", "ageCol");
                            var cell3 = row.insertCell(2);
                            cell3.setAttribute("id", "emailCol");

                            cell1.innerHTML = obj.employees[j-1].name;
                            cell2.innerHTML = obj.employees[j-1].age;
                            cell3.innerHTML = obj.employees[j-1].email;
                            if (i==3) {
                                break;
                            }
                    }
                }
            }
            xhttp.open("POST", "createTable.json", true);
            xhttp.send();
}
