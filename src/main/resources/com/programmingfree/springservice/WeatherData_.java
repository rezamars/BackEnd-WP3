package com.programmingfree.springservice;

import com.programmingfree.springservice.WeatherData.Station;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="Dali", date="2017-02-09T12:40:37.916+0100")
public class WeatherData_ {
	@StaticMetamodel(Station.class)
	public static class Station_ {
		public static volatile SingularAttribute<Station, Integer> id;
		public static volatile SingularAttribute<Station, String> stationName;
		public static volatile SingularAttribute<Station, Integer> stationID;
	}
}
