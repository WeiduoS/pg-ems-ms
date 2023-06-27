package com.pg.ems.repository;

import com.pg.ems.domain.EmployeeProfile;
import com.pg.ems.domain.Project;
import org.springframework.data.repository.CrudRepository;

/**
 * @author Weiduo
 * @date 6/3/23 - 2:18 AM
 */
public interface ProjectRepository extends CrudRepository<Project, Long> {
}
