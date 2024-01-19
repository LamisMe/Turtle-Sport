package com.example.turtlesportbe.repository;

import com.example.turtlesportbe.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IEmployeeRepository extends JpaRepository<Employee,Integer> {
}
