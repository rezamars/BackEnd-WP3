package com.programmingfree.springservice;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface WeatherDataRepository extends CrudRepository<WeatherData, Integer>{
	

}
