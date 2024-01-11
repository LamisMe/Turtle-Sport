package com.example.turtlesportbe.repository;

import com.example.turtlesportbe.model.Yard;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IYardRepository extends JpaRepository<Yard,Integer> {
    @Query(value = "select y.id,y.`name`,y.address,y.`description`,y.end_time,y.price,y.start_time,y.image,y.customer_id,y.is_deleted\n" +
            "from yards y\n" +
            "where y.is_deleted = 0 and y.name like :nameSearch and y.address like :addressSearch ",nativeQuery = true)
    Page<Yard> showYardList(Pageable pageable,
                            @Param("nameSearch") String nameSearch,
                            @Param("addressSearch") String addressSearch);
}
