
var myWeatherApp = angular.module('myWeatherApp', []);


myWeatherApp.controller('mainController', function($scope,$http) {
    
	$scope.stationDataList = new Array();
	
    $http.get("/weatherDatas").success(function (data) {
    	
    	//alert(data._embedded.weatherDatas[1].stationName);
    	for(var i = 0 ; i<data._embedded.weatherDatas.length ; i++){
    		$scope.stationDataList.push(data._embedded.weatherDatas[i]);
    	}
    	
    	
    	
    	$scope.station = removeDub($scope.stationDataList);
    	//alert($scope.station[0].time);
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
	return newstationDataList;
}
