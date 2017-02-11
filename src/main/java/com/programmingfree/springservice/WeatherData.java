package com.programmingfree.springservice;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="weather_data")
public class WeatherData {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="data_id")
	private int id;
	
	@Column(name="station_SMHI_id")
	private int smhiID;
	
	@Column(name="station_name")
	private String stationName;
		
	@Column(name="date")
	private String date;
	
	@Column(name="time")
	private String time;
	
	@Column(name="temperature")
	private double temperature;
	
	@Column(name="humidity")
	private byte humidity;
	
	@Column(name="wind")
	private double wind;
	
	@Column(name="wind_direction")
	private String windDirection ;
	
	@Column(name="cloud_altitude")
	private int cloudAltitude;
	
	@Column(name="cloud_coverage")
	private byte cloudCoverage;
	
	@Column(name="cloud_types")
	private String cloudTypes ;
	
	@Column(name="air_pressure")
	private int airPressure ;
	
	@Column(name="precipitation")
	private double precipitation ;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getSmhiID() {
		return smhiID;
	}

	public void setSmhiID(int smhiID) {
		this.smhiID = smhiID;
	}

	public String getStationName() {
		return stationName;
	}

	public void setStationName(String stationName) {
		this.stationName = stationName;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public double getTemperature() {
		return temperature;
	}

	public void setTemperature(double temperature) {
		this.temperature = temperature;
	}

	public byte getHumidity() {
		return humidity;
	}

	public void setHumidity(byte humidity) {
		this.humidity = humidity;
	}

	public double getWind() {
		return wind;
	}

	public void setWind(double wind) {
		this.wind = wind;
	}

	public String getWindDirection() {
		return windDirection;
	}

	public void setWindDirection(String windDirection) {
		this.windDirection = windDirection;
	}

	public int getCloudAltitude() {
		return cloudAltitude;
	}

	public void setCloudAltitude(int cloudAltitude) {
		this.cloudAltitude = cloudAltitude;
	}

	public byte getCloudCoverage() {
		return cloudCoverage;
	}

	public void setCloudCoverage(byte cloudCoverage) {
		this.cloudCoverage = cloudCoverage;
	}

	public String getCloudTypes() {
		return cloudTypes;
	}

	public void setCloudTypes(String cloudTypes) {
		this.cloudTypes = cloudTypes;
	}

	public int getAirPressure() {
		return airPressure;
	}

	public void setAirPressure(int airPressure) {
		this.airPressure = airPressure;
	}

	public double getPrecipitation() {
		return precipitation;
	}

	public void setPrecipitation(double precipitation) {
		this.precipitation = precipitation;
	}

	
	
	
}
