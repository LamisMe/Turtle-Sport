package com.example.turtlesportbe.service;

import com.example.turtlesportbe.model.Yard;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IYardService {
    Page<Yard> showYardList(Pageable pageable,String nameSearch,String addressSearch);
}
