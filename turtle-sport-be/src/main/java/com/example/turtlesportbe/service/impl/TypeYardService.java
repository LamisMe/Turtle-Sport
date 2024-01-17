package com.example.turtlesportbe.service.impl;

import com.example.turtlesportbe.model.TypeYard;
import com.example.turtlesportbe.repository.ITypeYardRepository;
import com.example.turtlesportbe.service.ITypeYardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TypeYardService implements ITypeYardService {
    @Autowired
    private ITypeYardRepository typeYardRepository;
    @Override
    public List<TypeYard> showListTypeYard() {
        return typeYardRepository.findAll();
    }
}
