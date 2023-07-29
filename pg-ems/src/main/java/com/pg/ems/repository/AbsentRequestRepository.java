package com.pg.ems.repository;

import com.pg.ems.domain.AbsentRequest;
import com.pg.ems.domain.AttendanceRecord;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * @author Weiduo
 * @date 6/26/23 - 2:48 PM
 */
public interface AbsentRequestRepository extends CrudRepository<AbsentRequest, Long> {

    @Query(
            value = "select * from emsdb.absent_request where employee_id = :employee_id",
            nativeQuery = true
    )
    List<AbsentRequest> findAbsentRequestByEmployeeId(@Param(value = "employee_id") Long id);
    @Query(
            value = "select distinct a.absent_request_id, a.absent_requestcol, a.employee_id, a.date, a.leave_time from absent_request a\n" +
                    "join project p on a.employee_id = p.employee_id\n" +
                    "where p.manager_id = :manager_id",
            nativeQuery = true
    )
    List<AbsentRequest> findAbsentRequestByManagerId(@Param(value = "manager_id") Long id);

}
