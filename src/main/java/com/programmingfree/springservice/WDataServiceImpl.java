package com.programmingfree.springservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("dataService")
@Transactional
public class WDataServiceImpl implements WDataService{

	@Autowired
    private WeatherDataRepository weatherDataRepository;
	
	@Override
	public List<WeatherData> findAllDatas() {
		return weatherDataRepository.findAll();
	}

}
