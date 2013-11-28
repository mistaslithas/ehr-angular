'use strict';

angular.module('ehrApp')
  .controller('ChartsFacesheetCtrl', function ($scope,$timeout) {

    $scope.cdsMore = false;
    $scope.editorSectionID = false;

    $scope.orderTypes = {
      value: 'default',
      options: [
        {label:'Add Order', value:'default'},
        {label:'Image', value:''},
        {label:'Intervention', value:''},
        {label:'Lab Test', value:'lab_selection'},
        {label:'Medication', value:''},
        {label:'Patient Education', value:''},
        {label:'Procedure', value:''},
        {label:'Referral', value:''}
      ]
    };

    $scope.insurance = {
        value: 'default',
        options: [
          {label:'Select primary insurance', value:'default'},
          {label:'Anthem', value:''},
          {label:'Blueshield', value:''},
          {label:'Kaiser', value:'lab_selection'},
          {label:'MetLife', value:''},
          {label:'VSP', value:''}
        ]
      };

    // watch for changes in the show menu
    $scope.$watch('showing', function(){
      if($scope.showing) {
        switch($scope.showing.toLowerCase()) {
          case 'cds':
            $scope.showCDS = true;
            $scope.cdsMore = false;
            break;
          case 'tasks':
            $scope.showTasks = true;
            break;
        }
      }

      // reset menu
      $scope.showing = 'Show...';
    })


    // tasks
    $scope.taskIndex = 0;
    $scope.tasks = [];

    $scope.nextTask = function() {
      $scope.taskIndex = $scope.taskIndex == $scope.tasks.length-1 ? 0 : $scope.taskIndex + 1;
    }

    $scope.goToTask = function() {
      var task = $scope.tasks[$scope.taskIndex];
      $scope.showTest(task.track.test, task.track.order);
      $scope.scrollToSelection();
    }

    $scope.createTask = function() {
      var task = {
        id:'t-'+$scope.selected_order.id+'-'+$scope.selected_test.id,
        track: {order:$scope.selected_order, test:$scope.selected_test}, 
        description: 'Incomplete Dx (Orders: ' + $scope.selected_order.lab.name + ': ' + $scope.selected_test.name + ')'
      }
      $scope.tasks.push(task);
    }

    $scope.checkDx = function(dx) {
      if(dx) {
        // we have a dx, remove its task
        $scope.tasks = _.without($scope.tasks, _.findWhere($scope.tasks, {id: 't-'+$scope.selected_order.id+'-'+$scope.selected_test.id}));
      } else {
        // we don't have a dx, add its task
        $scope.createTask();
      }

      $scope.showTasks = false;
    }





  	// show/hide the editor
  	$scope.editor = false;

  	$scope.showEditor = function(editorType,editorSectionID) {
      // set a flag to the editor's section
      $scope.editorSectionID = editorSectionID;

      // set the editor flag
      // this will open the appropriate editor
      $scope.editor = {
        type: editorType
      }

      // ensure the content stays in the same position as it resizes
      $scope.resetScrollPosition();
  	}

  	$scope.closeEditor = function(scrollTarget) {

      // close the editor
  		$scope.editor = false;

      // ensure the content stays in the same position as it resizes
      $scope.resetScrollPosition(scrollTarget);

      // display tasks if necessary
      if($scope.tasks.length > 0)
        $scope.showTasks = true;

      // resets
      $scope.editorSectionID = false;
      $scope.selected_order = false;
  	}

    $scope.resetScrollPosition = function() {
      // set a reference to the target we are scrolling to
      var target = $('#' + $scope.editorSectionID);

      // record the active section's scroll position
      var targetScrollPos = target.offset().top - target.parent().offset().top;

      // reposition the active section to the same location it was in before the editor resized the content area
      $timeout(function(){

        // get the y location of the active section
        var targetVPos = 0;

        target.prevAll().each(function() {
          targetVPos += $(this).outerHeight(true);
        });

        // reset the content scroll location
        $('.scroll').scrollTop(targetVPos - targetScrollPos);
      },0)
    }










    // hacky micro transaction for ordering
    $scope.selected_order = false;

    $scope.$watch('orderTypes.value', function(val) {
      if(val != "Add Order") {

        switch(val.toLowerCase()) {
          case 'lab_selection':
            $scope.showEditor(val,'orders');
            $scope.selected_order = false;
            break;
        }

        //reset the select
        $scope.orderTypes.value = "default";
      }
    })

    $scope.addLabOrder = function(lab) {
      var labOrder = {
        id: $scope.patient.id + '-' + $scope.patient.orders.length+1, 
        type:'lab_test',
        lab: lab,
        tests: []
      }

      $scope.patient.orders.push(labOrder);
      $scope.showOrder(labOrder);
    }

    $scope.showOrder = function(order) {
      $scope.selected_order = order;
      $scope.showEditor('lab_detail','orders');
    }

    $scope.showTest = function(test, order) {
      $scope.selected_test = test;
      $scope.showEditor('lab_test_detail','orders');
      $scope.selected_order = order;
    }

    $scope.onFocus = function() {
      $scope.showEditor('lab_test_selection','orders');
    }

    $scope.checkLabCriteria = function(order) {
      return $scope.selected_order.id==order.id && $scope.editor.type=='lab_detail';
    }

    $scope.checkTestCriteria = function(test, order) {
      if($scope.selected_test)
        return $scope.selected_test.id==test.id && $scope.selected_order.id == order.id && $scope.editor.type=='lab_test_detail';
    }

    $scope.addTest = function(test) {
      if (_.where($scope.selected_order.tests, test).length == 0)
        $scope.selected_order.tests.push(test)

      // show the test detail panel since a dx is required
      $scope.showTest(test, $scope.selected_order);

      // create a task for the required dx
      $scope.createTask();

      this.test = undefined;
    }

    $scope.addTemplate = function(template) {
      _.each(template.tests, function(test){
        $scope.addTest(test);
      })
    }

    $scope.scrollToSelection = function() {
      // set a reference to the target we are scrolling to
      var target = $('#' + $scope.editorSectionID);

      // reposition the active section to the same location it was in before the editor resized the content area
      $timeout(function(){

        // get the y location of the active section
        var targetVPos = 0;

        target.prevAll().each(function() {
          targetVPos += $(this).outerHeight(true);
        });

        // reset the content scroll location
        $(".scroll").animate({scrollTop: targetVPos}, "slow");

      },0)
    }





    // window.onkeyup = function(e) {
    //   switch(e.keyCode) {
    //     case 9: //tab
    //       if(document.activeElement.tabIndex == 9 || document.activeElement.tabIndex == 7 || document.activeElement.tabIndex == 0)
    //         document.getElementById('select1').focus();
    //       break;
    //     case 13: //return
    //       $scope.selected_order = false;
    //       $scope.editing = 'select_lab';
    //       break;
    //     case 38: //up
    //       $scope.editing = 'selected_order'
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