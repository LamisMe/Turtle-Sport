package com.example.turtlesportbe.service;

import com.example.turtlesportbe.dto.ICustomer;
import com.example.turtlesportbe.model.Customer;

import java.util.List;

public interface ICustomerService {
    Customer findCustomersByAccount_Id(Integer id);
    ICustomer getTotalYardByCustomer(String name);
    List<ICustomer> getAllYardCustomer(String name);
    Customer findCustomerByAccount_Username(String username);
}
