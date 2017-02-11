package com.programmingfree.springservice;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@Repository
public interface WeatherRepository extends JpaRepository<Station, Integer> {

	//List<Station> findAllStations(@Param("station_ID") int id);
	//List<Station> findByTaskStatus(@Param("status") String taskStatus);
	 //Station findById(int id);
	 //List<Station> findAllStations();
}
