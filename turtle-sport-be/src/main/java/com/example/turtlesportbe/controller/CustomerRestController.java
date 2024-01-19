package com.example.turtlesportbe.controller;

import com.example.turtlesportbe.dto.ICustomer;
import com.example.turtlesportbe.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RequestMapping("/api/customers")
@RestController
public class CustomerRestController {
    @Autowired
    private ICustomerService customerService;
    @GetMapping("/total")
    public ResponseEntity<?> getTotalYardByCustomer(@RequestParam(name = "name",defaultValue = "",required = false) String name){
        ICustomer iCustomer = customerService.getTotalYardByCustomer(name);
        if (iCustomer== null){
            return new  ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new  ResponseEntity<>(iCustomer ,HttpStatus.OK);

    }@GetMapping("/yards")
    public ResponseEntity<?> getYardsByCustomer(@RequestParam(name = "name",defaultValue = "",required = false) String name){
        List<ICustomer> iCustomer = customerService.getAllYardCustomer(name);
        if (iCustomer== null){
            return new  ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(iCustomer ,HttpStatus.OK);

    }
}
