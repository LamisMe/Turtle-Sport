package com.example.turtlesportbe.service.impl;

import com.example.turtlesportbe.model.Time;
import com.example.turtlesportbe.repository.ITimeRepository;
import com.example.turtlesportbe.service.ITimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TimeService implements ITimeService {

    @Autowired
    private ITimeRepository timeRepository;
    @Override
    public List<Time> getALlTime() {
        return timeRepository.findAll();
    }

    @Override
    public List<Time> getAllTime(Integer id) {
        return timeRepository.getAllTime(id);
    }
}
