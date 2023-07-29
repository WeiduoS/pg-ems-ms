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
import java.time.LocalDate;

/**
 * @author Weiduo
 * @date 6/26/23 - 5:00 PM
 */

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class AttendanceRecord {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO,  generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    Long attendanceRecordId;
    Long employeeId;
    LocalDate date;
    Integer time;

}
