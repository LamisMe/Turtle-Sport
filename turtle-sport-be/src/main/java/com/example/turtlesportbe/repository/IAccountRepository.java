package com.example.turtlesportbe.repository;

import com.example.turtlesportbe.model.auth.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface IAccountRepository extends JpaRepository<Account,Integer> {
    @Query(value = "SELECT * FROM accounts as a WHERE a.username = :username", nativeQuery = true)
    Optional<Account> findByUsername(@Param("username") String username);
}
