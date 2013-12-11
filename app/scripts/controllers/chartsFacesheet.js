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



    // notifications
    $scope.$watch('patient.orders', function(a,b) {
      if($scope.patient.orders.length > 0)
        $scope.updateNotifications();
    }, true)

    $scope.updateNotifications = function() {
      $scope.notificationIndex = 0;
      $scope.notifications = [];

      _.each($scope.patient.orders, function(order) {

        // if(!order.sent) {

          // check if any tests are incomplete
          var testsComplete = true;

          _.each(order.tests, function(test) {
            if(test.dx && test.dx.length > 0) {
              $scope.removeNotification(test.id);
            } else {
              $scope.createNotification('test',test);
              testsComplete = false;
            }
          })

          // check if the order is complete
          if(testsComplete && order.insurance.primary) {
            $scope.removeNotification(order.id);
          } else {
            $scope.createNotification('order',order);
          }
        // }

      })

    }

    $scope.hasNotification = function(id) {
      return _.findWhere($scope.notifications, {id: id});
    }

    $scope.createNotification = function(type,item) {
      switch(type) {
        case 'order':
          var notification = {
            id: $scope.selected_order.id,
            type: type,
            track: {order:$scope.selected_order}, 
            path: 'Orders: Drafts: ' + $scope.selected_order.lab.name,
            description: "Incomplete Order"
          }
          break;
        case 'test':
          var notification = {
            id: item.id,
            type: type,
            track: {order:$scope.selected_order, test:item}, 
            path: 'Orders: Drafts: ' + $scope.selected_order.lab.name + ': ' + item.name,
            description: "Incomplete Dx"
          }
          break;
      }

      // if the notification does not already exist, add it
      if(!_.findWhere($scope.notifications, {id: notification.id}))
        $scope.notifications.push(notification);
    }

    $scope.removeNotification = function(id) {
      // remove the order's notification
      $scope.notifications = _.without($scope.notifications, _.findWhere($scope.notifications, {id: id}));
      $scope.notificationIndex = 0;
    }


    $scope.nextNotification = function() {
      $scope.notificationIndex = $scope.notificationIndex == $scope.notifications.length-1 ? 0 : $scope.notificationIndex + 1;
      $scope.goToNotification();
    }

    $scope.goToNotification = function() {
      var notification = $scope.notifications[$scope.notificationIndex];

      switch(notification.type) {
        case 'order':
          $scope.showOrder(notification.track.order);        
          break;
        case 'test':
          $scope.showTest(notification.track.test, notification.track.order);
          break;
      }

      $scope.scrollToSelection();
    }

    $scope.scrollToSelection = function() {
      // set a reference to the target we are scrolling to
      // var target = $('#' + $scope.editorSectionID);
      var target = $('#orders');

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

      // resets
      $timeout(function() {   // BAD FORM: use a timer to allow notification updates to complete before resetting the selected order
        $scope.reset();
      })
  	}

    $scope.reset = function() {
      $scope.selected_test = false;
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
        // id: $scope.patient.id + '-' + $scope.patient.orders.length+1,
        id: $scope.patient.id + '-' + $scope.patient.orders.length+1 + '-' + parseInt(Math.random(10) * 1000),
        sent: false,
        date: new Date(), 
        type:'lab_test',
        lab: lab,
        tests: [],
        insurance: {
          primary: '',
          secondary: '',
          payment: ''
        },
        physician: '',
        ordering: '',
        dx_all: ''
      }

      $scope.patient.orders.push(labOrder);
      $scope.showOrder(labOrder);
      // $scope.createNotification('order');
    }

    $scope.deleteOrder = function() {
      // remove any of the orders notifications if they exist; TBD: this should be part of a more robust notification system
      _.each($scope.selected_order.tests, function(el) {
        $scope.notifications = _.without($scope.notifications, _.findWhere($scope.notifications, {id: 't-'+$scope.selected_order.id+'-'+el.id}));
        $scope.notificationIndex = 0;
      })

      // delete the order
      $scope.patient.orders = _.without($scope.patient.orders, _.findWhere($scope.patient.orders, {id: $scope.selected_order.id}));

      // close the editor
      $scope.closeEditor();
    }

    $scope.submitOrder = function(order) {
      order.sent = true;
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

    $scope.checkEditorSelectionForOrder = function(order) {
      return $scope.selected_order.id==order.id && $scope.editor.type=='lab_detail';
    }

    $scope.checkEditorSelectionForTest = function(test, order) {
      if($scope.selected_test)
        return $scope.selected_test.id==test.id && $scope.selected_order.id == order.id && $scope.editor.type=='lab_test_detail';
    }

    $scope.addTest = function(test) {
      if (_.where($scope.selected_order.tests, {id:test.id}).length == 0) {
        $scope.selected_order.tests.push(test)
  
        // show the test detail panel since a dx is required
        $scope.showTest(test, $scope.selected_order);
    
        // create a notification for the required dx
        // $scope.createNotification('test');
  
        this.test = undefined;
      }
    }

    $scope.addTemplate = function(template) {
      _.each(template.tests, function(test){
        $scope.addTest(test);
      })
    }

    $scope.deleteTest = function() {
      // // delete the test
      $scope.selected_order.tests = _.without($scope.selected_order.tests, _.findWhere($scope.selected_order.tests, {id: $scope.selected_test.id}));

      // // close the editor
      $scope.closeEditor();
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