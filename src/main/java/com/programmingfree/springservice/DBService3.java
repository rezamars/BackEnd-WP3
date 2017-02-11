package com.programmingfree.springservice;



import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;



public class DBService3 {
	
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
      
      
      WeatherData wd = new WeatherData();
      wd.setId(0);
      wd.setSmhiID(1);
      wd.setStationName("Göteborg-1");
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
      wd.setPrecipitation(12);
      
      
      WeatherData wd2 = new WeatherData();
      wd2.setId(0);
      wd2.setSmhiID(2);
      wd2.setStationName("Göteborg-2");
      wd2.setDate("2017-02-08");
      wd2.setTime("10.30");
      wd2.setTemperature(20);
      wd2.setHumidity((byte)20);
      wd2.setWind(15);
      wd2.setWindDirection("south-west");
      wd2.setCloudAltitude(140);
      wd2.setCloudCoverage((byte)12);
      wd2.setCloudTypes("Cirrus");
      wd2.setAirPressure(1014);
      wd2.setPrecipitation(12);;
      
      
    //storing all entities
      entitymanager.persist(wd);
      entitymanager.persist(wd2);
      
      
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
