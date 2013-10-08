'use strict';

angular.module('ehrApp')
  .factory('charts', function (model) {
    return {
      getScheduledPatients: function () {
        // apply a 'scheduled' transformation to a sample of our core patients
        var patients = _.sample(model.patients, _.random(1,model.patients.length));

        _.each(patients, function(val){
          val.cc = _.sample(model.ccs, 1)[0];
          val.last_visit = moment().subtract('days', _.random(365)).format();
          val.last_dx = _.sample(model.ccs, 1)[0];
          val.appt = moment().startOf('day').add('hours', 8).add('hours', _.random(8)).format();
          val.status = 'In Room ' + _.random(1,10);
        })

        model.scheduledPatients = patients;
      },
      getPatientFacesheet: function(id) {
        // apply a 'facesheet' transformation to basic patient object
        var patient = _.where(model.patients, {id:id})[0];

        // create medications
        patient.medications = [];

        for(var i=0; i<_.random(1,model.drugs.length); i++) {
          var med = {};
          med.name = _.sample(model.drugs,1)[0];
          med.method = _.sample(model.drugMethods,1)[0];
          med.dosage = Math.round(Math.random() * 1000)/10 + ' mg';
          med.doctor = _.sample(model.doctors,1)[0];
          med.date = moment().subtract('days', _.random(1000)).format();
          med.refill = '(' + _.sample(model.refills,1)[0] + ')';
          patient.medications.push(med);
        }

        // create problems
        patient.problems = [];

        for(var i=0; i<_.random(1,model.problems.length); i++) {
          var problem = {};
          problem.name = _.sample(model.problems,1)[0];
          problem.metric = Math.round(Math.random() * 1000)/10 + ' mg';
          problem.doctor = _.sample(model.doctors,1)[0];
          problem.date = moment().subtract('days', _.random(1000)).format();
          patient.problems.push(problem);
        }

        // create medical history
        patient.medicalHistory = [];

        for(var i=0; i<_.random(1,model.problems.length); i++) {
          var medHis = {};
          medHis.name = _.sample(model.problems,1)[0];
          medHis.metric = Math.round(Math.random() * 1000)/10 + ' mg';
          medHis.doctor = _.sample(model.doctors,1)[0];
          medHis.date = moment().subtract('days', _.random(1000)).format();
          patient.medicalHistory.push(medHis);
        }

        // create surgical history
        patient.surgicalHistory = [];

        for(var i=0; i<_.random(1,model.surgeries.length); i++) {
          var surHis = {};
          surHis.name = _.sample(model.surgeries,1)[0];
          surHis.metric = Math.round(Math.random() * 1000)/10 + ' mg';
          surHis.doctor = _.sample(model.doctors,1)[0];
          surHis.date = moment().subtract('days', _.random(1000)).format();
          patient.surgicalHistory.push(surHis);
        }

        // create family history
        patient.familyHistory = [];

        for(var i=0; i<_.random(1,model.diseases.length); i++) {
          var famHis = {};
          famHis.name = _.sample(model.diseases,1)[0];
          famHis.relation = _.sample(model.relations,1)[0];
          famHis.date = moment().subtract('days', _.random(1000)).format();
          patient.familyHistory.push(famHis);
        }

        return patient;
      },
      getSearchablePatients: function(id) {
        // apply a 'search' transformation to basic patient object
        var patients = model.patients;

        _.each(patients, function(val){
          val.last_visit = moment().subtract('days', _.random(365)).format();
        })

        model.searchablePatients = patients;
      },
    };
  });