package com.example.turtlesportbe.repository;

import com.example.turtlesportbe.model.auth.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface IAppRoleRepository extends JpaRepository<Role,Integer> {
    @Modifying
    @Transactional
    @Query(value = "INSERT INTO account_roles (account_id, role_id)\n" +
            "VALUES (:account,4)", nativeQuery = true)
    void saveAccount(@Param("account") Integer account);
}
