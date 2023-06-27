package com.pg.ems.controller;

import com.pg.ems.domain.AbsentRequest;
import com.pg.ems.domain.AttendanceRecord;
import com.pg.ems.repository.AttendanceRecordRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 * @author Weiduo
 * @date 6/3/23 - 2:37 AM
 */
@Controller
@RequestMapping(path="/attendance_record")
@CrossOrigin
@Tag(name = "Attendance Record", description = "attendance record API")
public class AttendanceRecordController {

    @Autowired
    private AttendanceRecordRepository attendanceRecordRepository;

    @Operation(summary = "Get All Attendance Records Information", description = "Extract all attendance records from EMSDB database", tags = "Attendance Record")
    @GetMapping(path="/all")
    public @ResponseBody
    Iterable<AttendanceRecord> getAllAttendanceRecords() {
        return attendanceRecordRepository.findAll();
    }

    @Operation(summary = "Add / Update an Attendance Record Request", description = "Add a attendance record into EMSDB database", tags = "Attendance Record")
    @PostMapping(path={"/add", "/update"})
    public @ResponseBody
    AttendanceRecord addAttendanceRecord(@RequestBody AttendanceRecord attendanceRecord) {
        return attendanceRecordRepository.save(attendanceRecord);
    }

    @Operation(summary = "Delete an Attendance Record Request", description = "Delete an attendance record from EMSDB database", tags = "Attendance Record")
    @PostMapping(path={"/delete"})
    public @ResponseBody
    void deleteAttendanceRecord(@RequestBody AttendanceRecord attendanceRecord) {
        attendanceRecordRepository.delete(attendanceRecord);
    }

}
