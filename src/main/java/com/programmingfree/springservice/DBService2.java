package com.programmingfree.springservice;



import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;



public class DBService2 {
	
private String message = "ERROR!";
	
	public String createAndInitDB(){
		
	try{
		
		
      EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );
      EntityManager entitymanager = emfactory.createEntityManager( );
      entitymanager.getTransaction( ).begin( );
      
      Date date = new Date();
      Calendar cal = Calendar.getInstance(); // creates calendar
	  cal.setTime(date); // sets calendar time/date
	  cal.add(Calendar.HOUR_OF_DAY, 3); // adds one hour
      
      Station station = new Station();
      station.setId(0);
      station.setStationName("Göteborg-1");
      station.setStationID(1234);
      
      WeatherData wd = new WeatherData();
      wd.setId(0);
      wd.setDate("2017-02-08");
      wd.setTime("10.30");
      wd.setTemperature(20);
      wd.setHumidity((byte)20);
      wd.setWind(15);
      wd.setWindDirection("south-west");
      wd.setCloudAltitude(140);
      wd.setCloudCoverage((byte)12);
      wd.setCloudTypes("Cirrus");
      wd.setAirPressure(1014);
      wd.setDownFall(12);
      
      List<WeatherData> dataList = new ArrayList<WeatherData>();
      dataList.add(wd);
      station.setDataList(dataList);
      
      
    //storing all entities
      entitymanager.persist(wd);
      entitymanager.persist(station);
      
      
      entitymanager.getTransaction().commit();
      entitymanager.close();
      emfactory.close();
      
      message = "Create and initialization of DB succesful!";
      
	}
	catch(Exception e){
		message = "ERROR!";
	}
      
      
      
     return message;
}

}
