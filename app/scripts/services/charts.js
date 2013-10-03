'use strict';

angular.module('ehrApp')
  .factory('charts', function (model) {
    return {
      getScheduledPatients: function () {
        // apply a 'scheduled' transformation to a sample of our core patients
        // var patients = _.sample(model.patients, _.random(1,model.patients.length));

        var patients = model.patients;
        
        _.each(patients, function(val){
          val.cc = _.sample(model.ccs, 1)[0];
          val.last_visit = moment().subtract('days', _.random(365)).format();
          val.last_dx = _.sample(model.ccs, 1)[0];
          val.appt = moment().startOf('day').add('hours', 8).add('hours', _.random(8)).format();
          val.status = 'In Room ' + _.random(1,10);
        })

        return patients;
      }
    };
  });
