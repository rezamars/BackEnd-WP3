

var orgDataList = new Array();
var indexName = -1;
var indexId = -1;
var indexDate = -1;
var timePar2;
var indexInJson = -1;
var chosenDate;

var myWeatherApp = angular.module('myWeatherApp', ['ngMaterial']);

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

myWeatherApp.controller('dateController', function($scope) {
	
	$scope.dateClicked = function (){
		//alert(formatDate($scope.myDate));
		chosenDate = formatDate($scope.myDate);
	}
	var myDate2 =  new Date;
	$scope.maxDate = new Date(
			myDate2.getFullYear(), 
			myDate2.getMonth(), 
			myDate2.getDate());
			}).config(function($mdDateLocaleProvider) {
				$mdDateLocaleProvider.firstDayOfWeek = 1;});
	


myWeatherApp.controller('mainController', function($scope,$http) {
    
	//save name of station in indexName getting the name from click on page
	//toggle hide
	//call select1-method
	$scope.open = function (inName) {
		$scope.shouldShow =  (false);
		indexName = inName;
		select1($scope,$http);
		console.log('select1');

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
    
    $scope.updateData = function updateData() {
    
    	document.getElementById('temperature').style.backgroundColor = 'white';
    	document.getElementById('humidity').style.backgroundColor = 'white';
    	document.getElementById('wind').style.backgroundColor = 'white';
    	document.getElementById('windDirection').style.backgroundColor = 'white';
    	document.getElementById('cloudAltitude').style.backgroundColor = 'white';
    	document.getElementById('cloudCoverage').style.backgroundColor = 'white';
    	document.getElementById('cloudTypes').style.backgroundColor = 'white';
    	document.getElementById('airPressure').style.backgroundColor = 'white';
    	document.getElementById('precipitation').style.backgroundColor = 'white';
    	
    	//an object to hold the new entries the admin types in admin-edit page
    	var objToSaveInDB = orgDataList[indexId];
    	
    	var okeyBoolean = true;
    	var numbers = /^-?\d*\.{0,1}\d+$/;
    	var cloudCoverageNumbers = /^[0-8]+$/;
    	var letters = /^[A-Za-z]+$/;
    	
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
    	
    	//put request
    	$http.put(('/weatherDatas/' + indexInJson),objToSaveInDB).success(function (data) {
    		//$scope.shouldShow =  (false);
    		location.reload();
    		alert('Successfully updated!')
            
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

//getting the datas for specific station based on clicked on
function select1($scope,$http) {
	
	$scope.specificStationData = new Array();
	
	$http.get("/weatherDatas").success(function (data) {
		
		for(var i = 0 ; i<data._embedded.weatherDatas.length ; i++){
			if(data._embedded.weatherDatas[i].stationName == indexName ){
				if(data._embedded.weatherDatas[i].date == chosenDate ){
					$scope.specificStationData.push(data._embedded.weatherDatas[i]);
				}
				
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

