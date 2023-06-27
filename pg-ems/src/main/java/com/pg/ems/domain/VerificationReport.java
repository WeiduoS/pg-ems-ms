package com.pg.ems.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import java.sql.Date;
import java.sql.Timestamp;

/**
 * @author Weiduo
 * @date 6/26/23 - 2:39 PM
 */
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class VerificationReport {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    Long verificationReportId;
    Long employeeId;
    String reporterName;
    Timestamp reportDate;
    String comment;
    
}
