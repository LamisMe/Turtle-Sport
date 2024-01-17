package com.example.turtlesportbe.repository;

import com.example.turtlesportbe.model.auth.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface IAccountRepository extends JpaRepository<Account,Long> {

    @Query(value = "SELECT * FROM accounts as a WHERE a.username = :username", nativeQuery = true)
    Optional<Account> findByUsername(@Param("username") String username);

    @Query(value = "SELECT CASE WHEN COUNT(*) > 0 THEN TRUE ELSE FALSE END FROM accounts as a WHERE a.username = :username", nativeQuery = true)
    Boolean existsByUsername(@Param("username") String username);

    @Modifying
    @Transactional
    @Query(value = "UPDATE accounts SET password = :password WHERE username = :username", nativeQuery = true)
    void updatePasswordAccount(@Param("username") String username, @Param("password") String password);

    @Query(value = "SELECT accounts.* FROM accounts JOIN employees ON accounts.id = employees.account_id WHERE employees.email = :email", nativeQuery = true)
    Account getAccountByEmail(@Param("email") String email);

    Account findAccountByUsername(String user);
}
