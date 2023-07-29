package com.pg.ems.controller;

import com.pg.ems.domain.ErrorResponse;
import com.pg.ems.domain.Project;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

/**
 * @author Weiduo
 * @date 7/24/23 - 12:45 AM
 */
@ControllerAdvice
public class ExceptionHandlerController {
    @ExceptionHandler({Exception.class})
    ResponseEntity<ErrorResponse> handleGlobalException(Exception e) {
        return new ResponseEntity<>(
                new ErrorResponse(BAD_REQUEST.value(), e.getMessage(), null)
                , BAD_REQUEST);
    }

}
