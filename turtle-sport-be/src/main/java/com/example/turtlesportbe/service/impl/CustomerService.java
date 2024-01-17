package com.example.turtlesportbe.service.impl;

import com.example.turtlesportbe.model.Customer;
import com.example.turtlesportbe.repository.ICustomerRepository;
import com.example.turtlesportbe.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService implements ICustomerService {
    @Autowired
    private ICustomerRepository customerRepository;
    @Override
    public Customer findCustomersByAccount_Id(Integer id) {
        return customerRepository.findCustomersByAccount_Id(id);
    }
}
