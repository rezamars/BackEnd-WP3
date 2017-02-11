package com.programmingfree.springservice;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="weather_station")
public class Station {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id")
	private int id;
	
	@Column(name="station_name")
	private String stationName;
	
	@Column(name="station_ID")
	private int stationID;
	
	@OneToMany
	private List<WeatherData> dataList = new ArrayList<WeatherData>();

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getStationName() {
		return stationName;
	}

	public void setStationName(String stationName) {
		this.stationName = stationName;
	}

	public int getStationID() {
		return stationID;
	}

	public void setStationID(int stationID) {
		this.stationID = stationID;
	}

	public List<WeatherData> getDataList() {
		return dataList;
	}

	public void setDataList(List<WeatherData> dataList) {
		this.dataList = dataList;
	}

	
	
	
	
}
