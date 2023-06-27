package com.pg.ems.controller;

import com.pg.ems.domain.AttendanceRecord;
import com.pg.ems.domain.Project;
import com.pg.ems.repository.ProjectRepository;
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
@RequestMapping(path="/project")
@CrossOrigin
@Tag(name = "Project", description = "Project API")
public class ProjectController {

    @Autowired
    private ProjectRepository projectRepository;

    @Operation(summary = "Get All Projects' Information", description = "Extract all project records from EMSDB database", tags = "Project")
    @GetMapping(path="/all")
    public @ResponseBody
    Iterable<Project> getAllProjectRecords() {
        return projectRepository.findAll();
    }

    @Operation(summary = "Add / Update an Project Record", description = "Add / Update a project record into EMSDB database", tags = "Project")
    @PostMapping(path={"/add", "/update"})
    public @ResponseBody
    Project addProject(@RequestBody Project project) {
        return projectRepository.save(project);
    }

    @Operation(summary = "Delete an Project Record", description = "Delete an project record from EMSDB database", tags = "Project")
    @PostMapping(path={"/delete"})
    public @ResponseBody
    void deleteProject(@RequestBody Project project) {
        projectRepository.delete(project);
    }

}
