package com.example.FoodDeliverySystem.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.example.FoodDeliverySystem.constant.HotelConstants;
import com.example.FoodDeliverySystem.dto.Hotel;
import com.example.FoodDeliverySystem.dto.HotelDishes;
import com.example.FoodDeliverySystem.dto.ServiceResponse;

@Controller
public class HotelController {
 
	@PostMapping("/addHotel")
	@ResponseBody
	public ResponseEntity<Object> addHotel(@RequestBody Hotel hotel){
		hotel.setHotelId(HotelConstants.hotelList.size()+1);
		HotelConstants.hotelList.add(hotel);
		ServiceResponse<Hotel> response = new ServiceResponse<>("success", hotel);
		return new ResponseEntity<Object>(response,HttpStatus.OK);
		
	}
	
	@GetMapping("/getHotels")
	@ResponseBody
	public ResponseEntity<Object> getAllHotels(){
		ServiceResponse<List<Hotel>> response = new ServiceResponse<>("success", HotelConstants.hotelList);
		return new ResponseEntity<Object>(response,HttpStatus.OK);
	}
	
	@GetMapping("/getDishes")
	@ResponseBody
	public ResponseEntity<Object> getAllDishes(){
		ServiceResponse<List<HotelDishes>> response = new ServiceResponse<>("success", HotelConstants.hotelDishList);
		return new ResponseEntity<Object>(response,HttpStatus.OK);
	}
	
	@GetMapping("/getSelectedHotel")
	public String doget(Model model,HttpServletRequest request, HttpServletResponse response)   throws ServletException, IOException {
		String id = request.getParameter("data");
		int size =  HotelConstants.selectedHotel.size() == 0 ? 0 : HotelConstants.selectedHotel.size()-1;
		HotelConstants.selectedHotel.add(id);
        System.out.println(id);
        model.addAttribute("result", HotelConstants.selectedHotel.get(size));
		return "dishes";
	}
	
	@PutMapping("/updateHotel")
	@ResponseBody
	public ResponseEntity<Object> updateHotel(@RequestBody Hotel hotel){
		ServiceResponse<Object> response = new ServiceResponse<>("success", hotel);
		return new ResponseEntity<Object>(response,HttpStatus.OK);
	}
}
