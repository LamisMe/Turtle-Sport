package com.example.turtlesportbe.service.impl;

import com.example.turtlesportbe.dto.ICustomer;
import com.example.turtlesportbe.model.Customer;
import com.example.turtlesportbe.repository.ICustomerRepository;
import com.example.turtlesportbe.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService implements ICustomerService {
    @Autowired
    private ICustomerRepository customerRepository;
    @Override
    public Customer findCustomersByAccount_Id(Integer id) {
        return customerRepository.findCustomersByAccount_Id(id);
    }

    @Override
    public ICustomer getTotalYardByCustomer(String name) {
        return customerRepository.getTotalYardByCustomer(name);
    }

    @Override
    public List<ICustomer> getAllYardCustomer(String name) {
        return customerRepository.getAllYardCustomer(name);
    }
}
