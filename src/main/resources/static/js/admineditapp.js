

var orgDataList = new Array();
var indexName = -1;
var indexId = -1;
var timePar2;

var myWeatherApp = angular.module('myWeatherApp', []);


myWeatherApp.controller('mainController', function($scope,$http) {
    
	//save name of station in indexName getting the name from click on page
	//toggle hide
	//call select1-method
	$scope.open = function (inName) {
		$scope.shouldShow =  (false);
		indexName = inName;
		select1($scope,$http);
	}
	
	//save name of station in indexName getting the name from click on page
	//save time for selected station in timePar2
	//toggle show
	//call select2-method
	$scope.getPost = function (inId,inName,timePar) {
		$scope.shouldShow =  (true);
		indexName = inName;
		timePar2 = timePar;
		select2($scope,$http);
	}
	
	$scope.stationDataList = new Array();
	$scope.stationorg = new Array();
	
	//get call to get the datas
    $http.get("/weatherDatas").success(function (data) {
    	
    	//a loop to store all datas in orgDataList received from database
    	for(var i = 0 ; i<data._embedded.weatherDatas.length ; i++){
    		$scope.stationDataList.push(data._embedded.weatherDatas[i]);
    		orgDataList.push(data._embedded.weatherDatas[i]);
    	}
    	
    	//store list in stationorg to be reached in html-page
    	$scope.stationorg = orgDataList;
    	
    	//call the remove dublicates method and store the result in station
    	$scope.station = removeDub($scope.stationDataList);
    	
    }).error(function (status) {
        alert(status);
    });
    
    $scope.updateData = function updateData() {
    
    	//an object to hold the new entries the admin types in admin-edit page
    	var objToSaveInDB = orgDataList[indexId];
    	
    	//get all the new values and store them
    	objToSaveInDB.date = document.getElementById('date').value;
    	objToSaveInDB.time = document.getElementById('time').value;
    	objToSaveInDB.temperature = document.getElementById('temperature').value;
    	objToSaveInDB.humidity = document.getElementById('humidity').value;
    	objToSaveInDB.wind = document.getElementById('wind').value;
    	objToSaveInDB.windDirection = document.getElementById('windDirection').value;
    	objToSaveInDB.cloudAltitude = document.getElementById('cloudAltitude').value;
    	objToSaveInDB.cloudCoverage = document.getElementById('cloudCoverage').value;
    	objToSaveInDB.cloudTypes = document.getElementById('cloudTypes').value;
    	objToSaveInDB.airPressure = document.getElementById('airPressure').value;
    	objToSaveInDB.precipitation = document.getElementById('precipitation').value;
    	
    	//put request
    	$http.put(('/weatherDatas/' + (indexId+1)),objToSaveInDB).success(function (data) {
    		alert('Successfully updated!')
            
        }).error(function (status) {
            alert(status);    
     });
    	
    }
    
});

//a function that removes dublicate names of stations
function removeDub(array){
	newstationDataList = array;
	var toRemoveIndexes = new Array();
	
	for(var x = 0 ; x < 7 ; x++){
		var tmp = array[x].stationName;
		
		for(var y = (x+1) ; y < 7 ; y++){
			if(newstationDataList[y].stationName == tmp){
				toRemoveIndexes.push(y);
			}
		}
	}
	
	for(var z = 0 ; z < toRemoveIndexes.length ; z++){
		newstationDataList.splice(z,1);
	}
	
	//sorting the list
	newstationDataList.sort(function(a, b) {
	    return parseFloat(a.smhiID) - parseFloat(b.smhiID);
	});
	
	return newstationDataList;
}

//getting the datas for specific station based on clicked on
function select1($scope,$http) {
	
	$scope.specificStationData = new Array();
	$http.get("/weatherDatas").success(function (data) {
		
		for(var i = 0 ; i<data._embedded.weatherDatas.length ; i++){
			if(data._embedded.weatherDatas[i].stationName == indexName){
				$scope.specificStationData.push(data._embedded.weatherDatas[i]);
			}
    	}
	
	}).error(function (status) {
		alert(status);
	});
}

//getting the data for specific time based on click on time in page
function select2($scope,$http) {
	
	$scope.specificPost = new Array();
	$http.get("/weatherDatas").success(function (data) {
		
		for(var i = 0 ; i<data._embedded.weatherDatas.length ; i++){
			if(data._embedded.weatherDatas[i].stationName == indexName){
				if(data._embedded.weatherDatas[i].time == timePar2){
					$scope.specificPost.push(data._embedded.weatherDatas[i]);
					indexId = i;
				}
				
			}
    	}
	
	}).error(function (status) {
		alert(status);
	});
}


