package com.pg.ems.ms.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author Weiduo
 * @date 6/3/23 - 2:13 AM
 */
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class EmployeeProfile {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    Long employeeId;
    String firstName;
    String lastName;
    Integer age;
    String email;
    String phoneNumber;
    String address;
    String city;
    String state;
    String zipcode;

}
