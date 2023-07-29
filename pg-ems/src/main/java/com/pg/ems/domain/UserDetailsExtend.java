package com.pg.ems.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

/**
 * @author Weiduo
 * @date 7/25/23 - 11:59 AM
 */

@Setter
@Getter
public class UserDetailsExtend extends org.springframework.security.core.userdetails.User {
    private Long id;

    public UserDetailsExtend(Long id, String username, String password, List<GrantedAuthority> authorities) {
        super(username, password, authorities);
        this.id = id;
    }
}
