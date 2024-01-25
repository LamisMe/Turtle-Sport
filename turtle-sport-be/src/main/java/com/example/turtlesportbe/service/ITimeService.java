package com.example.turtlesportbe.service;

import com.example.turtlesportbe.model.Time;

import java.util.List;

public interface ITimeService {
    List<Time> getALlTime();
    List<Time> getAllTime(Integer id);
}
