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
      wd2.setDate("2017-02-09");
      wd2.setTime("12.30");
      wd2.setTemperature(-3);
      wd2.setHumidity((byte)23);
      wd2.setWind(10);
      wd2.setWindDirection("nourth-east");
      wd2.setCloudAltitude(122);
      wd2.setCloudCoverage((byte)9);
      wd2.setCloudTypes("Altocumulus");
      wd2.setAirPressure(1014);
      wd2.setPrecipitation(55);
      
      WeatherData wd3 = new WeatherData();
      wd3.setId(0);
      wd3.setSmhiID(3);
      wd3.setStationName("Stockholm-1");
      wd3.setDate("2017-02-05");
      wd3.setTime("19.30");
      wd3.setTemperature(-10);
      wd3.setHumidity((byte)40);
      wd3.setWind(9);
      wd3.setWindDirection("west");
      wd3.setCloudAltitude(213);
      wd3.setCloudCoverage((byte)13);
      wd3.setCloudTypes("Nimbostratus");
      wd3.setAirPressure(1014);
      wd3.setPrecipitation(27);
      
      WeatherData wd4 = new WeatherData();
      wd4.setId(0);
      wd4.setSmhiID(4);
      wd4.setStationName("Piteå");
      wd4.setDate("2017-02-03");
      wd4.setTime("08.30");
      wd4.setTemperature(-20);
      wd4.setHumidity((byte)50);
      wd4.setWind(5);
      wd4.setWindDirection("west");
      wd4.setCloudAltitude(59);
      wd4.setCloudCoverage((byte)45);
      wd4.setCloudTypes("Cumulus");
      wd4.setAirPressure(1014);
      wd4.setPrecipitation(43);;
      
      
    //storing all entities
      entitymanager.persist(wd);
      entitymanager.persist(wd2);
      entitymanager.persist(wd3);
      entitymanager.persist(wd4);
      
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
