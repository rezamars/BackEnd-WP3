/**
 * Created by Soniiqaah on 2017-02-08.
 */

var myWeatherApp = angular.module('myWeatherApp', []);

// konfigurerar mina routes
/*myWeatherApp.config(function ($routeProvider) {
    $routeProvider

    // route for the login page
        .when('index', {
            templateUrl: 'html/index.html',
            controller: 'indexController'
        })

        // route for the crud page
        .when('/login', {
            templateUrl: 'html/login.html',
            controller: 'loginController'
        })
        .when('/edit', {
            templateUrl: 'html/edit.html',
            controller: 'editController'
        })

        // route for the index page
        .when('/create', {
            templateUrl: 'html/create.html',
            controller: 'createController'
        });


});*/
// create my controllers and inject Angular's $scope

myWeatherApp.controller('mainController', function ($scope, $log) {
    // create a message to display in our view
    $scope.message = 'main page!';
    $log.debug('Hej main');

    $scope.sortType     = 'stationName'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
    $scope.searchStationName   = '';     // set the default search/filter term

    // create the list of station / vi får detta från databas!
   /* $scope.stationList = [
        { name: 'Cali Roll', fish: 'Crab', tastiness: 2 },
        { name: 'Philly', fish: 'Tuna', tastiness: 4 },
        { name: 'Tiger', fish: 'Eel', tastiness: 7 },
        { name: 'Rainbow', fish: 'Variety', tastiness: 6 }
    ];*/
    
    
});

    
//var app = angular.module('myWeatherApp', []);
myWeatherApp.controller('mainController', function($scope,$http) {
	$scope.stationDataList = new Array();
    $http.get("http://localhost:9090/weatherDatas").success(function (data) {
    	
    	//alert(data._embedded.weatherDatas[1].stationName);
    	for(var i = 0 ; i<data._embedded.weatherDatas.length ; i++){
    		$scope.stationDataList.push(data._embedded.weatherDatas[i]);
    	}
    	
    	$scope.station = $scope.stationDataList;;
        //$scope.x = $scope.arrStations;
    }).error(function (status) {
        alert(status);
    });
});



