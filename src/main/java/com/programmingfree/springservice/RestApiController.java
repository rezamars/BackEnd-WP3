package com.programmingfree.springservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class RestApiController {
	
	
	@Autowired
	WDataService dataService;
	
	List<WeatherData> datas;
	WeatherDataRepository repo;
	
	@RequestMapping(value = "/weatherdata/", method = RequestMethod.GET)
    public ResponseEntity<List<WeatherData>> listAllData() {
		datas = dataService.findAllDatas();
        if (datas.isEmpty()) {
            return new ResponseEntity(HttpStatus.NO_CONTENT);
            // You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<WeatherData>>(datas, HttpStatus.OK);
    }
	
	@RequestMapping(value = "/weatherDatas",method = RequestMethod.PUT)
	public WeatherData form(WeatherData wd) {
        
		WeatherData result = repo.saveAndFlush(wd);
        
        return result;
    }

}
