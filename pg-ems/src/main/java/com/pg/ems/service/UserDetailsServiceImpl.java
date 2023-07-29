package com.pg.ems.service;

import com.pg.ems.domain.Authorities;
import com.pg.ems.domain.User;
import com.pg.ems.domain.UserDetailsExtend;
import com.pg.ems.repository.AuthoritiesRepository;
import com.pg.ems.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

/**
 * @author Weiduo
 * @date 7/25/23 - 10:43 AM
 */

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    AuthoritiesRepository authoritiesRepository;

    @Override
    public UserDetailsExtend loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println("loadUserByUsername: username: " + username);
        User user = userRepository.findUserByUsername(username);
        if(user == null) throw new UsernameNotFoundException("User is not exist!!");
        System.out.println("loadUserByUsername: user: " + user.toString());

        List<Authorities> authorities = authoritiesRepository.findAuthoritiesByEmployeeId(user.getEmployeeId());
        System.out.println("loadUserByUsername: authorities: " + authorities.toString());
        UserDetailsExtend res = new UserDetailsExtend(
                user.getEmployeeId(),
                user.getUsername(),
                user.getPassword(),
                AuthorityUtils.createAuthorityList(authorities.stream().map(e -> e.getAuthority()).collect(Collectors.toList()))
        );

        System.out.println("loadUserByUsername: res: " + res.toString());


        return res;
    }
}
