package com.example.turtlesportbe.controller;

import com.example.turtlesportbe.model.Yard;
import com.example.turtlesportbe.service.IYardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/yards")
public class YardRestController {
    @Autowired
    private IYardService yardService;
    @GetMapping("")
    public ResponseEntity<?> showYardPage(@RequestParam(defaultValue = "0",required = false) int page,
                                          @RequestParam(defaultValue = "",required = false) String nameSearch,
                                          @RequestParam(defaultValue = "",required = false)String addressSearch){
        Pageable pageable = PageRequest.of(page,10);
        Page<Yard> yardPage = yardService.showYardList(pageable,nameSearch,addressSearch);
        if (yardPage.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(yardPage,HttpStatus.OK);
    }
}
