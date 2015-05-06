console.log('acountUpdate.js loaded');

slideController.controller('accountUpdateController', ['$scope', '$http', '$cookies', '$location', function($scope, $http, $cookies, $location) {
	if (!$cookies.usr_token)
		$location.path('/login');
	else {
		$scope.error = '';
		$http.get('http://slidecard.tk/v1/account')
			.success(function(data, status) {
				console.log(status + ' Account success');
				$scope.firstname = data.data.firstname;
				$scope.lastname = data.data.lastname;
				$scope.email = data.data.email;
				$scope.avatar = data.data.avatar;
				$scope.lastLogin = data.data.last_login;
				$scope.card_hash = data.data.card_hash;
				$scope.id = data.data.id;
			})
			.error(function(data, status) {
				$scope.error = status + ' / ' + data.message;
			})
		$scope.update = function() {
			if ($scope.update_password == $scope.retype_password) {
				console.log('again password SUCCESS test');
				$http.post(urlApi + '/account/update', {
					'email': $scope.update_email,
					'password': $scope.update_password,
					'firstname': $scope.fupdate_irstname,
					'lastname': $scope.update_lastname,
					'avatar': $scope.update_url_avatar
				})
				.success(function(data) {
					$cookies.usr_token = data['data'].token;
					console.log('Account Update success');
					$location.path('/account');
				})
				.error(function(data, status) {
					console.log(error);
					$scope.error = "Account Update Failed";
				})
			}
			else {
				$scope.error = 'Passwords doesn\'t matchs, try again';
				console.log('again password FAILED test');
			}

		//REMOVE
		console.log(
			$scope.firstname + " / " +
			$scope.lastname + " / " +
			$scope.email + " / " +
			$scope.retypeEmail + " / " +
			$scope.password);
		}
	}
}]);