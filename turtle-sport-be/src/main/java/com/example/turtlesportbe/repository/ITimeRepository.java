package com.example.turtlesportbe.repository;

import com.example.turtlesportbe.model.Time;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ITimeRepository extends JpaRepository<Time,Integer> {

    @Query(value = "select * from times t where t.yard_id =:id ;",nativeQuery = true)
    List<Time> getAllTime(@Param("id") Integer id);
}
