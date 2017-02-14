
var kashk ;
var orgDataList = new Array();
var indexOf = -1;

var myWeatherApp = angular.module('myWeatherApp', []);


myWeatherApp.controller('mainController', function($scope,$http) {
    
	$scope.open = function (par) {
		  indexOf = par;
		  select($scope,$http);
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


function select($scope,$http) {
	//angular.element(document.getElementById('mainController')).scope();
	//alert(indexOf);
	$scope.specificStationData = new Array();
	$http.get("/weatherDatas").success(function (data) {
		
		for(var i = 0 ; i<data._embedded.weatherDatas.length ; i++){
			if(data._embedded.weatherDatas[i].stationName == indexOf){
				$scope.specificStationData.push(data._embedded.weatherDatas[i]);
				//alert('hej');
			}
    	}
	
	}).error(function (status) {
		alert(status);
	});
	//alert(specificStationData[0].station.stationName);
	//alert(document.getElementById('station2-0'));
}


