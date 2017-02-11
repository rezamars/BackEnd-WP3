package com.programmingfree.springservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("stationService")
@Transactional
public class StationServiceImpl implements StationService{

	@Autowired
    private WeatherStationRepository weatherRepository;
	
	@Override
	public List<Station> findAllStations() {
		return weatherRepository.findAll();
	}



}
