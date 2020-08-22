package com.example.FoodDeliverySystem.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class HotelDishes {
  private String dishName;
  private int dishPrice;
  private int rating;

  public String getDishName() {
	return dishName;
}
public void setDishName(String dishName) {
	this.dishName = dishName;
}
public int getDishPrice() {
	return dishPrice;
}
public HotelDishes(String dishName, int dishPrice, int rating) {
	super();
	this.dishName = dishName;
	this.dishPrice = dishPrice;
	this.rating = rating;
}
public void setDishPrice(int dishPrice) {
	this.dishPrice = dishPrice;
}
public int getRating() {
	return rating;
}
public void setRating(int rating) {
	this.rating = rating;
}
  
}
