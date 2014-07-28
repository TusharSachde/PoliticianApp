var restservice = angular.module('restservice', [])


.factory('RestService', function ($http) {
   
    return {
            viewall: function(){
                console.log();
                return $http.get("http://localhost/politician/index.php/vote/create");
            },
        region: function () {
            return $http.get("http://localhost/politician/index.php/region/find",{});
        },
        mpconstituency: function () {
            return $http.get("http://localhost/politician/index.php/mpconstituency/find",{});
        },
        mlaconstituency: function () {
            return $http.get("http://localhost/politician/index.php/mlaconstituency/find",{});
        },
        image: function () {
            return $http.get("http://localhost/politician/index.php/image/find",{});
        },
        position: function () {
            return $http.get("http://localhost/politician/index.php/position/find",{});
        },
        video: function () {
            return $http.get("http://localhost/politician/index.php/video/find",{});
        },
        state: function () {
            return $http.get("http://localhost/politician/index.php/state/find",{});
        },
        mpconstituency: function () {
            return $http.get("http://localhost/politician/index.php/mpconstituency/find",{});
        },
        inputdetails: function (id,firstname,lastname) {
            console.log(id+firstname+lastname);
            return $http.get("http://localhost/politician/index.php/vote/create?id="+id+"&firstname="+firstname+"&lastname="+lastname,{});
        },
        deletecustomer: function(id){
        console.log(id);
            return $http.get("http://localhost/starting/index.php/welcome/deletecustid?id="+id,{});
        },
        insertmembership: function(data){
    console.log(data);
            return $http.get("http://localhost/politician/index.php/membership/create",{params:data});
    },
        insertuserinfo: function(data){
    console.log(data);
            return $http.get("http://localhost/politician/index.php/registration/create",{params:data});
    },
        insertvote: function(data){
    console.log(data);
            return $http.get("http://localhost/politician/index.php/vote/create",{params:data});
    },
        viewid: function(id){
        console.log(id);
            return $http.get("http://localhost/politician/index.php/vote/create?id="+id,{});
        }
    }
});