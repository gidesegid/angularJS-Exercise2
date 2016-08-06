var app=angular.module('mainApp',[])
app.controller('ctrlmusic',musics)



function musics($scope,$http){
	//using service $scope and $http
	$http.get('http://api-nghyf.rhcloud.com/films')
	.success(function(response)
	{
		$scope.musics=response;
		$scope.films=[];
		for(var i=0;i<$scope.response.length;i++){
           $scope.films.push(i);
		}
		$scope.musics=$scope.films
	})
}
/*app.directive('actorTitle',function(){

	return{
		restrict:'EA',
		scope:{
			actor:'='
		}
		template:'<strong>hello from directive</strong'//or link to html file
	}
})*/