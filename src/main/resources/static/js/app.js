//alert('In the beginning!');
/*
//var app = angular.module('myApp', []);
angular.module('myApp', ['ngRoute'])
.controller('myCtrl', function($scope, $http) {
	$scope.arrStations = new Array();
	//alert('hej');
    $http.get("http://localhost:9090/stations/2")
    .then(function(response) {
    	$scope.x = 'hej';
    	alert(response.stationName);
    	$scope.arrStations.push(response.stationName);
    });
});
*/

/*
alert('hej');
angular
.module('myApp', ['ngRoute'])
.controller('myCtrl', 
  function($scope) {

    $scope.x = 'hello';
  }
]);

/*
angular.module('myApp', [])
.config(['$sceDelegateProvider', function($sceDelegateProvider) {
  // We must whitelist the JSONP endpoint that we are using to show that we trust it
  $sceDelegateProvider.resourceUrlWhitelist([
	'http://localhost:9090/stations/2',                                         
    'self',
    'https://angularjs.org/**'
  ]);
}])
.controller('myCtrl', ['$scope', '$http', '$templateCache',
  function($scope, $http, $templateCache) {
	$scope.arrStations = new Array();
    $scope.method = 'GET';
    $scope.url = 'http://localhost:9090/stations/2';

    $scope.fetch = function() {
      $scope.code = null;
      $scope.response = null;

      $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
        then(function(response) {
        	alert(response.stationName);
        	$scope.arrStations.push(response.stationName);
          //$scope.status = response.status;
          //$scope.data = response.data;
        }, function(response) {
        	alert('Failed');
          $scope.data = response.data || 'Request failed';
          $scope.status = response.status;
      });
    };

    $scope.updateModel = function(method, url) {
      $scope.method = method;
      $scope.url = url;
    };
  }]);
*/

var app = angular.module('myApp', ['ngRoute']);
app.controller('myCtrl', function($scope,$http) {
	$scope.arrStations = new Array();
    $http.get("http://localhost:9090/stations").success(function (data) {
    	
    	//$scope.arrStations.push(data._embedded.stations.stationName);
    	//alert(data._embedded.stations[1].stationName);
    	for(var i = 0 ; i<data._embedded.stations.length ; i++){
    		$scope.arrStations.push(data._embedded.stations[i].stationName);
    	}
    	//alert(data.stationName);
    	//$scope.list = 'hoppsan';
        //$.map(data, function (item) {
        	//alert(item.stationName);
            //arrBooks.push(data.stationName);
        	//arrBooks.push('hejsan!');
        //});

        $scope.x = $scope.arrStations;
    }).error(function (status) {
    	//arrBooks.push('hejsan!');
        alert(status);
    });
});


/*angular.module('weatherApp', []).controller('weatherCtrl', function ($scope, $http) {
            $scope.ProductList = null;
            //Declaring the function to load data from database
            $scope.fillProductList = function () {
                $http({
                    method: 'GET',
                    url: 'station',
                    data: {}
                }).success(function (result) {
                    $scope.ProductList = result.d;
                });
            };
            //Calling the function to load the data on pageload
            $scope.fillProductList();
});
*/



/*
var myApp = angular.module('myApp', []);
    myApp.controller('myController', function ($scope, $http) {
        
        var arrBooks = new Array();
        $http.get("http://localhost:9090/stations.json").success(function (data) {

            $.map(data, function (item) {
                //arrBooks.push(item.id);
            	arrBooks.push('hejsan!');
            });

            $scope.list = arrBooks;
        }).error(function (status) {
        	arrBooks.push('hejsan!');
            alert(status);
        });
    });
*/
/*
var app = angular.module('myApp', []);
app.controller('myController', function($scope, $http) {
	//$scope.taskName = 'hallu';
    $http.get('/station/')
    .then(function (response) {$scope.taskName = response.data.records;});
});
*/
/*
var app = angular.module('weatherApp', []);
app.service('weatherApp', function($http) {
	  this.getData = function() {
	     return $http({
	         method: 'GET',
	         url: 'station',
	     }).success(function(data){
	       return data;
	     }).error(function(){
	        alert("error");
	        return null ;
	     });
	  }
	});
app.controller('weatherCtrl', function($scope, dataService) {
	   $scope.data = null;
	   dataService.getData().then(function(response) {
	       $scope.data = response;
	   });
	})
*/
