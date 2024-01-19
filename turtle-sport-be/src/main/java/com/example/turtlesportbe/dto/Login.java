package com.example.turtlesportbe.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

public class Login implements Validator  {

    @NotBlank(message = "Trường username không được để trống.")
    @NotNull(message = "Trường username không được null")
    @Pattern(regexp = "^[a-zA-Z0-9_@.]+$",message = "Chỉ được chứa ký tự alphabet, số và dấu gạch dưới")
    @Size(min = 4,message = "Username phải trên 4 kí tự")
    @Size(max = 100,message = "Username phải ít hơn 100 ký tự")
    private String username;

    @NotBlank(message = "Trường password không được để trống.")
    @NotNull(message = "Trường password không được null")
    @Size(min = 8,message = "Mật khẩu phải trên 8 kí tự")
    @Size(max = 100,message = "Mật khẩu phải ít hơn 100 ký tự")
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {

    }
}
