'use strict';

angular.module('ehrApp')
  .controller('ChartsEncounterCtrl', function ($scope,$timeout) {

 $scope.cdsMore = false;
    $scope.editorSectionID = false;

    $scope.orderTypes = {
      value: 'default',
      options: [
        {label:'Add Order', value:'default'},
        {label:'Image', value:''},
        {label:'Lab', value:'lab_test'},
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


    // --------------------------------------------------------------
    // NOTIFICATIONS ------------------------------------------------
    // --------------------------------------------------------------

    $scope.$watch('patient.orders', function(a,b) {
      if($scope.patient.orders.length > 0)
        $scope.updateNotifications();
    }, true)

    $scope.updateNotifications = function() {
      // TBD: RETHINK NOTIFICATIONS SYSTEM

      $scope.notificationIndex = 0;
      $scope.notifications = [];

      _.each($scope.patient.orders, function(order) {
        if(order.tests.length > 0) {
          // check if any tests are incomplete
          var testsComplete = false;

          _.each(order.tests, function(test) {
            // check for dx requirement
            if(test.dx && test.dx.length > 0) {
              $scope.removeNotification(test.id);
              testsComplete = true;
            } else {
              $scope.createNotification('test',test,'missing dx');
              testsComplete = false;
            }
          })

          // check if the order is complete
        //   if(testsComplete) {
      	 //    $scope.removeNotification(order.id);
        //   } else {
        //   	$scope.createNotification('order',order,'dx required for all tests');
    		  // }
        // } else {
  	     //    $scope.createNotification('order',order,'missing tests');
      	}
      })

    }

    $scope.hasNotification = function(id) {
      return _.findWhere($scope.notifications, {id: id});
    }

    $scope.createNotification = function(type,item,description) {
      switch(type) {
        case 'order':
          var notification = {
            id: $scope.selected_order.id,
            type: type,
            track: {order:$scope.selected_order}, 
            path: 'Orders: ' + $scope.selected_order.name,
            description: description
          }
          break;
        case 'test':
          var notification = {
            id: item.id,
            type: type,
            track: {order:$scope.selected_order, test:item}, 
            path: 'Orders: ' + $scope.selected_order.name + ': ' + item.name,
            description: description
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

      $scope.showTest(notification.track.test, notification.track.order, _.indexOf(notification.track.order.tests, notification.track.test));
      $scope.scrollToSelection();
    }




    // --------------------------------------------------------------
    // SCROLL CONTROL
    // --------------------------------------------------------------

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

  	$scope.showEditor = function(editorType,editorSectionID,idx) {
      // set a flag to the editor's section
      $scope.editorSectionID = editorSectionID;

      // set the editor flag
      // this will open the appropriate editor
      $scope.editor = {
        type: editorType
      }

      // ensure the content stays in the same position as it resizes
      $scope.resetScrollPosition();

      // init the editor's slider
      $('#carousel-editor-order').carousel({pause:true,interval:false});

      // allow the slide repeater to finish before setting the slide idx and going to that slide
      $timeout(function(){
        $scope.slideIdx = idx;
        // the carousel is not setting the active class on the slide if we close the editor on slide 0
        // force the active class on the slide in this case
        if($scope.closingSlideIdx > 0)
          $('#carousel-editor-order .item').eq(idx).addClass('active');
      });
  	}

  	$scope.closeEditor = function(scrollTarget) {

      // close the editor
  		$scope.editor = false;

      // ensure the content stays in the same position as it resizes
      $scope.resetScrollPosition(scrollTarget);

      // remember what slide we were on before we closed
      // needed to fix a strange bug in the bootstrap carousel
      $scope.closingSlideIdx = $scope.slideIdx;

      // resets
      $timeout(function() {   // BAD FORM: use a timer to allow notification updates to complete before resetting the selected order
        $scope.reset();
      })
  	}

    $scope.reset = function() {
      $scope.selected_test = false;
      $scope.selected_order = false;
      $scope.showTestInputs = false;
      $scope.slideIdx = 0;
    }

    $scope.done = function() {
      if($scope.selected_test) {
        $scope.showOrder($scope.selected_order);
      } else {
        $scope.closeEditor();
      }
    }

    $scope.applyAll = function() {
      _.each($scope.selected_order.tests,function(test){
        test.dx = $scope.selected_order.dx_all;
      })

      // $scope.showTestInputs = $scope.selected_order.dx_all ? true : false;
      // console.log($scope.showTestInputs)

      $scope.updateNotifications();

      $timeout(function(){
	      $('#input_add_test').focus();
      })
    }

    // scroll control

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





    // slides
    $scope.slides = [{type:'a'},{type:'b'}];

    $scope.next = function() {
      $scope.slides[1].active = true;
    }




    // hacky micro transaction for ordering
    $scope.selected_order = false;

    $scope.$watch('orderTypes.value', function(val) {
      if(val != "Add Order") {

        switch(val.toLowerCase()) {
          case 'lab_test':
            $scope.addLabOrder();
            // $scope.showEditor(val,'orders');
            // $scope.selected_order = false;
            break;
        }

        //reset the select
        $scope.orderTypes.value = "default";
      }
    })

    $scope.getAddTestPlaceholder = function() {
      if($scope.selected_order)
    	 return $scope.selected_order.tests.length > 0 ? 'Add another test' : 'Add a test';
    }

    $scope.addLabOrder = function() {
    	var idx = $scope.patient.orders.length+1;
      var labOrder = {
        id: $scope.patient.id + '-' + $scope.patient.orders.length+1 + '-' + parseInt(Math.random(10) * 1000),
        name: "Lab Order " + idx,
        sent: false,
        date: new Date(), 
        type:'lab_test',
        lab: false,
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
      $scope.closeEditor();
    }

    $scope.showOrder = function(order) {
      $scope.selected_order = order;
      $scope.selected_test = false;

      if(!$scope.editor) {
        $scope.showEditor('lab_test','orders',0);
      }

      $scope.slideIdx = 0;
    }
    
    $scope.showLab = function(lab) {
      $scope.selected_lab = lab;
      // $scope.showEditor('lab_detail','orders');
    }

    $scope.showTest = function(test, order, idx) {
      if($scope.editor) {
        // editor is already open; user clicked on a test link in the editor
        $scope.selected_test = test;
        $scope.slideIdx = idx+1;
      } else {
        // editor is not open; user clicked on a test link on the left
        $scope.selected_order = order;
        $scope.selected_test = test;
        $scope.showEditor('lab_test','orders',idx+1);
      }
    }

    $scope.onFocus = function() {
      $scope.showEditor('lab_test_selection','orders');
    }

    $scope.checkEditorSelectionForOrder = function(order) {
      return $scope.selected_order.id==order.id && !$scope.selected_test;
    }

    $scope.checkEditorSelectionForLab = function(lab, order) {
      if($scope.selected_lab)
        return $scope.selected_lab.id==lab.id && $scope.selected_order.id == order.id && $scope.editor.type=='lab_detail';
    }

    $scope.checkEditorSelectionForTest = function(test, order) {
      if($scope.selected_test)
        return $scope.selected_test.id==test.id && $scope.selected_order.id == order.id;
    }

    $scope.addTest = function(test) {
      if (_.where($scope.selected_order.tests, {id:test.id}).length == 0) {
        if($scope.selected_order.dx_all)
          test.dx = $scope.selected_order.dx_all;

        test.collection_date = new Date();

        $scope.selected_order.tests.push(test)
        this.test = undefined;
      }
    }

    $scope.addTemplate = function(template) {
      _.each(template.tests, function(test){
        $scope.addTest(test);
      })

      // $scope.showTest($scope.selected_order.tests[0], $scope.selected_order)
    }

    $scope.deleteTest = function(test) {
      // delete the test
      $scope.selected_order.tests = _.without($scope.selected_order.tests, _.findWhere($scope.selected_order.tests, {id: test.id}));

      // show order
      $scope.showOrder($scope.selected_order);
    }

    $scope.labSelected = function() {
      $timeout(function(){
	      $('#input_all_dx').focus();
      })
    }

    $scope.hasDrafts = function() {
    	return _.findWhere($scope.patient.orders, {sent: false});
    }

    $scope.hasPending = function() {
    	return _.findWhere($scope.patient.orders, {sent: true});
    }




    // SLIDES

    $scope.slideIdx = 0;

    $scope.$watch('slideIdx',function(val){
      $timeout(function(){
        $('#carousel-editor-order').carousel(val);
        $scope.manageSelection();
      })
    })

    $scope.goToSlide = function(idx) {
      $scope.slideIdx = idx;
    }

    $scope.goNextSlide = function() {
      $scope.slideIdx = $scope.slideIdx+1;
    }

    $scope.goPrevSlide = function() {
      $scope.slideIdx = $scope.slideIdx-1;
    }

    $scope.manageSelection = function() {
      if($scope.slideIdx>0)
        $scope.selected_test = $scope.selected_order.tests[$scope.slideIdx-1];
      else
        $scope.selected_test = false;
    }

    $scope.getNextDisabled = function() {
      var val = true;

      if($scope.selected_order.tests && $scope.selected_order.tests.length>0) {
        val = false;
      }

      return val;
    }



    // $scope.prevTest = function() {
    //   var idx = _.indexOf($scope.selected_order.tests, $scope.selected_test);

    //   if(idx > 0) {
    //     $scope.selected_test = $scope.selected_order.tests[idx-1];
    //   }
    // }

    // $scope.nextTest = function() {
    //   var idx = _.indexOf($scope.selected_order.tests, $scope.selected_test);

    //   if(idx < $scope.selected_order.tests.length-1) {
    //     $scope.selected_test = $scope.selected_order.tests[idx+1];
    //   }
    // }

    // $scope.test = function(idx) {
    //   $('.carousel').carousel(idx);
    // }


 $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: "Dynamic Group Header - 1",
      content: "Dynamic Group Body - 1"
    },
    {
      title: "Dynamic Group Header - 2",
      content: "Dynamic Group Body - 2"
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };


  });
