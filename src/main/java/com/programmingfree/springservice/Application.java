package com.programmingfree.springservice;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration;

@Configuration
@EnableAutoConfiguration
@PropertySource("application.properties")
@ComponentScan
@EnableJpaRepositories
@Import(RepositoryRestMvcConfiguration.class)
public class Application {

	public static void main(String[] args) {
		
		
		SpringApplication.run(Application.class, args);
		//DBService3 service = new DBService3();
		//String message = service.createAndInitDB();
		//System.out.println(message);
	}

}