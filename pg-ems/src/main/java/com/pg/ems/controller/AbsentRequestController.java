package com.pg.ems.controller;

import com.pg.ems.domain.AbsentRequest;
import com.pg.ems.repository.AbsentRequestRepository;
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
@RequestMapping(path="/absent_request")
@CrossOrigin
@Tag(name = "Absent Request", description = "Absent request API")
public class AbsentRequestController {

    @Autowired
    private AbsentRequestRepository absentRequestRepository;

    @Operation(summary = "Get All Absent Request Information", description = "Extract all absent request from EMSDB database", tags = "Absent Request")
    @GetMapping(path="/all")
    public @ResponseBody
    Iterable<AbsentRequest> getAllAbsentRequests() {
        return absentRequestRepository.findAll();
    }

    @Operation(summary = "Add an Employee's Absent Request", description = "Add a absent request into EMSDB database", tags = "Absent Request")
    @PostMapping(path={"/add", "/update"})
    public @ResponseBody
    AbsentRequest addAbsentRequest(@RequestBody AbsentRequest absentRequest) {
        return absentRequestRepository.save(absentRequest);
    }

    @Operation(summary = "Delete an Employee's Absent Request", description = "Delete a absent request from EMSDB database", tags = "Absent Request")
    @PostMapping(path={"/delete"})
    public @ResponseBody
    void deleteAbsentRequest(@RequestBody AbsentRequest absentRequest) {
        absentRequestRepository.delete(absentRequest);
    }

}
