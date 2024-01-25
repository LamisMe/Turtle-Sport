package com.example.turtlesportbe.repository;

import com.example.turtlesportbe.dto.BookingDto;
import com.example.turtlesportbe.dto.FollowDto;
import com.example.turtlesportbe.model.Booking;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IBookingRepository extends JpaRepository<Booking,Integer> {
    @Query(value = "select f.yard_id as yardId, yards.image as image,yards.name as name,yards.description as description,f.account_id as accountId ,yards.price,f.id as followId\n" +
            "            from `follows` f join yards on f.yard_id = yards.id\n" +
            "            where f.account_id = :account\n" +
            "            group by yards.id\n" +
            "            limit :limit ", nativeQuery = true)
    List<FollowDto> getFollow(@Param("account") Integer accountId,@Param("limit") Integer limit);

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO `follows` (account_id, yard_id) VALUES (:account,:yard)",nativeQuery = true)
    void addFollow(@Param("account") Integer account,@Param("yard") Integer yard);

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO `bookings` (`date_booking`, `description`, `customer_id`,`yard_id`,`phone_number`,`name_booking`) \n" +
            "VALUES ( :time, :description,:customer_id,:yard_id,:phone_number,:name_booking);",nativeQuery = true)
    void addBooking(@Param("time") String time,@Param("description") String description,@Param("customer_id") Integer customer_id,@Param("yard_id") Integer yard_id,@Param("phone_number") String phoneNumber,@Param("name_booking")String name_booking);

    @Query(value = "select b.id,b.phone_number as phoneNumber, b.customer_id as userId, b.date_booking as bookingDate,y.name as name,b.payment as payment\n" +
            "from bookings b join yards y on y.id = b.yard_id  where b.customer_id = :customer order by b.date_booking DESC", nativeQuery = true)
    List<BookingDto> getAllOrder(Integer customer);

    @Query(value = "select * \n" +
            "from bookings b\n" +
            "group by b.yard_id\n" +
            "order by count(b.yard_id) desc\n" +
            "limit 5;", nativeQuery = true)
    List<Booking> getOrderLimit5();

    @Query(value = "select b.date_booking as bookingDate\n" +
            "from bookings b\n" +
            "join yards y on y.id = b.yard_id\n" +
            "where y.id = :id ;", nativeQuery = true)
    List<BookingDto> isDateDuplicate(@Param("id") Integer id);


}
