package com.example.turtlesportbe.service.impl;

import com.example.turtlesportbe.model.TypeEmployee;
import com.example.turtlesportbe.repository.ITypeEmployeeRepository;
import com.example.turtlesportbe.service.ITypeEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TypeEmployeeService implements ITypeEmployeeService {
    @Autowired
    private ITypeEmployeeRepository typeEmployeeRepository;
    @Override
    public List<TypeEmployee> getAllTypeEmployee() {
        return typeEmployeeRepository.findAll();
    }

    @Override
    public TypeEmployee findById(Integer id) {
        return typeEmployeeRepository.findById(id).get();
    }
}
