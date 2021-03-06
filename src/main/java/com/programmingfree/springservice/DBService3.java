package com.programmingfree.springservice;


import com.programmingfree.springservice.entities.Role;
import com.programmingfree.springservice.entities.User;
import com.programmingfree.springservice.entities.WeatherData;

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
      
      
      User ad = new User();
      ad.setId(1);
      ad.setUsername("admin");
      ad.setUserPassword("password");
      ad.setEnabled(true);

      Role role = new Role();
      role.setId(1);
      role.setUsername("admin");
      role.setUserRole("ADMIN");

      entitymanager.persist(role);
      entitymanager.persist(ad);
      entitymanager.getTransaction().commit();
      entitymanager.close();
      emfactory.close();
      
      EntityManagerFactory emfactory2 = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );
      EntityManager entitymanager2 = emfactory2.createEntityManager( );
      entitymanager2.getTransaction( ).begin( );
      
      WeatherData wd = new WeatherData();
      wd.setId(0);
      wd.setSmhiID(1);
      wd.setStationName("Göteborg-1");
      wd.setDate("2017-02-08");
      wd.setTime("10:30");
      wd.setTemperature(20);
      wd.setHumidity(20);
      wd.setWind(15);
      wd.setWindDirection("south-west");
      wd.setCloudAltitude(140);
      wd.setCloudCoverage(1);
      wd.setCloudTypes("Cirrus");
      wd.setAirPressure(1014);
      wd.setPrecipitation(12);
      
      
      WeatherData wd2 = new WeatherData();
      wd2.setId(0);
      wd2.setSmhiID(2);
      wd2.setStationName("Göteborg-2");
      wd2.setDate("2017-02-09");
      wd2.setTime("12:30");
      wd2.setTemperature(-3);
      wd2.setHumidity(23);
      wd2.setWind(10);
      wd2.setWindDirection("nourth-east");
      wd2.setCloudAltitude(122);
      wd2.setCloudCoverage(8);
      wd2.setCloudTypes("Altocumulus");
      wd2.setAirPressure(1014);
      wd2.setPrecipitation(55);
      
      WeatherData wd3 = new WeatherData();
      wd3.setId(0);
      wd3.setSmhiID(3);
      wd3.setStationName("Stockholm-1");
      wd3.setDate("2017-02-05");
      wd3.setTime("19:30");
      wd3.setTemperature(-10);
      wd3.setHumidity(40);
      wd3.setWind(9);
      wd3.setWindDirection("west");
      wd3.setCloudAltitude(213);
      wd3.setCloudCoverage(3);
      wd3.setCloudTypes("Nimbostratus");
      wd3.setAirPressure(1014);
      wd3.setPrecipitation(27);
      
      WeatherData wd4 = new WeatherData();
      wd4.setId(0);
      wd4.setSmhiID(4);
      wd4.setStationName("Piteå");
      wd4.setDate("2017-02-03");
      wd4.setTime("08:30");
      wd4.setTemperature(-20);
      wd4.setHumidity(50);
      wd4.setWind(5);
      wd4.setWindDirection("west");
      wd4.setCloudAltitude(59);
      wd4.setCloudCoverage(5);
      wd4.setCloudTypes("Cumulus");
      wd4.setAirPressure(1014);
      wd4.setPrecipitation(43);
      
      WeatherData wd5 = new WeatherData();
      wd5.setId(0);
      wd5.setSmhiID(3);
      wd5.setStationName("Stockholm-1");
      wd5.setDate("2017-02-10");
      wd5.setTime("18:15");
      wd5.setTemperature(-3);
      wd5.setHumidity(23);
      wd5.setWind(4);
      wd5.setWindDirection("north-east");
      wd5.setCloudAltitude(160);
      wd5.setCloudCoverage(2);
      wd5.setCloudTypes("Altostratus");
      wd5.setAirPressure(1014);
      wd5.setPrecipitation(5);
      
      WeatherData wd6 = new WeatherData();
      wd6.setId(0);
      wd6.setSmhiID(5);
      wd6.setStationName("Norrköping-1");
      wd6.setDate("2017-02-11");
      wd6.setTime("11:18");
      wd6.setTemperature(-6);
      wd6.setHumidity(60);
      wd6.setWind(2);
      wd6.setWindDirection("east");
      wd6.setCloudAltitude(333);
      wd6.setCloudCoverage(7);
      wd6.setCloudTypes("Nimbostratus");
      wd6.setAirPressure(1014);
      wd6.setPrecipitation(10);
      
      WeatherData wd7 = new WeatherData();
      wd7.setId(0);
      wd7.setSmhiID(1);
      wd7.setStationName("Göteborg-1");
      wd7.setDate("2017-02-11");
      wd7.setTime("18:20");
      wd7.setTemperature(-3);
      wd7.setHumidity(5);
      wd7.setWind(4);
      wd7.setWindDirection("north-east");
      wd7.setCloudAltitude(234);
      wd7.setCloudCoverage(6);
      wd7.setCloudTypes("Cumulus");
      wd7.setAirPressure(1014);
      wd7.setPrecipitation(8);
      
      
    //storing all entities
      
      entitymanager2.persist(wd);
      entitymanager2.persist(wd2);
      entitymanager2.persist(wd3);
      entitymanager2.persist(wd4);
      entitymanager2.persist(wd5);
      entitymanager2.persist(wd6);
      entitymanager2.persist(wd7);
      
      entitymanager2.getTransaction().commit();
      entitymanager2.close();
      emfactory2.close();
      
      message = "Create and initialization of DB succesful!";
      
	}
	catch(Exception e){
		System.out.print("ERROR-message: " + e.getMessage());
		message = "ERROR!";
	}
      
      
      
     return message;
}

}
