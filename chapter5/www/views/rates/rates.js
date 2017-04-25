angular.module('App')
.controller('RatesController', function ($scope, $http, Currencies) {
	console.log("calculating rates...")
	$scope.currencies = Currencies;
	$scope.load = function () {
		$http.get('https://api.bitcoinaverage.com/ticker/all').success(
			function (tickers) {
				angular.forEach($scope.currencies, function (currency) {
					console.log("!!: "+tickers[currency.code]);
					currency.ticker = tickers[currency.code];
					currency.ticker.timestamp = new Date(currency.ticker.timestamp);
				});
			}).catch(function(error) {
        console.log("error!");
    	});
	};
	$scope.load();
});