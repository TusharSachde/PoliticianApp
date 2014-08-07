var apiServer = 'http://emahapolitician.in/politician/politician/index.php';
var restservice = angular.module('restservice', [])

.factory('RestService', function ($http) {
   
    return {
            viewall: function(){
                console.log();
                return $http.get(apiServer+"/vote/create");
            },
        region: function () {
            return $http.get(apiServer+"/region/find",{});
        },
        scheduler: function () {
            return $http.get(apiServer+"/scheduler/find",{});
        },
        mpconstituency: function () {
            return $http.get(apiServer+"/mpconstituency/find",{});
        },
        mlaconstituency: function () {
            return $http.get(apiServer+"/mlaconstituency/find",{});
        },
        image: function () {
            return $http.get(apiServer+"/image/find",{});
        },
        position: function () {
            return $http.get(apiServer+"/position/find",{});
        },
        video: function () {
            return $http.get(apiServer+"/video/find",{});
        },
        state: function () {
            return $http.get(apiServer+"/state/find",{});
        },
        mpconstituency: function () {
            return $http.get(apiServer+"/mpconstituency/find",{});
        },
        inputdetails: function (id,firstname,lastname) {
            console.log(id+firstname+lastname);
            return $http.get(apiServer+"/vote/create?id="+id+"&firstname="+firstname+"&lastname="+lastname,{});
        },
        deletecustomer: function(id){
        console.log(id);
            return $http.get(apiServer+"/welcome/deletecustid?id="+id,{});
        },
        insertmembership: function(data){
    console.log(data);
            return $http.get(apiServer+"/membership/create",{params:data});
    },
        insertuserinfo: function(data){
    console.log(data);
            return $http.get(apiServer+"/registration/create",{params:data});
    },
        insertvote: function(data){
    console.log(data);
            return $http.get(apiServer+"/vote/create",{params:data});
    },
        insertimage: function(data,image){
    console.log(data);
    console.log(image);
            return $http.get(apiServer+"/upload/create?text="+data+"&image="+image,{});
    },
        viewid: function(id){
        console.log(id);
            return $http.get(apiServer+"/vote/create?id="+id,{});
        }
    }
});