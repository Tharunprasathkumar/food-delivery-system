GET:
	$(document).ready(
		function(){
			$('#selectedDiv').get(0).style.display = "none"
			ajaxGet();
			
			function ajaxGet() {
				$.ajax({
					type: "GET",
					url : "getDishes",
					success : function(result) {
						$("#dishesResultDiv").html("hjgh");
						if(result.status == "success") {
							$('#getResultDiv ul').empty();
							var custList = "";
							$.each(result.data, function(i, dish){
								var myTable = $('#dishesList').get(0).tBodies[0];
								var newRow = myTable.insertRow(i);
								cell1 = newRow.insertCell(0);
								cell1.innerHTML = dish.dishName;
								cell2 = newRow.insertCell(1);
								cell2.innerHTML = dish.dishPrice;
								cell3 = newRow.insertCell(2);
								cell3.innerHTML = dish.rating;
							});
							console.log("Success : ",result);
						}else {
							$("#getResultDiv").html("error");
							console.log("Fail :",result);
						}
					},
					error : function(e){
						alert("Error")
						console.log("ERROR:", e);
					}
				});
			}
			
			$('#dishesList tbody').on('click', 'tr', function() {
				var data = $(this).children("td").map(function(){
					return $(this).text();
				}).get();
				
				$('#selectedDiv').get(0).style.display = "block"
				getSeletedDish(data);
			});
			
			function getSeletedDish(data) {
					var myTable = $('#selectedDish').get(0).tBodies[0];
					var flag = true;
					
					 tr = myTable.rows;
					 if(tr.length == 0){
						 var newRow = myTable.insertRow(0);
							cell1 = newRow.insertCell(0);
							cell1.innerHTML = data[0];
							cell2 = newRow.insertCell(1);
							cell2.innerHTML = data[1];
					 }else{
					  for (i = 0; i < tr.length; i++) {
					    td1 = tr[i].getElementsByTagName("td")[0];
					    if (td1) {
					      txtValue1 = td1.textContent || td1.innerText;
					      if ((txtValue1.toUpperCase().indexOf(data[0]) > -1)){
					    	  flag = false;
					      }
					     
					    }
			}
					  if (flag) {
				    	  var newRow = myTable.insertRow(0);
							cell1 = newRow.insertCell(0);
							cell1.innerHTML = data[0];
							cell2 = newRow.insertCell(1);
							cell2.innerHTML = data[1];
				    }else {
				    	alert("Selected dish already added to cart");
				    }
					 }
			}
})