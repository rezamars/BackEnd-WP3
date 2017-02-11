package com.programmingfree.springservice;



import java.util.Calendar;
import java.util.Date;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.hibernate.jpa.HibernatePersistenceProvider;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;


public class DBService {
	
private String message = "ERROR!";
	
	public String createAndInitDB(){
		
	try{
		/*
		HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
	      vendorAdapter.setGenerateDdl(true);
	      vendorAdapter.setShowSql(true);

	      LocalContainerEntityManagerFactoryBean factory = new LocalContainerEntityManagerFactoryBean();
	      factory.setJpaVendorAdapter(vendorAdapter);
	      factory.setPersistenceProvider(new HibernatePersistenceProvider());
	      factory.setPackagesToScan("com.programmingfree.springservice");
	      //factory.setDataSource(dataSource());

	      //factory.setJpaProperties(hibernateProperties());
	      //factory.afterPropertiesSet();

	      
	      
	      EntityManagerFactory emfactory = factory.getObject();
		*/
      EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );
      EntityManager entitymanager = emfactory.createEntityManager( );
      entitymanager.getTransaction( ).begin( );
      
      Date date = new Date();
      Calendar cal = Calendar.getInstance(); // creates calendar
	  cal.setTime(date); // sets calendar time/date
	  cal.add(Calendar.HOUR_OF_DAY, 3); // adds one hour
	  
      
      //Task task = new Task(0,0,"description",date,"taskname","MEDIUM",cal.getTime() ,"ACTIVE");
      /*
	  Task task = new Task();
      task.setTaskId(0);
      task.setTaskArchived(0);
      task.setTaskDescription("description");
      task.setTaskName("Taskname");
      task.setTaskPriority("MEDIUM");
      task.setTaskStatus("ACTIVE");
      */
      
    //storing all entities
      //entitymanager.persist(task);
      
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
