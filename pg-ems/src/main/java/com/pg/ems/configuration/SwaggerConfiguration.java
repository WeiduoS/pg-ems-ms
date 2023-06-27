package com.pg.ems.configuration;

import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author Weiduo
 * @date 6/26/23 - 1:54 PM
 */

@Configuration
public class SwaggerConfiguration {
    @Bean
    public OpenAPI springShopOpenAPI() {
        return new OpenAPI()
            .info(new Info().title("PG EMS API")
                    .description("Spring shop sample application")
                    .version("v0.0.1")
                    .contact(new Contact().name("Employee Management System"))
                    .license(new License().name("Apache 2.0").url("http://springdoc.org")))
            .externalDocs(new ExternalDocumentation()
                    .description("Employee Management System APIs Documentation")
                    .url("https://github.com/WeiduoS/pg-ems-ms"));
    }
}
