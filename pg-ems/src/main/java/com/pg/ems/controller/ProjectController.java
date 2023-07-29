package com.pg.ems.controller;

import com.pg.ems.domain.AttendanceRecord;
import com.pg.ems.domain.Project;
import com.pg.ems.repository.ProjectRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.config.annotation.authentication.configuration.EnableGlobalAuthentication;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

import static org.springframework.http.HttpStatus.*;

/**
 * @author Weiduo
 * @date 6/3/23 - 2:37 AM
 */
@Controller
@RequestMapping(path="/project")
@CrossOrigin
@Tag(name = "Project", description = "Project API")
@EnableMethodSecurity
public class ProjectController {

    @Autowired
    private ProjectRepository projectRepository;

    @Operation(summary = "Get All Projects' Information", description = "Extract all project records from EMSDB database", tags = "Project")
    @GetMapping(path="/all")
    @ResponseBody
    @PreAuthorize("hasAnyAuthority('manager', 'hr', 'hrmanager')")
    public Iterable<Project> getAllProjectRecords() {
        return projectRepository.findAll();
    }

    @Operation(summary = "Get All Projects' by Employee Id", description = "Extract one employee's project records from EMSDB database", tags = "Project")
    @GetMapping(path="/employee")
    @ResponseBody
    @PreAuthorize("hasAnyAuthority('user', 'manager')")
    public Iterable<Project> getProjectRecordsByUserId(@RequestParam(name = "employee_id") Long employeeId) {
        return projectRepository.findProjectsByEmployeeId(employeeId);
    }

    @Operation(summary = "Get All Projects' by Manager Id", description = "Extract one manager's project records from EMSDB database", tags = "Project")
    @GetMapping(path="/manager")
    @ResponseBody
    @PreAuthorize("hasAnyAuthority('manager')")
    public Iterable<Project> getProjectRecordsByManagerId(@RequestParam(name = "manager_id") Long managerId) {
        return projectRepository.findProjectsByManagerId(managerId);
    }


    @Operation(summary = "Add / Update an Project Record", description = "Add / Update a project record into EMSDB database", tags = "Project")
    @PostMapping(path={"/add", "/update"})
    @ResponseBody
    @PreAuthorize("hasAnyAuthority('user', 'manager')")
    public List<Project> addOrUpdateProject(@RequestBody List<Project> project) {
        return (List<Project>) projectRepository.saveAll(project);
    }

    @Operation(summary = "Delete an Project Record", description = "Delete an project record from EMSDB database", tags = "Project")
    @PostMapping(path={"/delete"})
    @ResponseBody
    @PreAuthorize("hasAnyAuthority('manager')")
    public void deleteProject(@RequestBody Project project) {
        projectRepository.delete(project);
    }

}
