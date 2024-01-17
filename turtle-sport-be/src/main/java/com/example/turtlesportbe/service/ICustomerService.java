package com.example.turtlesportbe.service;

import com.example.turtlesportbe.model.Customer;

public interface ICustomerService {
    Customer findCustomersByAccount_Id(Integer id);
}
