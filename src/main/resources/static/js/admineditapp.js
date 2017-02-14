
var kashk ;
var orgDataList = new Array();
var indexOf = -1;
var timePar2;

var myWeatherApp = angular.module('myWeatherApp', []);


myWeatherApp.controller('mainController', function($scope,$http) {
    
	$scope.open = function (par) {
		$scope.shouldShow =  (false);
		indexOf = par;
		select1($scope,$http);
	}
	$scope.getPost = function (par,timePar) {
		$scope.shouldShow =  (true);
		indexOf = par;
		timePar2 = timePar;
		select2($scope,$http);
	}
	
	$scope.stationDataList = new Array();
	$scope.stationorg = new Array();
	
    $http.get("/weatherDatas").success(function (data) {
    	
    	//alert(data._embedded.weatherDatas[1].stationName);
    	for(var i = 0 ; i<data._embedded.weatherDatas.length ; i++){
    		$scope.stationDataList.push(data._embedded.weatherDatas[i]);
    		orgDataList.push(data._embedded.weatherDatas[i]);
    	}
    	
    	//orgDataList = $scope.stationDataList;
    	$scope.stationorg = orgDataList;
    	//kashk = $scope.stationDataList;
    	$scope.station = removeDub($scope.stationDataList);
    	//$scope.stationorg = orgDataList;
    	kashk = $scope.stationDataList;
    	
    	
    	
    	
    }).error(function (status) {
        alert(status);
    });
    
    $scope.updateData = function updateData() {
    
    	var baseurl = localStorage.getItem('baseurl');
    	//alert(indexOf);
    	
    	var newListArray = orgDataList;
    	var listToSaveInDB = new Array();
    	//alert(document.getElementById('time').value);
    	//newListArray[0].date = document.getElementById('date').value;
    	//newListArray[0].time = document.getElementById('time').value;
    	for(var i = 0 ; i < newListArray.length ; i++){
			if(newListArray[i].stationName == indexOf && newListArray[i].time == timePar2){
				newListArray[i].date = document.getElementById('date').value;
		    	newListArray[i].time = document.getElementById('time').value;
		    	newListArray[i].temperature = document.getElementById('temperature').value;
		    	newListArray[i].humidity = document.getElementById('humidity').value;
		    	newListArray[i].wind = document.getElementById('wind').value;
		    	newListArray[i].windDirection = document.getElementById('windDirection').value;
		    	newListArray[i].cloudAltitude = document.getElementById('cloudAltitude').value;
		    	newListArray[i].cloudCoverage = document.getElementById('cloudCoverage').value;
		    	newListArray[i].cloudTypes = document.getElementById('cloudTypes').value;
		    	newListArray[i].airPressure = document.getElementById('airPressure').value;
		    	newListArray[i].precipitation = document.getElementById('precipitation').value;
		    	listToSaveInDB.push(newListArray[i]);
			}
			else{
				listToSaveInDB.push(newListArray[i]);
			}
    	}
    	
    	var myJsonString = JSON.stringify(orgDataList);
    	$http.put(('/weatherDatas'),myJsonString).success(function (data) {
    		alert('Successfully updated!')
            
        }).error(function (status) {
            alert(status);    
     });
    }
    
});

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
	//alert(toRemoveIndexes);
	
	for(var z = 0 ; z < toRemoveIndexes.length ; z++){
		newstationDataList.splice(z,1);
	}
	
	newstationDataList.sort(function(a, b) {
	    return parseFloat(a.smhiID) - parseFloat(b.smhiID);
	});
	
	return newstationDataList;
}


function select1($scope,$http) {
	
	$scope.specificStationData = new Array();
	$http.get("/weatherDatas").success(function (data) {
		
		for(var i = 0 ; i<data._embedded.weatherDatas.length ; i++){
			if(data._embedded.weatherDatas[i].stationName == indexOf){
				$scope.specificStationData.push(data._embedded.weatherDatas[i]);
			}
    	}
	
	}).error(function (status) {
		alert(status);
	});
}

function select2($scope,$http) {
	
	$scope.specificPost = new Array();
	$http.get("/weatherDatas").success(function (data) {
		
		for(var i = 0 ; i<data._embedded.weatherDatas.length ; i++){
			if(data._embedded.weatherDatas[i].stationName == indexOf){
				if(data._embedded.weatherDatas[i].time == timePar2){
					$scope.specificPost.push(data._embedded.weatherDatas[i]);
				}
				
			}
    	}
	
	}).error(function (status) {
		alert(status);
	});
}


