package com.pg.ems.ms.controller;

import com.pg.ems.ms.domain.EmployeeProfile;
import com.pg.ems.ms.repository.EmployeeProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 * @author Weiduo
 * @date 6/3/23 - 2:37 AM
 */
@Controller
@RequestMapping(path="/employee")
public class EmployeeController {

    @Autowired
    private EmployeeProfileRepository employeeProfileRepository;

    @GetMapping(path="/all")
    public @ResponseBody
    Iterable<EmployeeProfile> getAllUsers() {
        return employeeProfileRepository.findAll();
    }
}
