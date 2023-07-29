package com.pg.ems.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @author Weiduo
 * @date 7/25/23 - 11:54 AM
 */
@Controller
@RequestMapping(path="/authentication")
@CrossOrigin
@Tag(name = "Authentication", description = "Authentication API")
public class AuthenticationController {

    @Operation(summary = "Get Current Login User", description = "Get current ogin user from EMSDB database", tags = "Authentication")
    @GetMapping(path="/user")
    public @ResponseBody
    Object getCurrentUser(Authentication authentication) {
        return authentication.getPrincipal();
    }
}
