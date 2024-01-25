package com.example.turtlesportbe.service;

import com.example.turtlesportbe.dto.BookingDto;
import com.example.turtlesportbe.dto.FollowDto;
import com.example.turtlesportbe.model.Booking;

import java.util.List;

public interface IBookingService {
    List<FollowDto> getFollow(Integer accountId,Integer limit);
    void addFollow(Integer account,Integer yard);
    void addBooking(String time,String description,Integer customer,Integer yard,String phone,String name);
    List<BookingDto> getAllOrder(Integer userId);
    List<Booking> getOrderLimit5();
    List<BookingDto> isDateDuplicate(Integer id);
    Booking finById(Integer id);
    void updateBooking(Booking booking);

}
