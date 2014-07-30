var startercontrollers = angular.module('starter.controllers', ['restservice'])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout, RestService) {
    // Form data for the login modal
    $scope.loginData = {};

    var image = function (data, status) {
        console.log(data);
        $scope.getimage = data;
    };
    RestService.image().success(image);

    var region = function (data, status) {
        console.log(data);
        $scope.getregion = data;
    };
    RestService.region().success(region);

    var mpconstituency = function (data, status) {
        console.log(data);
        $scope.getmpconstituency = data;
    };
    RestService.mpconstituency().success(mpconstituency);

    var mlaconstituency = function (data, status) {
        console.log(data);
        $scope.getmlaconstituency = data;
    };
    RestService.mlaconstituency().success(mlaconstituency);

    var position = function (data, status) {
        console.log(data);
        $scope.getposition = data;
    };
    RestService.position().success(position);

    var state = function (data, status) {
        console.log(data);
        $scope.getstate = data;
    };
    RestService.state().success(state);

    var video = function (data, status) {
        console.log(data);
        $scope.getvideo = data;
    };
    RestService.video().success(video);


    var insertvotesuccess = function (data, status) {
        console.log(data);

    };
    $scope.insertvote = function (data) {
        console.log("Insert button is clicked");
        RestService.insertvote(data).success(insertvotesuccess);
        //RestService.viewall().success(viewsuccess);
    };

    var insertuserinfosuccess = function (data, status) {
        console.log(data);
        $.jStorage.set("firstlogin", 1);
        $scope.closeLogin();
    };
    $scope.insertuserinfo = function (data) {
        console.log("Insert button is clicked");
        RestService.insertuserinfo(data).success(insertuserinfosuccess);
        //RestService.viewall().success(viewsuccess);
    };

    var insertmembershipsuccess = function (data, status) {
        console.log(data);

    };
    $scope.insertmembership = function (data) {
        console.log("InsertMembership button is clicked");
        RestService.insertmembership(data).success(insertmembershipsuccess);
        //RestService.viewall().success(viewsuccess);
    };



    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
        $scope.modal.hide();
    },

    // Open the login modal
    $scope.login = function () {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function () {
            $scope.closeLogin();
        }, 1000);
    };
})

.controller('VoteCtrl', function ($scope) {
    $scope.votes = [
        {
            title: 'Reggae',
            id: 1
        },
        {
            title: 'Chill',
            id: 2
        },
        {
            title: 'Dubstep',
            id: 3
        }
  ];
})

.controller('HomeCtrl', function ($scope, $stateParams, $ionicModal) {

    $scope.loginData = {};
    var firstlogin = $.jStorage.get("firstlogin");
    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/user-info.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
        if (firstlogin != 1) {
            $scope.modal.show();

        }
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
        $scope.modal.hide();
    },

    // Open the login modal
    $scope.login = function () {
        if (firstlogin != 1) {
            $scope.modal.show();
        }
    };


})

.controller('AboutCtrl', function ($scope, $stateParams, $ionicModal) {})

.controller('ArticleCtrl', function ($scope, $stateParams) {})

.controller('ArticleInsideCtrl', function ($scope, $stateParams) {
    $scope.walldata = [];
    $scope.isrefresh = false;

    $scope.refreshwall = function () {
        var db = openDatabase('mydb', '1.0', 'appdb', 2 * 1024 * 1024);
        db.transaction(function (tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS WALL (id unique, title,userdata)');
            //tx.executeSql('INSERT INTO WALL (id, title,userdata) VALUES (1, "foobar","Android")');
        });
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM WALL', [], function (tx, results) {
                var len = results.rows.length,
                    i;

                for (i = 0; i < len; i++) {
                    $scope.walldata.push(results.rows.item(i));
                    console.log(results.rows.item(i));

                }

            }, null);
        });
    };

    $scope.$on('$viewContentLoaded', function () {
        console.log("content loaded");
        $scope.refreshwall();
    });


})

.controller('ScheduleCtrl', function ($scope, $stateParams) {})

.controller('PhotosCtrl', function ($scope, $stateParams) {})

.controller('PhotosInnerCtrl', function ($scope, $stateParams, $ionicSlideBoxDelegate, $routProvider) {})

.controller('FacebookCtrl', function ($scope, $stateParams) {
    $scope.$on('$viewContentLoaded', function () {
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/all.js#xfbml=1";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    });
})

.controller('TwitterCtrl', function ($scope, $stateParams) {
    $scope.$on('$viewContentLoaded', function () {
        ! function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0],
                p = /^http:/.test(d.location) ? 'http' : 'https';
            if (!d.getElementById(id)) {
                js = d.createElement(s);
                js.id = id;
                js.src = p + "://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js, fjs);
            }
        }(document, "script", "twitter-wjs");
    });
})

.controller('MembershipCtrl', function ($scope, $stateParams) {})

.controller('UploadCtrl', function ($scope, $stateParams) {})

.controller('VoteFormCtrl', function ($scope, $stateParams) {})

.controller('VideosCtrl', function ($scope, $stateParams) {

})

.controller('YoutubeCtrl', function ($scope) {});