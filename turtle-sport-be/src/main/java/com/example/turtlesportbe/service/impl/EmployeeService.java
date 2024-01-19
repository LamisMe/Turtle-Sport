package com.example.turtlesportbe.service.impl;

import com.example.turtlesportbe.model.Employee;
import com.example.turtlesportbe.repository.IEmployeeRepository;
import com.example.turtlesportbe.service.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService implements IEmployeeService {
    @Autowired
    private IEmployeeRepository employeeRepository;

    @Override
    public void saveEmployee(Employee employee) {
        employeeRepository.save(employee);
    }
}
