(function () {
  'use strict';

  angular
    .module('moli')
    .controller('KeyholderController', KeyholderController);

  KeyholderController.$inject = ['$http'];

  /* @ngInject */
  function KeyholderController($http) {
    var vm = this;
    vm.keyholders = [
      {
        "id": 17763380,
        "name": "ssyu",
        "username": "sharkssyu"
      },
      {
        "id": 51141,
        "name": "BlueT",
        "username": "BlueT"
      },
      {
        "id": 12278455,
        "name": "乃嘉",
        "username": "Trustmyself79"
      },
      {
        "id": 13043549,
        "name": "保保",
        "username": "Bilthe"
      },
      {
        "id": 13043539,
        "name": "nhss",
        "username": "bf98099"
      },
      {
        "id": 8233294,
        "name": "和融",
        "username": "sunnyworm"
      },
      {
        "id": 8147952,
        "name": "ChaNg Y.y.",
        "username": "x3388638"
      },
      {
        "id": 12278450,
        "name": "小青",
        "username": "SEMI02"
      },
      {
        "id": 17447427,
        "name": "奕良",
        "username": "YiLiangChen"
      }
    ];
  }

})();
