package com.pg.ems.controller;

import com.pg.ems.domain.AbsentRequest;
import com.pg.ems.repository.AbsentRequestRepository;
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
@RequestMapping(path="/absent_request")
@CrossOrigin
@Tag(name = "Absent Request", description = "Absent request API")
@EnableMethodSecurity
public class AbsentRequestController {

    @Autowired
    private AbsentRequestRepository absentRequestRepository;

    @Operation(summary = "Get All Absent Request Information", description = "Extract all absent request from EMSDB database", tags = "Absent Request")
    @GetMapping(path="/all")
    @ResponseBody
    @PreAuthorize("hasAnyAuthority('user','manager', 'hr', 'hrmanager')")
    public Iterable<AbsentRequest> getAllAbsentRequests() {
        return absentRequestRepository.findAll();
    }


    @Operation(summary = "Get Absent Request Information by Employee ID", description = "Extract absent request with employee id from EMSDB database", tags = "Absent Request")
    @GetMapping(path="/employee")
    @ResponseBody
    @PreAuthorize("hasAnyAuthority('user','manager', 'hr', 'hrmanager')")
    public List<AbsentRequest> getAbsentRequestsByEmployeeId(@RequestParam(name = "employee_id") Long employeeId) {
        return absentRequestRepository.findAbsentRequestByEmployeeId(employeeId);
    }

    @Operation(summary = "Get Absent Request Information by Manager ID", description = "Extract absent request with manager id from EMSDB database", tags = "Absent Request")
    @GetMapping(path="/manager")
    @ResponseBody
    @PreAuthorize("hasAnyAuthority('user','manager', 'hr', 'hrmanager')")
    public List<AbsentRequest> getAbsentRequestsByManagerId(@RequestParam(name = "manager_id") Long managerId) {
        return absentRequestRepository.findAbsentRequestByManagerId(managerId);
    }

    @Operation(summary = "Add an Employee's Absent Request", description = "Add a absent request into EMSDB database", tags = "Absent Request")
    @PostMapping(path={"/add", "/update"})
    @ResponseBody
    @PreAuthorize("hasAnyAuthority('user','manager', 'hr', 'hrmanager')")
    public AbsentRequest addAbsentRequest(@RequestBody AbsentRequest absentRequest) {
        return absentRequestRepository.save(absentRequest);
    }

    @Operation(summary = "Delete an Employee's Absent Request", description = "Delete a absent request from EMSDB database", tags = "Absent Request")
    @PostMapping(path={"/delete"})
    @ResponseBody
    @PreAuthorize("hasAnyAuthority('user','manager', 'hr', 'hrmanager')")
    public void deleteAbsentRequest(@RequestBody AbsentRequest absentRequest) {
        absentRequestRepository.delete(absentRequest);
    }

}
