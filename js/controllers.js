angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  },

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('VoteCtrl', function($scope) {
  $scope.votes = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 }
  ];
})

.controller('HomeCtrl', function($scope, $stateParams, $ionicModal) {

    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/user-info.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
        $scope.modal.show();
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
        $scope.modal.hide();
    },

        // Open the login modal
        $scope.login = function() {
        $scope.modal.show();
    };


})

.controller('AboutCtrl', function($scope, $stateParams, $ionicModal) {
})

.controller('ArticleCtrl', function($scope, $stateParams) {
})

.controller('ArticleInsideCtrl', function($scope, $stateParams) {
    $scope.walldata=[];
    $scope.isrefresh=false;
    var db = openDatabase('mydb', '1.0', 'appdb', 2 * 1024 * 1024);
    db.transaction(function (tx) {  
        tx.executeSql('CREATE TABLE IF NOT EXISTS WALL (id unique, title,userdata)');
        //tx.executeSql('INSERT INTO WALL (id, title,userdata) VALUES (1, "foobar","Android")');
    });
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM WALL', [], function (tx, results) {
            var len = results.rows.length, i;
            
            for (i = 0; i < len; i++){
                $scope.walldata.push(results.rows.item(i));
               console.log(results.rows.item(i) );
                
            }
            
        }, null);
    });
    
    
    $scope.$on('$viewContentLoaded', function () {
        console.log("content loaded");
        
    });
    
    
})

.controller('ScheduleCtrl', function($scope, $stateParams) {
})

.controller('PhotosCtrl', function($scope, $stateParams) {
})

.controller('PhotosInnerCtrl', function($scope, $stateParams, $ionicSlideBoxDelegate) {
})

.controller('FacebookCtrl', function($scope, $stateParams) {
    $scope.$on('$viewContentLoaded', function () {
        (function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "//connect.facebook.net/en_US/all.js#xfbml=1"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'facebook-jssdk'));
    });
})

.controller('TwitterCtrl', function($scope, $stateParams) {
    $scope.$on('$viewContentLoaded', function () {
        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
    });
})

.controller('MembershipCtrl', function($scope, $stateParams) {
})

.controller('UploadCtrl', function($scope, $stateParams) {
})

.controller('VoteFormCtrl', function($scope, $stateParams) {
})

.controller('VideosCtrl', function($scope, $stateParams) {
    
})

.controller('YoutubeCtrl', function($scope) {
});