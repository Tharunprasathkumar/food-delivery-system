GET:
	$(document).ready(
		function(){
			ajaxGet();
			$("#updateData").hide();
			function ajaxGet() {
				$.ajax({
					type: "GET",
					url : "getHotels",
					success : function(result) {
						if(result.status == "success") {
							$.each(result.data, function(i, hotel){
								var myTable = $('#hotelList').get(0).tBodies[0];
								$(".hotelList tbody").append("<tr><td class='id'>"+hotel.hotelId+"</td><td class='name'>"+hotel.hotelName+"</td><td class='address'>"+hotel.hotelAddress+"</td><td class='rating'>"+hotel.rating+"</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");
							    
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
			
//			$("body").on("click", ".btn-delete", function(){
//		        $(this).parents("tr").remove();
//		    });
			
//			$("body").on("click", ".btn-edit", function(){
//			       var row = $(this).closest("tr");
//			       var formData = {
//			    		   hotelId : row.find('.id').text(),
//			    		   hotelName : row.find('.name').text(),
//							hotelAddress : row.find('.address').text(),
//							rating : row.find('.rating').text(),
//					}
//			       $('#hotelForm').get(0).style.display = "block"
//			       $("#updateData").show();
//			       $("#addData").hide();
//			       $.ajax({
//			    	   type: "PUT",
//						contentType : "application/json",
//						url : "updateHotel",
//						data : JSON.stringify(formData),
//						dataType :'json',
//						success : function(result) {
//							$("#hotelId").val(formData.hotelId),
//							$("#hotelName").val(formData.hotelName),
//							$("#hotelAddress").val(formData.hotelAddress),
//							$("#rating").val(formData.rating)
//						}
//			       })
//			    });
})