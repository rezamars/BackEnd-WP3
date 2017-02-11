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
	StationService stationService;
	
	@RequestMapping(value = "/station/", method = RequestMethod.GET)
    public ResponseEntity<List<Station>> listAllStations() {
        List<Station> stations = stationService.findAllStations();
        if (stations.isEmpty()) {
            return new ResponseEntity(HttpStatus.NO_CONTENT);
            // You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<Station>>(stations, HttpStatus.OK);
    }
	
	

}
