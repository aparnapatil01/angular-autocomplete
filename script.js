(function() {
    function MyController(countryService) {
        var self = this;
        // Initialize to empty array
        self.filteredCountryList = [];

        // Service to fetch country list
        countryService.getCountryList().then(function(response) {
            self.countryList = response;
        });

        self.changeCountry = function(obj) {
            self.filteredCountryList = [];
            if (obj.length > 0) {
                var filteredCountryList = self.countryList.map(function(value) {
                    // Push matched element into array
                    if (value.toLowerCase().indexOf(obj.toLowerCase()) !== -1) {
                        self.filteredCountryList.push(value);
                    }
                })
                filteredCountryList = [];
            }
        };

        self.selectedCountry = function(country) {
            self.person = {
                country: country
            };
            // Empty array after assign
            self.filteredCountryList = [];
        };
    }

    angular.module('app', ["core"]).
    controller("MyController", ['countryService', MyController]);
})();