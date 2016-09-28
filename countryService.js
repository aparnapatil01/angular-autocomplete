angular.module("core", []).
service('countryService', function($http, $q) {
    this.getCountryList = function() {
        var url = 'server/country_list.json',
            deferred = $q.defer();

        $http.get(url).
        success(function(data) {
            deferred.resolve(data);
        }).
        error(function() {
            deferred.reject();
        });
        return deferred.promise;
    };
});