"use strict";angular.module("ehrApp",["ngAnimate","ui.router","ui.event","ui.keypress","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/ehr"),a.state("ehr",{url:"/ehr",templateUrl:"views/ehr.html",controller:"EhrCtrl"}).state("ehr.home",{url:"/home",templateUrl:"views/home.html"}).state("ehr.schedule",{url:"/schedule",templateUrl:"views/schedule.html"}).state("ehr.tasks",{url:"/tasks",templateUrl:"views/tasks.html"}).state("ehr.charts",{url:"/charts",templateUrl:"views/charts.html",controller:"ChartsCtrl","abstract":!0}).state("ehr.charts.scheduled",{url:"",templateUrl:"views/charts.scheduled.html",controller:"ChartsScheduledCtrl"}).state("ehr.charts.recent",{url:"/recent",templateUrl:"views/charts.recent.html"}).state("ehr.charts.search",{url:"/search",templateUrl:"views/charts.search.html",controller:"ChartsSearchCtrl"}).state("ehr.charts.patient",{url:"/:id",templateUrl:"views/charts.patient.html",controller:"ChartsPatientCtrl","abstract":!0}).state("ehr.charts.patient.facesheet",{url:"",templateUrl:"views/charts.patient.facesheet.html",controller:"ChartsFacesheetCtrl"}).state("ehr.charts.patient.timeline",{url:"/timeline",templateUrl:"views/charts.patient.timeline.html"}).state("ehr.charts.patient.encounter",{url:"/encounter",templateUrl:"views/charts.patient.encounter.html",controller:"ChartsEncounterCtrl"}).state("ehr.messages",{url:"/messages",templateUrl:"views/messages.html"}).state("ehr.reports",{url:"/reports",templateUrl:"views/reports.html"}).state("ehr.lock",{url:"/lock",templateUrl:"views/lock.html"}).state("ehr.settings",{url:"/settings",templateUrl:"views/settings.html"}).state("ehr.help",{url:"/help",templateUrl:"views/help.html"}).state("ehr.feedback",{url:"/feedback",templateUrl:"views/feedback.html"})}]),angular.module("ehrApp").controller("MainCtrl",["$scope","model",function(a,b){a.model=b}]),angular.module("ehrApp").controller("EhrCtrl",["$scope","$state","model",function(a,b,c){a.model=c,a.state=b}]),angular.module("ehrApp").directive("viewCharts",function(){return{templateUrl:"views/view_charts.html",restrict:"E",link:function(a){a.tabs=[{label:"Facesheet",value:"facesheet"},{label:"Timeline",value:"timeline"},{label:"Office Visit",value:"visit"}],a.selectedTab="visit",a.showingInfo=!1,a.charts=[{id:"p1",firstName:"Sarah",lastName:"Williams",image:"images/patient_sarah.png",dob:"1984-02-06T00:00:00+00:00",age:"29",sex:"Female",phone:"4159251230",insurance:"Blueshield",facesheet:{},timeline:{},visit:{cc:"Panic Attack",vitals:{temp:"98.8 rectal",bp:"169/77",pulse:"71",resp:"61",sat:"99%",height:"69 inches",weight:"142 lbs",bmi:"29.2"},medications:[{name:"Naproxen",method:"oral table",dosage:"500 mg",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00",refill:"(No refills)"},{name:"Neurontin (gabapentin)",method:"oral table",dosage:"300 mg",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00",refill:"(1x refill)"},{name:"Mobic (meloxicam)",method:"oral tablet",dosage:"7.5 mg",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00",refill:"(No refills)"},{name:"Flexeril (cyclobeuraprine)",method:"oral tablet",dosage:"300 mg",doctor:"Dr. Marie Sheffield",date:"9/23/2013",refill:"(refill due)"},{name:"Ibuprofen",method:"oral tabelt",dosage:" 200 mg",doctor:"Patient",date:"9/23/2013",refill:"(No refills)"}],problems:[{name:"Sciatica",metric:"724.3",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"},{name:"Obesity, unspecified",metric:"278.00",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"},{name:"Lumbosacral spondylosis without myelopathy",metric:"721.3",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"},{name:"Lumbago",metric:"724.2",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"},{name:"Closed fracture of vault of skull with other and unspecified intracranial hemorrhage with prolonged (more than 24 hours) loss of consciousness and return to pre-existing conscious level",metric:"724.3",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"},{name:"Unspecified essential hypertension",metric:"278.00",doctor:"Patient",date:"2013-09-13T00:00:00+00:00"}],historyMedical:[{name:"Low back pain",doctor:"Patient",date:"2013-09-13T00:00:00+00:00"},{name:"Unspecified essential hypertension",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"}],historySurgical:[{name:"Appendectomy",doctor:"Patient",date:"2013-09-13T00:00:00+00:00"}],historyFamily:[{name:"Heart disease",details:"Father",notes:"Age 56"},{name:"Kidney disease",details:"Mother",notes:"Age 61"}],historySocial:[{name:"Current smoker",details:"22 pack years",notes:""},{name:"Alcohol use",details:"5 drinks a week",notes:""},{name:"Illicit drug use",details:"Occasional marijuana",notes:""},{name:"Sexually active",details:"Male & female partners",notes:"Condom contraception"}],activities:[]}},{id:"p2",firstName:"William",lastName:"Yang",image:"images/patient_silhouette.png",dob:"1980-04-11T00:00:00+00:00",age:"33",sex:"Male",phone:"4151234567",insurance:"Obama Care",facesheet:{},timeline:{},visit:{cc:"Flu",vitals:{temp:"98.8 rectal",bp:"169/77",pulse:"71",resp:"61",sat:"99%",height:"69 inches",weight:"142 lbs",bmi:"29.2"},medications:[{name:"Naproxen",method:"oral table",dosage:"500 mg",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00",refill:"(No refills)"},{name:"Neurontin (gabapentin)",method:"oral table",dosage:"300 mg",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00",refill:"(1x refill)"},{name:"Mobic (meloxicam)",method:"oral tablet",dosage:"7.5 mg",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00",refill:"(No refills)"},{name:"Flexeril (cyclobeuraprine)",method:"oral tablet",dosage:"300 mg",doctor:"Dr. Marie Sheffield",date:"9/23/2013",refill:"(refill due)"},{name:"Ibuprofen",method:"oral tabelt",dosage:" 200 mg",doctor:"Patient",date:"9/23/2013",refill:"(No refills)"}],problems:[{name:"Sciatica",metric:"724.3",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"},{name:"Obesity, unspecified",metric:"278.00",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"},{name:"Lumbosacral spondylosis without myelopathy",metric:"721.3",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"},{name:"Lumbago",metric:"724.2",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"},{name:"Closed fracture of vault of skull with other and unspecified intracranial hemorrhage with prolonged (more than 24 hours) loss of consciousness and return to pre-existing conscious level",metric:"724.3",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"},{name:"Unspecified essential hypertension",metric:"278.00",doctor:"Patient",date:"2013-09-13T00:00:00+00:00"}],historyMedical:[{name:"Low back pain",doctor:"Patient",date:"2013-09-13T00:00:00+00:00"},{name:"Unspecified essential hypertension",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"}],historySurgical:[{name:"Appendectomy",doctor:"Patient",date:"2013-09-13T00:00:00+00:00"}],historyFamily:[{name:"Heart disease",details:"Father",notes:"Age 56"},{name:"Kidney disease",details:"Mother",notes:"Age 61"}],historySocial:[{name:"Current smoker",details:"22 pack years",notes:""},{name:"Alcohol use",details:"5 drinks a week",notes:""},{name:"Illicit drug use",details:"Occasional marijuana",notes:""},{name:"Sexually active",details:"Male & female partners",notes:"Condom contraception"}],activities:[]}}],a.patientLabel=function(a,b){return a+" "+b},a.selectPatient=function(b){a.selectedPatient=b?b:a.charts[0]},a.selectPatient()}}}),angular.module("ehrApp").controller("ChartsCtrl",["$scope","$state",function(a,b){a.searchUpdate=function(c){a.search=c,c?"ehr.charts.search"!=b.current.name&&(a.preSearchState=b.current.name,b.go("ehr.charts.search")):b.go(a.preSearchState)}}]),angular.module("ehrApp").controller("ChartsScheduledCtrl",["$scope","model","charts",function(a,b,c){b.scheduledPatients||c.getScheduledPatients(),a.today=moment().format("dddd, MMM Do"),a.search=""}]),angular.module("ehrApp").factory("model",function(){return{now:moment().format("MM/DD/YYYY"),labs:[{id:"lab-1",name:"Quest-1",logo:"images/quest.png"},{id:"lab-2",name:"Quest-2",logo:"images/quest.png"},{id:"lab-3",name:"Quest-3",logo:"images/quest.png"}],lab_tests:[{id:"lab_test_1",name:"Complete Blood Count (CBC)",dx:"",fasting:!1,cholesterol:!1,test_date:{value:!1,date:""},note:""},{id:"lab_test_2",name:"Estrogen",dx:"",fasting:!1,cholesterol:!1,test_date:{value:!1,date:""},note:""},{id:"lab_test_3",name:"Lipids Panel",dx:"",fasting:!1,cholesterol:!1,test_date:{value:!1,date:""},note:""},{id:"lab_test_4",name:"Liver Function",dx:"",fasting:!1,cholesterol:!1,test_date:{value:!1,date:""},note:""},{id:"lab_test_5",name:"Urinalysis",dx:"",fasting:!1,cholesterol:!1,test_date:{value:!1,date:""},note:""},{id:"lab_test_6",name:"Basic Metabolic Profile (BMP)",dx:"",fasting:!1,cholesterol:!1,test_date:{value:!1,date:""},note:""},{id:"lab_test_7",name:"Serum Calcium",dx:"",fasting:!1,cholesterol:!1,test_date:{value:!1,date:""},note:""},{id:"lab_test_8",name:"Fasting Blood Glucose",dx:"",fasting:!1,cholesterol:!1,test_date:{value:!1,date:""},note:""}],lab_test_templates:[{id:"lab_test_template_1",name:"Hypertension - Females Over 25",tests:[{id:"lab_test_6",name:"Basic Metabolic Profile (BMP)"},{id:"lab_test_8",name:"Fasting Blood Glucose"},{id:"lab_test_3",name:"Lipids Panel"},{id:"lab_test_7",name:"Serum Calcium"},{id:"lab_test_5",name:"Urinalysis"}]}],lab_test_recents:[{id:"lab_test_8",name:"Fasting Blood Glucose"},{id:"lab_test_3",name:"Lipids Panel"},{id:"lab_test_5",name:"Urinalysis"}],dx:["Acute Upper Respiratory Infection","Hypertension","Laryngitis","Lumbago","Migraines"],ccs:["Influenza","Panic Attack","Hypertension","Diabetes","Anemia"],drugs:["Naproxen","Neurontin (Gabapentin)","Mobic (Meloxicam)","Flexeril (Cyclobeuraprine)","Ibuprofen","Xanax (ALPRAZolam)","MS Contin (Morphine)"],drugMethods:["oral tablet"],doctors:["Dr. Marie Sheffield","Dr. Smith","Dr. Rogers"],refills:["No refills","1x refill","refill due"],problems:["Sciatica","Obesity, unspecified","Lumbosacral Spondylosis Without Myelopathy","Lumbago","Unspecified Essential Hypertension"],surgeries:["Appendectomy","Tonsilectomy","Quadruple Bypass","Liver Transplant"],diseases:["Heart Disease","Kidney Disease","Diabetes"],relations:["Mother","Father","Sister","Brother","Uncle","Aunt","Grandmother","Grandfather","Son","Daughter"],socials:[{name:"Current Smoker",info:"22 packs/year",detail:""},{name:"Alcohol Use",info:"5 drinks/week",detail:""},{name:"Illicit Drug Use",info:"Occasional marijuana",detail:""},{name:"Sexually Active",info:"Male & female partners",detail:"Condom contraception"}],psychs:["Depression","Schizophrenia"],insurance:["Anthem","Blueshield","Kaiser","MetLife","VSP"],patients:[{id:"00000001",image:"images/patient_sarah.png",firstName:"Sarah",lastName:"Williams",sex:"Female",dob:"1984-02-05T00:00:00.00",phone:"4151234567",insurance:"Blueshield",ssn:"123-45-6789",address:{city:"Berkeley",state:"CA"},orders:[]},{id:"00000002",image:"images/patient_alfred.png",firstName:"Alfred",lastName:"Zhang",sex:"Male",dob:"1950-04-12T00:00:00.00",phone:"4151234567",insurance:"Blueshield",ssn:"234-56-7890",address:{city:"San Francisco",state:"CA"},orders:[]},{id:"00000003",image:"images/patient_elsa.png",firstName:"Elsa",lastName:"Freude",sex:"Female",dob:"1930-10-25T00:00:00.00",phone:"4151234567",insurance:"Blueshield",ssn:"345-67-8901",address:{city:"Oakland",state:"CA"},orders:[]}]}}),angular.module("ehrApp").factory("charts",["model","$http",function(a){return{getScheduledPatients:function(){var b=_.sample(a.patients,_.random(1,a.patients.length));_.each(b,function(b){b.cc=_.sample(a.ccs,1)[0],b.last_visit=moment().subtract("days",_.random(365)).format(),b.last_dx=_.sample(a.ccs,1)[0],b.appt=moment().startOf("day").add("hours",8).add("hours",_.random(8)).format(),b.status="In Room "+_.random(1,10)}),a.scheduledPatients=b},getPatientFacesheet:function(b){var c=_.where(a.patients,{id:b})[0];c.cds={cds:"This patient is at high risk for COPD based on smoking history patient reported symptoms",interventor:"Boehringer Ingelheim Pharmaceuticals, Inc",citor:"Boehringer Ingelheim Pharmaceuticals, Inc",sponsor:"Boehringer Ingelheim Pharmaceuticals, Inc"},c.medications=[];for(var d=0;1>d;d++){var e={};e.name=_.sample(a.drugs,1)[0],e.method=_.sample(a.drugMethods,1)[0],e.dosage=Math.round(1e3*Math.random())/10+" mg",e.doctor=_.sample(a.doctors,1)[0],e.date=moment().subtract("days",_.random(1e3)).format(),e.refill="("+_.sample(a.refills,1)[0]+")",c.medications.push(e)}c.problems=[];for(var d=0;d<_.random(1,a.problems.length);d++){var f={};f.name=_.sample(a.problems,1)[0],f.metric=Math.round(1e3*Math.random())/10+" mg",f.doctor=_.sample(a.doctors,1)[0],f.date=moment().subtract("days",_.random(1e3)).format(),c.problems.push(f)}c.medicalHistory=[];for(var d=0;d<_.random(1,a.problems.length);d++){var g={};g.name=_.sample(a.problems,1)[0],g.metric=Math.round(1e3*Math.random())/10+" mg",g.doctor=_.sample(a.doctors,1)[0],g.date=moment().subtract("days",_.random(1e3)).format(),c.medicalHistory.push(g)}c.surgicalHistory=[];for(var d=0;d<_.random(1,a.surgeries.length);d++){var h={};h.name=_.sample(a.surgeries,1)[0],h.metric=Math.round(1e3*Math.random())/10+" mg",h.doctor=_.sample(a.doctors,1)[0],h.date=moment().subtract("days",_.random(1e3)).format(),c.surgicalHistory.push(h)}c.familyHistory=[];for(var d=0;d<_.random(1,a.diseases.length);d++){var i={};i.name=_.sample(a.diseases,1)[0],i.relation=_.sample(a.relations,1)[0],i.date=moment().subtract("years",_.random(100)).format(),c.familyHistory.push(i)}c.socialHistory=[];for(var d=0;d<_.random(1,a.socials.length);d++)c.socialHistory.push(_.sample(a.socials,1)[0]);c.psychAssessments=[];for(var d=0;d<_.random(1,a.psychs.length);d++){var j={};j.name=_.sample(a.psychs,1)[0],j.doctor=_.sample(a.doctors,1)[0],j.date=moment().subtract("years",_.random(10)).format(),c.psychAssessments.push(j)}return c},getSearchablePatients:function(){var b=a.patients;_.each(b,function(a){a.last_visit=moment().subtract("days",_.random(365)).format()}),a.searchablePatients=b}}}]),angular.module("ehrApp").filter("age",function(){return function(a){return-1*moment.duration(moment(a)-moment()).years()}}),angular.module("ehrApp").filter("phone",function(){return function(a){if(!a)return"";var b=a.toString().trim().replace(/^\+/,"");if(b.match(/[^0-9]/))return a;var c,d,e;switch(b.length){case 10:c=1,d=b.slice(0,3),e=b.slice(3);break;case 11:c=b[0],d=b.slice(1,4),e=b.slice(4);break;case 12:c=b.slice(0,3),d=b.slice(3,5),e=b.slice(5);break;default:return a}return 1==c&&(c=""),e=e.slice(0,3)+"-"+e.slice(3),(c+" ("+d+") "+e).trim()}}),angular.module("ehrApp").controller("ChartsPatientCtrl",["$scope","$stateParams","charts",function(a,b,c){a.patient=c.getPatientFacesheet(b.id)}]),angular.module("ehrApp").controller("ChartsSearchCtrl",["$scope","model","charts",function(a,b,c){b.searchablePatients||c.getSearchablePatients()}]),angular.module("ehrApp").controller("ChartsFacesheetCtrl",["$scope","$timeout",function(){}]),angular.module("ehrApp").directive("grid",function(){return{templateUrl:"views/grid.html",restrict:"E",link:function(){}}}),angular.module("ehrApp").directive("focusMe",["$timeout","$parse",function(a,b){return{link:function(c,d,e){var f=b(e.focusMe);c.$watch(f,function(b){b===!0&&a(function(){d[0].focus()})})}}}]),angular.module("ehrApp").directive("focus",["$parse",function(a){return function(b,c,d){var e=a(d.focus);c.bind("focus",function(a){b.$apply(function(){e(b,{$event:a})})})}}]),angular.module("ehrApp").directive("editorLabSelection",function(){return{templateUrl:"views/editor_lab_selection.html",restrict:"E",link:function(){}}}),angular.module("ehrApp").directive("editorLabDetail",function(){return{templateUrl:"views/editor_lab_detail.html",restrict:"E",link:function(){}}}),angular.module("ehrApp").directive("editorLabTestSelection",function(){return{templateUrl:"views/editor_lab_test_selection.html",restrict:"E",link:function(){}}}),angular.module("ehrApp").directive("editorLabTestDetail",function(){return{templateUrl:"views/editor_lab_test_detail.html",restrict:"E",link:function(){}}}),angular.module("ehrApp").directive("editorOrder",function(){return{templateUrl:"views/editor_order.html",restrict:"E",link:function(){}}}),angular.module("ehrApp").controller("ChartsEncounterCtrl",["$scope","$timeout",function(a,b){a.cdsMore=!1,a.editorSectionID=!1,a.orderTypes={value:"default",options:[{label:"Add Order",value:"default"},{label:"Image",value:""},{label:"Lab",value:"lab_test"},{label:"Medication",value:""},{label:"Patient Education",value:""},{label:"Procedure",value:""},{label:"Referral",value:""}]},a.$watch("showing",function(){if(a.showing)switch(a.showing.toLowerCase()){case"cds":a.showCDS=!0,a.cdsMore=!1}a.showing="Show..."}),a.$watch("patient.orders",function(){a.patient.orders.length>0&&a.updateNotifications()},!0),a.updateNotifications=function(){a.notificationIndex=0,a.notifications=[],_.each(a.patient.orders,function(b){if(b.tests.length>0){var c=!1;_.each(b.tests,function(b){b.dx&&b.dx.length>0?(a.removeNotification(b.id),c=!0):(a.createNotification("test",b,"missing dx"),c=!1)}),c?a.removeNotification(b.id):a.createNotification("order",b,"dx required for all tests")}else a.createNotification("order",b,"missing tests")})},a.hasNotification=function(b){return _.findWhere(a.notifications,{id:b})},a.createNotification=function(b,c,d){switch(b){case"order":var e={id:a.selected_order.id,type:b,track:{order:a.selected_order},path:"Orders: "+a.selected_order.name,description:d};break;case"test":var e={id:c.id,type:b,track:{order:a.selected_order,test:c},path:"Orders: "+a.selected_order.name+": "+c.name,description:d}}_.findWhere(a.notifications,{id:e.id})||a.notifications.push(e)},a.removeNotification=function(b){a.notifications=_.without(a.notifications,_.findWhere(a.notifications,{id:b})),a.notificationIndex=0},a.nextNotification=function(){a.notificationIndex=a.notificationIndex==a.notifications.length-1?0:a.notificationIndex+1,a.goToNotification()},a.goToNotification=function(){var b=a.notifications[a.notificationIndex];switch(b.type){case"order":a.showOrder(b.track.order);break;case"test":a.showTest(b.track.test,b.track.order)}a.scrollToSelection()},a.scrollToSelection=function(){var a=$("#orders");b(function(){var b=0;a.prevAll().each(function(){b+=$(this).outerHeight(!0)}),$(".scroll").animate({scrollTop:b},"slow")},0)},a.editor=!1,a.showEditor=function(b,c){a.editorSectionID=c,a.editor={type:b},a.resetScrollPosition()},a.closeEditor=function(c){a.editor=!1,a.resetScrollPosition(c),b(function(){a.reset()})},a.reset=function(){a.selected_test=!1,a.selected_order=!1},a.done=function(){a.selected_test?a.showOrder(a.selected_order):a.closeEditor()},a.applyAll=function(){a.all_dx=a.selected_test.dx,_.each(a.selected_order.tests,function(b){b.dx=a.all_dx})},a.resetScrollPosition=function(){var c=$("#"+a.editorSectionID),d=c.offset().top-c.parent().offset().top;b(function(){var a=0;c.prevAll().each(function(){a+=$(this).outerHeight(!0)}),$(".scroll").scrollTop(a-d)},0)},a.slides=[{type:"a"},{type:"b"}],a.next=function(){a.slides[1].active=!0},a.selected_order=!1,a.$watch("orderTypes.value",function(b){if("Add Order"!=b){switch(b.toLowerCase()){case"lab_test":a.addLabOrder()}a.orderTypes.value="default"}}),a.addLabOrder=function(){var b=a.patient.orders.length+1,c={id:a.patient.id+"-"+a.patient.orders.length+1+"-"+parseInt(1e3*Math.random(10)),name:"Lab Order "+b,sent:!1,date:new Date,type:"lab_test",lab:!1,tests:[],insurance:{primary:"",secondary:"",payment:""},physician:"",ordering:"",dx_all:""};a.patient.orders.push(c),a.showOrder(c)},a.deleteOrder=function(){_.each(a.selected_order.tests,function(b){a.notifications=_.without(a.notifications,_.findWhere(a.notifications,{id:"t-"+a.selected_order.id+"-"+b.id})),a.notificationIndex=0}),a.patient.orders=_.without(a.patient.orders,_.findWhere(a.patient.orders,{id:a.selected_order.id})),a.closeEditor()},a.submitOrder=function(b){b.sent=!0,a.closeEditor()},a.showOrder=function(b){a.selected_order=b,a.showEditor("lab_test","orders"),a.selected_test=!1,a.goToSlide(0)},a.showLab=function(b){a.selected_lab=b},a.showTest=function(b,c){a.selected_test=b,a.selected_order=c,a.showEditor("lab_test","orders"),a.goToSlide(1)},a.onFocus=function(){a.showEditor("lab_test_selection","orders")},a.checkEditorSelectionForOrder=function(b){return a.selected_order.id==b.id&&!a.selected_test},a.checkEditorSelectionForLab=function(b,c){return a.selected_lab?a.selected_lab.id==b.id&&a.selected_order.id==c.id&&"lab_detail"==a.editor.type:void 0},a.checkEditorSelectionForTest=function(b,c){return a.selected_test?a.selected_test.id==b.id&&a.selected_order.id==c.id:void 0},a.addTest=function(b){0==_.where(a.selected_order.tests,{id:b.id}).length&&(a.all_dx&&(b.dx=a.all_dx),a.selected_order.tests.push(b),this.test=void 0),a.showTest(b,a.selected_order)},a.addTemplate=function(b){_.each(b.tests,function(b){a.addTest(b)}),a.showTest(a.selected_order.tests[0],a.selected_order)},a.deleteTest=function(){a.selected_order.tests=_.without(a.selected_order.tests,_.findWhere(a.selected_order.tests,{id:a.selected_test.id})),a.showOrder(a.selected_order)},a.goToSlide=function(a){$(".slides").animate({left:-357*a},200)},a.prevTest=function(){var b=_.indexOf(a.selected_order.tests,a.selected_test);b>0&&(a.selected_test=a.selected_order.tests[b-1])},a.nextTest=function(){var b=_.indexOf(a.selected_order.tests,a.selected_test);b<a.selected_order.tests.length-1&&(a.selected_test=a.selected_order.tests[b+1])}}]);