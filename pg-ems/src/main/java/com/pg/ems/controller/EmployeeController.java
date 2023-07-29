package com.pg.ems.controller;

import com.pg.ems.domain.EmployeeProfile;
import com.pg.ems.repository.EmployeeProfileRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

/**
 * @author Weiduo
 * @date 6/3/23 - 2:37 AM
 */
@Controller
@RequestMapping(path="/employee")
@CrossOrigin
@Tag(name = "Employee Profile", description = "employee information API")
@EnableMethodSecurity
public class EmployeeController {

    @Autowired
    private EmployeeProfileRepository employeeProfileRepository;

    @Operation(summary = "Get All Employees' Information", description = "Extract employees' data from EMSDB database", tags = "Employee Profile")
    @GetMapping(path="/all")
    @ResponseBody
    @PreAuthorize("hasAnyAuthority('manager', 'hr', 'hrmanager')")
    public Iterable<EmployeeProfile> getAllUsers() {
        return employeeProfileRepository.findAll();
    }

    @Operation(summary = "Get One Employee's Information", description = "Extract an employee data from EMSDB database", tags = "Employee Profile")
    @GetMapping(path="/{id}")
    @ResponseBody
    @PreAuthorize("hasAnyAuthority('user','manager', 'hr', 'hrmanager')")
    public Optional<EmployeeProfile> getUserById(@PathVariable("id") Long id) {
        return employeeProfileRepository.findById(id);
    }

    @Operation(summary = "Add / Update an Employee Profile", description = "Add / Update an employee profile into EMSDB database", tags = "Employee Profile")
    @PostMapping(path={"/add", "/update"})
    @ResponseBody
    @PreAuthorize("hasAnyAuthority('user','manager', 'hr', 'hrmanager')")
    public EmployeeProfile addEmployeeProfile(@RequestBody EmployeeProfile employeeProfile) {
        return employeeProfileRepository.save(employeeProfile);
    }

    @Operation(summary = "Delete an Employee's Absent Request", description = "Delete a absent request from EMSDB database", tags = "Employee Profile")
    @PostMapping(path={"/delete"})
    @ResponseBody
    @PreAuthorize("hasAnyAuthority('manager')")
    public void deleteEmployeeProfile(@RequestBody EmployeeProfile employeeProfile) {
        employeeProfileRepository.delete(employeeProfile);
    }
}
