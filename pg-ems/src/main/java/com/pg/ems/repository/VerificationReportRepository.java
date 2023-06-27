package com.pg.ems.repository;

import com.pg.ems.domain.Project;
import com.pg.ems.domain.VerificationReport;
import org.springframework.data.repository.CrudRepository;

/**
 * @author Weiduo
 * @date 6/3/23 - 2:18 AM
 */
public interface VerificationReportRepository extends CrudRepository<VerificationReport, Long> {
}
