

var orgDataList = new Array();
var indexName = -1;
var indexId = -1;
var timePar2;

var myWeatherApp = angular.module('myWeatherApp', []);


myWeatherApp.controller('mainController', function($scope,$http) {
    
	//save name of station in indexName getting the name from click on page
	//toggle hide
	//save  stationName in stName for access in html-page
	$scope.open = function (inName) {
		$scope.shouldShow =  (true);
		indexName = inName;
		$scope.stName = inName;
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
    
    $scope.createData = function createData() {
    
    	var smhiId = -1;
    	indexId = $scope.stationorg.length;
    	
    	//loops to get smhiID and stores it in shidId
    	for(var z = 0 ; z < $scope.stationorg.length ; z++){
    		if(indexName == $scope.stationorg[z].stationName){
    			smhiId = $scope.stationorg[z].smhiID;
    		}
    	}
    	 
    	//an object to hold the new entries the admin types in admin-create page
    	var objToSaveInDB = $scope.stationorg[0];
    	
    	//get all the new values and store them
    	objToSaveInDB.smhiID = smhiId;
    	objToSaveInDB.stationName = indexName;
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
    	
    	//post request to store the data in database
    	$http.post(('/weatherDatas'),objToSaveInDB).success(function (data) {
    		alert('Successfully created new data!')
            
        }).error(function (status) {
            alert(status);    
     });
    	
    }
    
});

//a function that removes dublicate names of stations
function removeDub(array){
	newstationDataList = array;
	var toRemoveIndexes = new Array();
	var iter = -1;
	
	//nested loop to get the indexes of the dublicate-stationNames in array
	//stores the indexes in toRemoveIndexes
	for(var x = 0 ; x < array.length ; x++){
		var tmp = array[x].stationName;
		
		for(var y = (x+1) ; y < array.length ; y++){
			if(newstationDataList[y].stationName == tmp){
				toRemoveIndexes.push(y);
			}
		}
	}
	
	//Remove the dublicates from the new list
	for(var z = toRemoveIndexes.length-1 ; z >= -1; z--){
		newstationDataList.splice(toRemoveIndexes[z],1);
	}
	
	//sorting the list
	newstationDataList.sort(function(a, b) {
	    return parseFloat(a.smhiID) - parseFloat(b.smhiID);
	});
	
	return newstationDataList;
}


