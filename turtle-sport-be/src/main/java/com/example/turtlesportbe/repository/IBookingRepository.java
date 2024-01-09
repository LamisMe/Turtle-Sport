package com.example.turtlesportbe.repository;

import com.example.turtlesportbe.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IBookingRepository extends JpaRepository<Booking,Integer> {
}
