angular.module('App')
.controller('ReservationController', function ($scope) {
	console.log("loading reservation!");
	$scope.reservation = {
		checkin: new Date(),
		checkout: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
		room: 156,
		rate: 121,
		wifi: 'resortwifi'
	};
	console.log("room: "+$scope.reservation.room);
});