package com.pg.ems.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import java.sql.Date;

/**
 * @author Weiduo
 * @date 6/26/23 - 2:39 PM
 */
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Project {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    Long projectId;
    Long employeeId;
    Long managerId;
    String projectName;
    String description;
    String type;
    Date startDate;
    Date endDate;
    Integer grade;
    String feedback;

}
