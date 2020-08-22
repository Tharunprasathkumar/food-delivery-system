$(document).ready(function() {

	$('#hotelList tbody').on('click', '.name', function() {
		var data = $(this).text();
		passData(data);
	});
	
	function passData(data) {
			$.ajax({
				type: "GET",
				url : "getSelectedHotel",
				data : {"data": data},
				success : function(result) {
					window.location.href = 'getSelectedHotel';
				}
			});
	}
	
	$("body").on("click", ".btn-delete", function(){
        $(this).parents("tr").remove();
    });
	
	$("body").on("click", ".btn-edit", function(){
	       var row = $(this).closest("tr");
	       var formData = {
	    		   hotelId : row.find('.id').text(),
	    		   hotelName : row.find('.name').text(),
					hotelAddress : row.find('.address').text(),
					rating : row.find('.rating').text(),
			}
	       $('#hotelForm').get(0).style.display = "block"
	       $("#updateData").show();
	       $("#addData").hide();
	       $.ajax({
	    	   type: "PUT",
				contentType : "application/json",
				url : "updateHotel",
				data : JSON.stringify(formData),
				dataType :'json',
				success : function(result) {
					$("#hotelId").val(formData.hotelId),
					$("#hotelName").val(formData.hotelName),
					$("#hotelAddress").val(formData.hotelAddress),
					$("#rating").val(formData.rating)
				}
	       })
	    });
	
	$("#searchHotels").click(function(event) {
		event.preventDefault();
		
		 var input, filter, table, tr1,tr2,tr3, td, i, txtValue;
		  input = $("#myInput").val();
		  filter = input.toUpperCase();
		  table = $('#hotelList').get(0).tBodies[0];
		  tr = table.rows;
		  for (i = 0; i < tr.length; i++) {
		    td1 = tr[i].getElementsByTagName("td")[1];
		    td2 = tr[i].getElementsByTagName("td")[2];
		    td3 = tr[i].getElementsByTagName("td")[3];
		    if (td1 || td2 ||td3) {
		      txtValue1 = td1.textContent || td1.innerText;
		      txtValue2 = td2.textContent || td2.innerText;
		      txtValue3 = td3.textContent || td3.innerText;
		      if ((txtValue1.toUpperCase().indexOf(filter) > -1) || (txtValue2.toUpperCase().indexOf(filter) > -1) || 
		    		  (txtValue3.toUpperCase().indexOf(filter) > -1)) {
		        tr[i].style.display = "";
		      } else {
		        tr[i].style.display = "none";
		      }
		    }       
		  }
	});
	
});