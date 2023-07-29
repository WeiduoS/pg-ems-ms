package com.pg.ems.repository;

import com.pg.ems.domain.AttendanceRecord;
import com.pg.ems.domain.Authorities;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * @author Weiduo
 * @date 6/3/23 - 2:18 AM
 */
public interface AuthoritiesRepository extends CrudRepository<Authorities, Long> {
    @Query(
            value = "select a.id, a.user_id, a.authority from emsdb.authorities a\n" +
                    "join user u on a.user_id = u.id\n" +
                    "where u.employee_id = :employee_id",
            nativeQuery = true
    )
    List<Authorities> findAuthoritiesByEmployeeId(@Param(value = "employee_id") Long id);
}
