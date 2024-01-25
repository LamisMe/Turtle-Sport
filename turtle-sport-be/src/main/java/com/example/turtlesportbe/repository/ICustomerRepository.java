package com.example.turtlesportbe.repository;

import com.example.turtlesportbe.dto.ICustomer;
import com.example.turtlesportbe.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ICustomerRepository extends JpaRepository<Customer,Integer> {
    Customer findCustomersByAccount_Id(Integer id);
    @Query(value = "select count(y.id) as `total`,y.name as `name`,a.username as `username`\n" +
            "from customers c\n" +
            "left join yards y on c.id = y.customer_id\n" +
            "join accounts a on a.id = c.account_id\n" +
            "group by c.id\n" +
            "having a.username = :name ",nativeQuery = true)
    ICustomer getTotalYardByCustomer(@Param("name") String name);


    @Query(value = "select a.username as `username`,y.name as `name`, y.id as `id`\n" +
            "from customers c\n" +
            "left join yards y on c.id = y.customer_id\n" +
            "join accounts a on a.id = c.account_id\n" +
            "group by y.id\n" +
            "having a.username =:name ",nativeQuery = true)
    List<ICustomer> getAllYardCustomer(@Param("name") String name);

    Customer findCustomerByAccount_Username(String username);
}
