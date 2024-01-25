package com.example.turtlesportbe.repository;

import com.example.turtlesportbe.model.Follow;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;
import java.util.Set;

public interface IFollowRepository extends JpaRepository<Follow,Integer>
{
    @Query(value = "select f from follows f where f.account.id = :account",nativeQuery = true)
    Set<Optional<Follow>> findListFollowByUserId(@Param("account") Integer account);

    @Query(value = "select f from follows f where f.account.id = :account and f.id = :followId",nativeQuery = true)
    Optional<Follow> findFollowByAccountIdAndFollowId(@Param("account") Integer account, @Param("followId") Integer cartId);

    @Query(value = "select f from follows f where f.account.id = :account and f.yard.id = :yardId",nativeQuery = true)
    Optional<Follow> findFollowByAccountIdAndYardId(@Param("account") Integer account, @Param("yardId") Integer yardId);
}
