package com.example.turtlesportbe.service.impl;

import com.example.turtlesportbe.model.auth.Account;
import com.example.turtlesportbe.model.auth.MyUserDetail;
import com.example.turtlesportbe.repository.IAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailService implements UserDetailsService {
    @Autowired
    private IAccountRepository accountRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account account = accountRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("Username " + username + " không tồn tại"));
        return new MyUserDetail(account);
    }
}
