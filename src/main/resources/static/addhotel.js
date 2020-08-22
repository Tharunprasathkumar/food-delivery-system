$(document).ready(
		function(){
			$('#hotelForm').get(0).style.display = "none"
				
			$("#hotelForm").submit(function(event) {
				event.preventDefault();
				ajaxPost();
			});
			
			$("#updateData").click(function(event) {
				event.preventDefault();
				ajaxPut();
			});
			
			$("#addHotels").click(function(event) {
				$("#updateData").hide();
				$("#addData").show();
				event.preventDefault();
				$('#hotelForm').get(0).style.display = "block"
			});
				
			function ajaxPost() {
				var formData = {
						hotelName : $("#hotelName").val(),
						hotelAddress : $("#hotelAddress").val(),
						rating : $("#rating").val()
				}
				$.ajax({
					type: "POST",
					contentType : "application/json",
					url : "addHotel",
					data : JSON.stringify(formData),
					dataType :'json',
					success : function(result) {
						if(result.status == "success") {
							var hotel = result.data
							
							var myTable = $('#hotelList').get(0).tBodies[0];
							var newRow = myTable.insertRow(myTable.rows.length);
							$(".hotelList tbody").append("<tr><td class='id'>"+hotel.hotelId+"</td><td class='name'>"+hotel.hotelName+"</td><td class='address'>"+hotel.hotelAddress+"</td><td class='rating'>"+hotel.rating+"</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");
						    
						}else {
							$("#postResultDiv").html("error");
						}
						$('#hotelForm').get(0).style.display = "none",
						$("#hotelId").val(""),
						$("#hotelName").val(""),
						$("#hotelAddress").val(""),
						$("#rating").val("")
					},
					error : function(e){
						alert("Error")
						console.log("ERROR:", e);
					}
				});
			}
			
			function ajaxPut() {
				var formData = {
						hotelId : $("#hotelId").val(),
						hotelName : $("#hotelName").val(),
						hotelAddress : $("#hotelAddress").val(),
						rating : $("#rating").val()
				}
				$.ajax({
					type: "PUT",
					contentType : "application/json",
					url : "updateHotel",
					data : JSON.stringify(formData),
					dataType :'json',
					success : function(result) {
						if(result.status == "success") {
							var hotel = result.data
							
							var myTable = $('#hotelList').get(0).tBodies[0];
							updateRow = myTable.rows[hotel.hotelId-1]
							updateRow.cells[0].innerHTML = hotel.hotelId;
							updateRow.cells[1].innerHTML = hotel.hotelName;
							updateRow.cells[2].innerHTML = hotel.hotelAddress;
							updateRow.cells[3].innerHTML = hotel.rating;
						    
						}else {
							$("#postResultDiv").html("error");
						}
						console.log(result);
						$("#updateData").hide();
						$("#addData").show();
						$('#hotelForm').get(0).style.display = "none",
						$("#hotelId").val(""),
						$("#hotelName").val(""),
						$("#hotelAddress").val(""),
						$("#rating").val("")
					},
					error : function(e){
						alert("Error")
						console.log("ERROR:", e);
					}
				});
			}
})