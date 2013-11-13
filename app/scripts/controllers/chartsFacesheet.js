'use strict';

angular.module('ehrApp')
  .controller('ChartsFacesheetCtrl', function ($scope) {

    $scope.cdsMore = false;

    // watch for changes in the show menu
    $scope.$watch('showing', function(){
      if($scope.showing) {
        switch($scope.showing.toLowerCase()) {
          case 'cds':
            $scope.showCDS = true;
            $scope.cdsMore = false;
            break;
        }
      }

      // reset menu
      $scope.showing = 'Show...';
    })

  	// show/hide the editor
  	$scope.editing = false;

  	$scope.showEditor = function(title) {

  		$scope.editing = true;
  		$scope.editorTitle = title;
  	}

  	$scope.closeEditor = function() {
  		$scope.editing = false;

      // resets
      $scope.selected_lab = false;
  	}



    // hacky micro transaction for ordering
    $scope.order = "Add Order";
    $scope.labs = [
      {
        id: 'Quest-12307128742',
        logo: 'images/quest.png',
        name: 'Quest'
      },
      {
        id: 'Quest-13298723843',
        logo: 'images/quest.png',
        name: 'Quest'
      },
      {
        id: 'Quest-14049509334',
        logo: 'images/quest.png',
        name: 'Quest'
      }
    ];
    $scope.selected_lab = false;

    $scope.$watch('order', function(){
      if($scope.order != "Add Order") {

        switch($scope.order.toLowerCase()) {
          case 'lab test':
            $scope.editing = 'select_lab';
            break;
        }

        //reset the select
        $scope.order = "Add Order";
      }
    })

    $scope.addLab = function(lab) {
      $scope.patient.orders.push(lab);
      $scope.showLab(lab);
    }

    $scope.showLab = function(lab) {
      $scope.selected_lab = lab;
      $scope.editing = "selected_lab";
    }

    $scope.onFocus = function() {
      $scope.editing = 'add_lab';
    }

    $scope.checkLabCriteria = function(order) {
      return $scope.selected_lab.id==order.id && $scope.editing=='selected_lab';
    }

    // window.onkeyup = function(e) {
    //   switch(e.keyCode) {
    //     case 9: //tab
    //       if(document.activeElement.tabIndex == 9 || document.activeElement.tabIndex == 7 || document.activeElement.tabIndex == 0)
    //         document.getElementById('select1').focus();
    //       break;
    //     case 13: //return
    //       $scope.selected_lab = false;
    //       $scope.editing = 'select_lab';
    //       break;
    //     case 38: //up
    //       $scope.editing = 'selected_lab'
    //       document.getElementById('input_test').blur();
    //       break;
    //     case 40: //down
    //       $scope.editing = 'add_lab'
    //       document.getElementById('input_test').focus();
    //       break;
    //     case 27: //esc
    //       $scope.closeEditor();
    //       break;
    //   }

    //   $scope.$apply();
    // }

  });
