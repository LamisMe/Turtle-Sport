package com.example.turtlesportbe.controller;

import com.example.turtlesportbe.dto.YardDto;
import com.example.turtlesportbe.model.TypeYard;
import com.example.turtlesportbe.model.Yard;
import com.example.turtlesportbe.model.auth.Account;
import com.example.turtlesportbe.service.IAccountService;
import com.example.turtlesportbe.service.ICustomerService;
import com.example.turtlesportbe.service.ITypeYardService;
import com.example.turtlesportbe.service.IYardService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/yards")
public class YardRestController {
    @Autowired
    private IYardService yardService;
    @Autowired
    private ITypeYardService typeYardService;
    @Autowired
    private IAccountService accountService;
    @Autowired
    private ICustomerService customerService;

    @GetMapping("")
    public ResponseEntity<?> showYardPage(@RequestParam(defaultValue = "0", required = false) int page,
                                          @RequestParam(defaultValue = "", required = false) String nameSearch,
                                          @RequestParam(defaultValue = "", required = false) String addressSearch) {
        Pageable pageable = PageRequest.of(page, 10);
        Page<Yard> yardPage = yardService.showYardList(pageable, nameSearch, addressSearch);
        if (yardPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(yardPage, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> createYard(@RequestBody YardDto yardDto, BindingResult bindingResult) {
        Yard yard = new Yard();
        BeanUtils.copyProperties(yardDto, yard);
        Account account = accountService.findAccountByUsername(yardDto.getCustomer());
        yard.setCustomer(customerService.findCustomersByAccount_Id(account.getId()));
        yard.setTypeYard(typeYardService.findById(yardDto.getTypeYard()));
        boolean isSuccess = yardService.createYard(yard);
        if (!isSuccess) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(yard, HttpStatus.CREATED);
    }


    @GetMapping("/type_yard")
    public ResponseEntity<?> showTypeYard() {
        List<TypeYard> typeYardList = typeYardService.showListTypeYard();
        if (typeYardList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(typeYardList,HttpStatus.OK);
    }
}
