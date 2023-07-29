package com.pg.ems.repository;

import com.pg.ems.domain.AttendanceRecord;
import com.pg.ems.domain.Project;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * @author Weiduo
 * @date 6/26/23 - 2:48 PM
 */
public interface AttendanceRecordRepository extends CrudRepository<AttendanceRecord, Long> {

    @Query(
            value = "select * from emsdb.attendance_record where employee_id = :employee_id",
            nativeQuery = true
    )
    List<AttendanceRecord> findAttendanceByEmployeeId(@Param(value = "employee_id") Long id);

}
