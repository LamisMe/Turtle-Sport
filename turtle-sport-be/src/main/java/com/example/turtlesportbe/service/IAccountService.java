package com.example.turtlesportbe.service;

import com.example.turtlesportbe.model.auth.Account;

import java.util.Optional;

public interface IAccountService {
    Optional<Account> findByUsername(String username);

    Boolean existsByUsername(String username);

    void updatePassword(Account account);

    Account getAccountByEmail(String email);

    Account findAccountByUsername(String user);

}
