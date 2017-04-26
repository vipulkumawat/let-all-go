/**
 * Created by Google on 4/21/2017.
 */

(function() {
    'use strict';

    angular
        .module('letallApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('write', {
            parent: 'app',
            url: '/',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/write/write.html',
                    controller: 'writeController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();

