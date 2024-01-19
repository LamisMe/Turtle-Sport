package com.example.turtlesportbe.service;

import com.example.turtlesportbe.model.TypeEmployee;

import java.util.List;

public interface ITypeEmployeeService {
    List<TypeEmployee> getAllTypeEmployee();
    TypeEmployee findById(Integer id);
}
