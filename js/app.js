angular.module("tableApp",[])
.controller("tableController", function($scope){

	$scope.locArray = [{
		'number': 123456789,
		'doc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam similique amet eum totam ad a in sed, velit reiciendis aliquam.',
		'region': 'Миколаївська обл.',
		'district': 'Арбузинський р-н',
		'settlement': 'Арбузівка'
	}];

	$scope.addNew = function(){

		$scope.locArray.push({
		'number': $scope.number,
		'doc': $scope.doc,
		'region': $scope.region,
		'district': $scope.district,
		'settlement': $scope.settlement
	});
		$scope.number = '';
		$scope.doc = '';
		$scope.region = '';
		$scope.district = '';
		$scope.settlement = '';
	}

	$scope.delTr = function(idx){
		$scope.locArray.splice(idx, 1);
	}

});
