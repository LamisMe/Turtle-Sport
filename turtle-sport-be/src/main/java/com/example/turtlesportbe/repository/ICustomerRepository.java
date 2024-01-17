package com.example.turtlesportbe.repository;

import com.example.turtlesportbe.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICustomerRepository extends JpaRepository<Customer,Integer> {
    Customer findCustomersByAccount_Id(Integer id);
}
