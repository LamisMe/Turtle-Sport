package com.example.turtlesportbe.service;

import com.example.turtlesportbe.model.TypeYard;

import java.util.List;

public interface ITypeYardService {
    List<TypeYard> showListTypeYard();
    TypeYard findById(Integer id);
}
