package com.example.turtlesportbe.service.impl;

import com.example.turtlesportbe.model.auth.Account;
import com.example.turtlesportbe.repository.IAccountRepository;
import com.example.turtlesportbe.service.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class AccountService implements IAccountService {
    @Autowired
    private IAccountRepository accountRepository;

    @Override
    public Optional<Account> findByUsername(String username) {
        return accountRepository.findByUsername(username);
    }

    @Override
    public Boolean existsByUsername(String username) {
        return accountRepository.existsByUsername(username);
    }

    @Override
    public void updatePassword(Account account) {
        accountRepository.updatePasswordAccount(account.getUsername(), account.getPassword());
    }

    @Override
    public Account getAccountByEmail(String email) {
        return accountRepository.getAccountByEmail(email);
    }
}
