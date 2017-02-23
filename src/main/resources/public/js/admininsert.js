

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
	
	//get current date and store it in date field
	$scope.dateInput = function () {
		document.getElementById('date').value = getDate();
	}
	
	//get current time and store it in time field
	$scope.timeInput = function () {
		document.getElementById('time').value = getTime();
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
    
    	
    	document.getElementById('temperature').style.backgroundColor = 'white';
    	document.getElementById('humidity').style.backgroundColor = 'white';
    	document.getElementById('wind').style.backgroundColor = 'white';
    	document.getElementById('windDirection').style.backgroundColor = 'white';
    	document.getElementById('cloudAltitude').style.backgroundColor = 'white';
    	document.getElementById('cloudCoverage').style.backgroundColor = 'white';
    	document.getElementById('cloudTypes').style.backgroundColor = 'white';
    	document.getElementById('airPressure').style.backgroundColor = 'white';
    	document.getElementById('precipitation').style.backgroundColor = 'white';
    	
    	
    	
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
    	var okeyBoolean = true;
    	var numbers = /^-?\d*\.{0,1}\d+$/;
    	var cloudCoverageNumbers = /^[0-8]+$/;
    	var letters = /^[A-Za-z]+$/;
    	
    	//get all the new values and store them
    	objToSaveInDB.smhiID = smhiId;
    	objToSaveInDB.stationName = indexName;
    	objToSaveInDB.date = getDate();
    	objToSaveInDB.time = getTime();
    	var temperature = document.getElementById('temperature').value;
    	if( temperature.match(numbers)){
    		okeyBoolean = true;
    	}
    	else{
    		okeyBoolean = false;
    		document.getElementById('temperature').style.backgroundColor = 'red';
    	}
    	objToSaveInDB.temperature = temperature;
    	
    	var humidity = document.getElementById('humidity').value;
    	if( humidity.match(numbers)){
    		
    	}
    	else{
    		okeyBoolean = false;
    		document.getElementById('humidity').style.backgroundColor = 'red';
    	}
    	objToSaveInDB.humidity = humidity;
    	
    	var wind = document.getElementById('wind').value;
    	if( wind.match(numbers)){
    		
    	}
    	else{
    		okeyBoolean = false;
    		document.getElementById('wind').style.backgroundColor = 'red';
    	}
    	objToSaveInDB.wind = wind;
    	
    	var windDirection = document.getElementById('windDirection').value;
    	if( windDirection.match(letters)){
    		
    	}
    	else{
    		okeyBoolean = false;
    		document.getElementById('windDirection').style.backgroundColor = 'red';
    	}
    	objToSaveInDB.windDirection = windDirection;
    	
    	var cloudAltitude = document.getElementById('cloudAltitude').value;
    	if( cloudAltitude.match(numbers)){
    		
    	}
    	else{
    		okeyBoolean = false;
    		document.getElementById('cloudAltitude').style.backgroundColor = 'red';
    	}
    	objToSaveInDB.cloudAltitude = cloudAltitude;
    	
    	var cloudCoverage = document.getElementById('cloudCoverage').value;
    	if( cloudCoverage.match(cloudCoverageNumbers)){
    		
    	}
    	else{
    		okeyBoolean = false;
    		document.getElementById('cloudCoverage').style.backgroundColor = 'red';
    	}
    	objToSaveInDB.cloudCoverage = cloudCoverage;
    	
    	var cloudTypes = document.getElementById('cloudTypes').value;
    	if( cloudTypes.match(letters)){
    		
    	}
    	else{
    		okeyBoolean = false;
    		document.getElementById('cloudTypes').style.backgroundColor = 'red';
    	}
    	objToSaveInDB.cloudTypes = document.getElementById('cloudTypes').value;
    	
    	var airPressure = document.getElementById('airPressure').value;
    	if( airPressure.match(numbers)){
    		
    	}
    	else{
    		okeyBoolean = false;
    		document.getElementById('airPressure').style.backgroundColor = 'red';
    	}
    	objToSaveInDB.airPressure = airPressure;
    	
    	var precipitation = document.getElementById('precipitation').value;
    	if( precipitation.match(numbers)){
    		
    	}
    	else{
    		okeyBoolean = false;
    		document.getElementById('precipitation').style.backgroundColor = 'red';
    	}
    	objToSaveInDB.precipitation = precipitation;
    	
    	if(okeyBoolean == true){
    		//post request to store the data in database
        	$http.post(('/weatherDatas'),objToSaveInDB).success(function (data) {
        		location.reload();
        		alert('Successfully created new data!')
                
            }).error(function (status) {
                alert(status);    
         });
    	}
    	else{
    		alert('Something wrong! Check your fields.');
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

//get the current date in desired form
function getDate(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd='0'+dd
	} 

	if(mm<10) {
	    mm='0'+mm
	} 

	today = yyyy+'-'+mm+'-'+dd;
	return today;
}

//get current time in desired form
function getTime(){
	var time = new Date().toLocaleTimeString('en-US', { hour12: false, 
        hour: "numeric", 
        minute: "numeric"});
	return time;
}
