

var orgDataList = new Array();
var indexName = -1;
var indexId = -1;
var indexDate = -1;
var timePar2;
var indexInJson = -1;

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
	$scope.getPost = function (inId,inName,timePar,datePar) {
		$scope.shouldShow =  (true);
		indexName = inName;
		timePar2 = timePar;
		indexDate = datePar;
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
    
    $scope.deleteData = function deleteData() {
    
    	var userSelection = confirm("Do you really want to delete this?");
    	if (userSelection == true) {
    	//an object to hold the new entries the admin types in admin-edit page
    	var objToSaveInDB = orgDataList[indexId];
    	
    	//delete request
    	$http.delete(('/weatherDatas/' + indexInJson),objToSaveInDB).success(function (data) {
    		
    		location.reload();
    		alert('Successfully deleted!')
    		
        }).error(function (status) {
            alert(status);    
     });
    	}
    	else{
    		
    	}
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
					if(data._embedded.weatherDatas[i].date == indexDate){
						$scope.specificPost.push(data._embedded.weatherDatas[i]);
						indexId = i;
						
					}
				}
				
			}
    	}
		indexInJson = /[^/]*$/.exec(data._embedded.weatherDatas[indexId]._links.self.href)[0];
		
		
	}).error(function (status) {
		alert(status);
	});
}


