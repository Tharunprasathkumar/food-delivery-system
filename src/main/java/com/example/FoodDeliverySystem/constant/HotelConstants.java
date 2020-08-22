package com.example.FoodDeliverySystem.constant;

import java.util.ArrayList;

import com.example.FoodDeliverySystem.dto.Hotel;
import com.example.FoodDeliverySystem.dto.HotelDishes;

public class HotelConstants {
	
	public static ArrayList<Hotel> hotelList = new ArrayList<Hotel>(); 
	public static ArrayList<HotelDishes> hotelDishList = new ArrayList<HotelDishes>(); 
	public static ArrayList<String> selectedHotel = new ArrayList<String>(); 

    static {
    	hotelList.add(new Hotel(1, "Sangeetha Veg Restaurant", "Chennai", 4));
    	hotelList.add(new Hotel(2, "Murugans Idli Shop", "Chennai", 4));
    	hotelList.add(new Hotel(3, "Barbeque Nation", "Chennai", 3));
    	hotelList.add(new Hotel(4, "Shree Anandhaas", "Coimbatore", 5));
    	hotelList.add(new Hotel(5, "Shree Annapoorna", "Coimbatore", 4));
    	hotelList.add(new Hotel(6, "Pavilion", "Coimbatore", 3));
    	
    	hotelDishList.add(new HotelDishes("IDLY", 20,3));
    	hotelDishList.add(new HotelDishes("DOSA", 40,4));
    	hotelDishList.add(new HotelDishes("PORI", 30,5));
    	hotelDishList.add(new HotelDishes("MEALS", 70,4));
    	
    }
	
}
