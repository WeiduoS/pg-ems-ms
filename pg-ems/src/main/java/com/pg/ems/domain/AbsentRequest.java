package com.pg.ems.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CollectionId;
import org.hibernate.annotations.GenericGenerator;

import java.sql.Date;
import java.time.LocalDate;

/**
 * @author Weiduo
 * @date 6/26/23 - 2:39 PM
 */
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class AbsentRequest {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    Long absentRequestId;
    @Column(name = "absent_requestcol")
    String absentRequestComment;
    Long employeeId;
    LocalDate date;
    Integer leaveTime;
}
