package com.pg.ems.controller;

import com.pg.ems.domain.Project;
import com.pg.ems.domain.VerificationReport;
import com.pg.ems.repository.VerificationReportRepository;
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
@RequestMapping(path="/verification_report")
@CrossOrigin
@Tag(name = "Verification Report", description = "Verification Report API")
public class VerificationReportController {

    @Autowired
    private VerificationReportRepository verificationReportRepository;

    @Operation(summary = "Get All Verification Reports Information", description = "Extract all verification reports from EMSDB database", tags = "Verification Report")
    @GetMapping(path="/all")
    public @ResponseBody
    Iterable<VerificationReport> getAllVerificationReports() {
        return verificationReportRepository.findAll();
    }

    @Operation(summary = "Add / Update an Verification Report", description = "Add / Update a verificaiton report into EMSDB database", tags = "Verification Report")
    @PostMapping(path={"/add", "/update"})
    public @ResponseBody
    VerificationReport addVerificationReport(@RequestBody VerificationReport verificationReport) {
        return verificationReportRepository.save(verificationReport);
    }

    @Operation(summary = "Delete an Verification Report", description = "Delete an verification report from EMSDB database", tags = "Verification Report")
    @PostMapping(path={"/delete"})
    public @ResponseBody
    void deleteVerificationReport(@RequestBody VerificationReport verificationReport) {
        verificationReportRepository.delete(verificationReport);
    }

}
