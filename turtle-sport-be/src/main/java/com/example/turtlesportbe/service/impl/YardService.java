package com.example.turtlesportbe.service.impl;

import com.example.turtlesportbe.model.Yard;
import com.example.turtlesportbe.repository.IYardRepository;
import com.example.turtlesportbe.service.IYardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class YardService implements IYardService {
    @Autowired
    private IYardRepository yardRepository;
    @Override
    public Page<Yard> showYardList(Pageable pageable, String nameSearch, String addressSearch) {
        return yardRepository.showYardList(pageable,"%"+nameSearch+"%","%"+addressSearch+"%");
    }

    @Override
    public boolean createYard(Yard yard) {
        try{
            yardRepository.save(yard);
            return true;
        }catch (Exception e){
            return false;
        }
    }
}
