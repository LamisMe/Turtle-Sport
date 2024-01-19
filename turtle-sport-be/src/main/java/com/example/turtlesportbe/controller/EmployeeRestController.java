package com.example.turtlesportbe.controller;

import com.example.turtlesportbe.dto.EmployeeDto;
import com.example.turtlesportbe.model.*;
import com.example.turtlesportbe.model.auth.Account;
import com.example.turtlesportbe.service.*;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RequestMapping("/api/employee")
@RestController
public class EmployeeRestController {
    @Autowired
    private IEmployeeService employeeService;
    @Autowired
    private ITypeEmployeeService typeEmployeeService;
    @Autowired
    private IAccountService accountService;
    @Autowired
    private ICustomerService customerService;
    @Autowired
    private IAppRoleService appRoleService;
    @GetMapping("/type_employee")
    public ResponseEntity<?> showTypeYard() {
        List<TypeEmployee> typeEmployees = typeEmployeeService.getAllTypeEmployee();
        if (typeEmployees.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(typeEmployees,HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<?> createEmployee(@RequestBody EmployeeDto employeeDto) {
        Employee employee = new Employee();
        Account account = new Account();
        BeanUtils.copyProperties(account, employeeDto);
        account.setUsername(employeeDto.getPhoneNumber()+"@turtle.com");
        String plainPassword = employeeDto.getPass();
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String encodedPassword = encoder.encode(plainPassword);
        account.setPassword(encodedPassword);
        accountService.saveAccount(account);
        appRoleService.saveAppRole(account.getId());
        BeanUtils.copyProperties(employeeDto,employee);
        employee.setAccount(account);
        Account account1 = accountService.findAccountByUsername(employeeDto.getCustomer());
        Customer customer = customerService.findCustomersByAccount_Id(account1.getId());
        employee.setCustomer(customer);
        employee.setTypeEmployee(typeEmployeeService.findById(employeeDto.getTypeEmployee()));
        employeeService.saveEmployee(employee);
        return new ResponseEntity<>(employee,HttpStatus.CREATED);
    }
}
