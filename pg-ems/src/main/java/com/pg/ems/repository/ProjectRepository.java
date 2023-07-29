package com.pg.ems.repository;

import com.pg.ems.domain.EmployeeProfile;
import com.pg.ems.domain.Project;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * @author Weiduo
 * @date 6/3/23 - 2:18 AM
 */
public interface ProjectRepository extends CrudRepository<Project, Long> {

    @Query(
            value = "select distinct * from emsdb.project where employee_id = :employee_id",
            nativeQuery = true
    )
    List<Project> findProjectsByEmployeeId(@Param(value = "employee_id") Long id);

    @Query(
            value = "select distinct * from emsdb.project where manager_id = :manager_id",
            nativeQuery = true
    )
    List<Project> findProjectsByManagerId(@Param(value = "manager_id") Long id);

}
