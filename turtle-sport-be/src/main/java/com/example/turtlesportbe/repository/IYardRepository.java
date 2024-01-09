package com.example.turtlesportbe.repository;

import com.example.turtlesportbe.model.Yard;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IYardRepository extends JpaRepository<Yard,Integer> {
}
