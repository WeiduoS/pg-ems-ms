package com.pg.ems.controller;

import com.pg.ems.domain.AttendanceRecord;
import com.pg.ems.domain.Project;
import com.pg.ems.repository.AttendanceRecordRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Weiduo
 * @date 6/3/23 - 2:37 AM
 */
@Controller
@RequestMapping(path="/attendance_record")
@CrossOrigin
@Tag(name = "Attendance Record", description = "attendance record API")
@EnableMethodSecurity
public class AttendanceRecordController {

    @Autowired
    private AttendanceRecordRepository attendanceRecordRepository;

    @Operation(summary = "Get All Attendance Records Information", description = "Extract all attendance records from EMSDB database", tags = "Attendance Record")
    @GetMapping(path="/all")
    @ResponseBody
    public Iterable<AttendanceRecord> getAllAttendanceRecords() {
        return attendanceRecordRepository.findAll();
    }

    @Operation(summary = "Get Attendance Records by Employee ID", description = "Extract all attendance records with employee id from EMSDB database", tags = "Attendance Record")
    @GetMapping(path="/employee")
    @ResponseBody
    @PreAuthorize("hasAnyAuthority('user','manager', 'hr', 'hrmanager')")
    public List<AttendanceRecord> getAllAttendanceRecords(@RequestParam(name = "employee_id") Long employeeId) {
        return attendanceRecordRepository.findAttendanceByEmployeeId(employeeId);
    }

    @Operation(summary = "Add / Update an Attendance Record Request", description = "Add a attendance record into EMSDB database", tags = "Attendance Record")
    @PostMapping(path={"/add", "/update"})
    @ResponseBody
    @PreAuthorize("hasAnyAuthority('user','manager', 'hr', 'hrmanager')")
    public AttendanceRecord addAttendanceRecord(@RequestBody AttendanceRecord attendanceRecord) {
        return attendanceRecordRepository.save(attendanceRecord);
    }

    @Operation(summary = "Delete an Attendance Record Request", description = "Delete an attendance record from EMSDB database", tags = "Attendance Record")
    @PostMapping(path={"/delete"})
    @ResponseBody
    @PreAuthorize("hasAnyAuthority('user','manager', 'hr', 'hrmanager')")
    public void deleteAttendanceRecord(@RequestBody AttendanceRecord attendanceRecord) {
        attendanceRecordRepository.delete(attendanceRecord);
    }

}
