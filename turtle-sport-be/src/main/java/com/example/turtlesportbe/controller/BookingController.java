package com.example.turtlesportbe.controller;

import com.example.turtlesportbe.dto.BookingDto;
import com.example.turtlesportbe.dto.FollowDto;
import com.example.turtlesportbe.dto.OrderDto;
import com.example.turtlesportbe.model.Booking;
import com.example.turtlesportbe.model.Time;
import com.example.turtlesportbe.service.IBookingService;
import com.example.turtlesportbe.service.ITimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RequestMapping("/api/booking")
@RestController
public class BookingController {
    @Autowired
    private IBookingService bookingService;
    @Autowired
    private ITimeService timeService;

    @GetMapping("/follow/{accountId}")
    public ResponseEntity<?> getFollow(@PathVariable Integer accountId, @RequestParam(name = "limit", defaultValue = "2", required = false) Integer limit) {
        List<FollowDto> followDtoList = bookingService.getFollow(accountId, limit);
        if (followDtoList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(followDtoList, HttpStatus.OK);
    }

    @GetMapping("/history/{accountId}")
    public ResponseEntity<?> getHistory(@PathVariable Integer accountId) {
        List<BookingDto> bookingDtos = bookingService.getAllOrder(accountId);
        if (bookingDtos.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(bookingDtos, HttpStatus.OK);
    }

    @GetMapping("/time/{id}")
    public ResponseEntity<?> getTime(@PathVariable Integer id) {
        List<Time> times = timeService.getAllTime(id);
        if (times.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(times, HttpStatus.OK);
    }

    @GetMapping("/top")
    public ResponseEntity<?> getOrderLimit5() {
        List<Booking> bookingList = bookingService.getOrderLimit5();
        if (bookingList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(bookingList, HttpStatus.OK);
    }

    @PostMapping("/follow/{accountId}/add/{yardId}")
    public ResponseEntity<?> addProductToCart(@PathVariable Integer accountId, @PathVariable Integer yardId) {
        bookingService.addFollow(accountId, yardId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/add/{customer}/{yard}")
    public ResponseEntity<?> addProduct(@RequestBody OrderDto orderDto,
                                        @PathVariable Integer customer, @PathVariable Integer yard) {
        if (orderDto == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        bookingService.addBooking(orderDto.getDateBooking(), orderDto.getDescription(), customer, yard, orderDto.getPhoneNumber(), orderDto.getNameBooking());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/payment/{booking}")
    public ResponseEntity<?> getBooking(@PathVariable Integer booking) {
        List<BookingDto> bookingDtoList = bookingService.isDateDuplicate(booking);
        return new ResponseEntity<>(bookingDtoList, HttpStatus.OK);
    }
    @PatchMapping("/payment/{id}")
    public ResponseEntity<?> updateBooking(@PathVariable Integer id) {
        Booking booking  = bookingService.finById(id);
        if (booking == null){
            return  new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        booking.setPayment(true);
        bookingService.updateBooking(booking);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
