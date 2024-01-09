package com.example.turtlesportbe.repository;

import com.example.turtlesportbe.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICartRepository extends JpaRepository<Cart,Integer> {
}
