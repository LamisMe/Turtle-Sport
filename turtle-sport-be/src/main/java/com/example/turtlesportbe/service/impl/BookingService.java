package com.example.turtlesportbe.service.impl;

import com.example.turtlesportbe.dto.BookingDto;
import com.example.turtlesportbe.dto.FollowDto;
import com.example.turtlesportbe.model.Booking;
import com.example.turtlesportbe.repository.IBookingRepository;
import com.example.turtlesportbe.service.IBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class BookingService implements IBookingService {
    @Autowired
    private IBookingRepository bookingRepository;
    @Override
    public List<FollowDto> getFollow(Integer accountId,Integer limit) {
        return bookingRepository.getFollow(accountId, limit);
    }

    @Override
    public void addFollow(Integer account, Integer yard) {
        bookingRepository.addFollow(account, yard);
    }

    @Override
    public void addBooking(String time,String description, Integer customer, Integer yard,String phone,String name) {
        bookingRepository.addBooking( time,description, customer, yard,phone,name);
    }

    @Override
    public List<BookingDto> getAllOrder(Integer userId) {
        return bookingRepository.getAllOrder(userId);
    }

    @Override
    public List<Booking> getOrderLimit5() {
        return bookingRepository.getOrderLimit5();
    }

    @Override
    public List<BookingDto> isDateDuplicate(Integer id) {
        return bookingRepository.isDateDuplicate(id);
    }

    @Override
    public Booking finById(Integer id) {
        return bookingRepository.findById(id).get();
    }

    @Override
    public void updateBooking(Booking booking) {
        bookingRepository.save(booking);
    }
}
