package com.pg.ems.repository;

import com.pg.ems.domain.Authorities;
import com.pg.ems.domain.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * @author Weiduo
 * @date 6/3/23 - 2:18 AM
 */
public interface UserRepository extends CrudRepository<User, Long> {
    @Query(
            value = "select * from emsdb.user where username = :username",
            nativeQuery = true
    )
    User findUserByUsername(@Param(value = "username") String username);
}
