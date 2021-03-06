slideApp.config(['$routeProvider', '$httpProvider',
				function ($routeProvider, $httpProvider) {
	$routeProvider.
	when('/login', {
		templateUrl: 'html/login.html',
		controller: 'loginController',
		controllerAs: 'login'
	}).
	when('/logout', {
		templateUrl: 'html/logout.html',
		controller: 'logoutController',
		controllerAs: 'logout'
	}).
	when('/account', {
		templateUrl: 'html/account.html',
		controller: 'accountController',
		controllerAs: 'account'
	}).
	when('/account/update', {
		templateUrl: 'html/accountUpdate.html',
		controller: 'accountUpdateController',
		controllerAs: 'accountUpdate'
	}).
	when('/account/settings', {
		templateUrl: 'html/settings.html',
		controller: 'accountUpdateController',
		controllerAs: 'accountUpdate'
	}).
	when('/register', {
		templateUrl: 'html/register.html',
		controller: 'registerController',
		controllerAs: 'register'
	}).
	when('/template', {
		templateUrl: 'html/templateList.html',
		controller: 'templateListController',
		controllerAs: 'templateList'
	}).
	when('/templateCreate', {
		templateUrl: 'html/templateCreate.html',
		controller: 'templateCreateController',
		controllerAs: 'templateCreate'
	}).
	when('/template/delete/:id', {
		templateUrl: 'html/templateDelete.html',
		controller: 'templateDeleteController',
		controllerAs: 'templateDelete'
	}).
	when('/cardList', {
		templateUrl: 'html/cardList.html',
		controller: 'cardListController',
		controllerAs: 'cardList'
	}).
	when('/cardCreate', {
		templateUrl: 'html/cardCreate.html',
		controller: 'cardCreateController',
		controllerAs: 'cardCreate'
	}).
	when('/card/delete/:id', {
		templateUrl: 'html/cardDelete.html',
		controller: 'cardDeleteController',
		controllerAs: 'cardDelete'
	}).
	when('/card/:id', {
		templateUrl: 'html/cardDetail.html',
		controller: 'cardDetailController',
		controllerAs: 'cardDetail'
	}).
	when('/card/update/:id', {
		templateUrl: 'html/cardUpdate.html',
		controller: 'cardUpdateController',
		controllerAs: 'cardUpdate'
	}).
	when('/collection', {
		templateUrl: 'html/collectionList.html',
		controller: 'collectionListController',
		controllerAs: 'collectionList'
	}).
	when('/collection/delete/:id', {
		templateUrl: 'html/collectionDelete.html',
		controller: 'collectionDeleteController',
		controllerAs: 'collectionDelete'
	}).
	when('/contactList', {
		templateUrl: 'html/contactList.html',
		controller: 'contactListController',
		controllerAs: 'contactList'
	}).
	when('/collectionMapCard', {
		templateUrl: 'html/collectionMapCard.html',
		controller: 'collectionMapCardController',
		controllerAs: 'collectionMapCard'
	}).
	when('/welcome', {
		templateUrl: 'html/welcome.html',
		controller: 'welcomeController',
		controllerAs: 'welcome'
	}).
	when('/application', {
		templateUrl: 'html/applications.html',
		controller: 'welcomeController',
		controllerAs: 'welcome'
	}).
	when('/reportbug', {
		templateUrl: 'html/reportBug.html',
		controller: 'reportbugControllerController',
		controllerAs: 'reportbug'
	}).
	otherwise({ redirectTo: '/welcome' });

    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);
