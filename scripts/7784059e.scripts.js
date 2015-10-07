"use strict";angular.module("ehrApp",["ui.router","ui.event","ui.keypress","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/ehr"),a.state("ehr",{url:"/ehr",templateUrl:"views/ehr.html",controller:"EhrCtrl"}).state("ehr.home",{url:"/home",templateUrl:"views/home.html"}).state("ehr.schedule",{url:"/schedule",templateUrl:"views/schedule.html"}).state("ehr.tasks",{url:"/tasks",templateUrl:"views/tasks.html"}).state("ehr.charts",{url:"/charts",templateUrl:"views/charts.html",controller:"ChartsCtrl","abstract":!0}).state("ehr.charts.scheduled",{url:"",templateUrl:"views/charts.scheduled.html",controller:"ChartsScheduledCtrl"}).state("ehr.charts.recent",{url:"/recent",templateUrl:"views/charts.recent.html"}).state("ehr.charts.search",{url:"/search",templateUrl:"views/charts.search.html",controller:"ChartsSearchCtrl"}).state("ehr.charts.patient",{url:"/:id",templateUrl:"views/charts.patient.html",controller:"ChartsPatientCtrl"}).state("ehr.charts.patient.facesheet",{url:"",templateUrl:"views/charts.patient.facesheet.html",controller:"ChartsFacesheetCtrl"}).state("ehr.charts.patient.timeline",{url:"/timeline",templateUrl:"views/charts.patient.timeline.html"}).state("ehr.charts.patient.encounter",{url:"/encounter",templateUrl:"views/charts.patient.encounter.html",controller:"ChartsEncounterCtrl"}).state("ehr.messages",{url:"/messages",templateUrl:"views/messages.html"}).state("ehr.reports",{url:"/reports",templateUrl:"views/reports.html"}).state("ehr.lock",{url:"/lock",templateUrl:"views/lock.html"}).state("ehr.settings",{url:"/settings",templateUrl:"views/settings.html"}).state("ehr.help",{url:"/help",templateUrl:"views/help.html"}).state("ehr.feedback",{url:"/feedback",templateUrl:"views/feedback.html"})}]),angular.module("ehrApp").controller("MainCtrl",["$scope","model",function(a,b){a.model=b}]),angular.module("ehrApp").controller("EhrCtrl",["$scope","$state","model",function(a,b,c){a.model=c,a.state=b}]),angular.module("ehrApp").directive("viewCharts",function(){return{templateUrl:"views/view_charts.html",restrict:"E",link:function(a,b,c){a.tabs=[{label:"Facesheet",value:"facesheet"},{label:"Timeline",value:"timeline"},{label:"Office Visit",value:"visit"}],a.selectedTab="visit",a.showingInfo=!1,a.charts=[{id:"p1",firstName:"Sarah",lastName:"Williams",image:"images/patient_sarah.png",dob:"1984-02-06T00:00:00+00:00",age:"29",sex:"Female",phone:"4159251230",insurance:"Blueshield",facesheet:{},timeline:{},visit:{cc:"Panic Attack",vitals:{temp:"98.8 rectal",bp:"169/77",pulse:"71",resp:"61",sat:"99%",height:"69 inches",weight:"142 lbs",bmi:"29.2"},medications:[{name:"Naproxen",method:"oral table",dosage:"500 mg",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00",refill:"(No refills)"},{name:"Neurontin (gabapentin)",method:"oral table",dosage:"300 mg",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00",refill:"(1x refill)"},{name:"Mobic (meloxicam)",method:"oral tablet",dosage:"7.5 mg",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00",refill:"(No refills)"},{name:"Flexeril (cyclobeuraprine)",method:"oral tablet",dosage:"300 mg",doctor:"Dr. Marie Sheffield",date:"9/23/2013",refill:"(refill due)"},{name:"Ibuprofen",method:"oral tabelt",dosage:" 200 mg",doctor:"Patient",date:"9/23/2013",refill:"(No refills)"}],problems:[{name:"Sciatica",metric:"724.3",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"},{name:"Obesity, unspecified",metric:"278.00",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"},{name:"Lumbosacral spondylosis without myelopathy",metric:"721.3",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"},{name:"Lumbago",metric:"724.2",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"},{name:"Closed fracture of vault of skull with other and unspecified intracranial hemorrhage with prolonged (more than 24 hours) loss of consciousness and return to pre-existing conscious level",metric:"724.3",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"},{name:"Unspecified essential hypertension",metric:"278.00",doctor:"Patient",date:"2013-09-13T00:00:00+00:00"}],historyMedical:[{name:"Low back pain",doctor:"Patient",date:"2013-09-13T00:00:00+00:00"},{name:"Unspecified essential hypertension",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"}],historySurgical:[{name:"Appendectomy",doctor:"Patient",date:"2013-09-13T00:00:00+00:00"}],historyFamily:[{name:"Heart disease",details:"Father",notes:"Age 56"},{name:"Kidney disease",details:"Mother",notes:"Age 61"}],historySocial:[{name:"Current smoker",details:"22 pack years",notes:""},{name:"Alcohol use",details:"5 drinks a week",notes:""},{name:"Illicit drug use",details:"Occasional marijuana",notes:""},{name:"Sexually active",details:"Male & female partners",notes:"Condom contraception"}],activities:[]}},{id:"p2",firstName:"William",lastName:"Yang",image:"images/patient_silhouette.png",dob:"1980-04-11T00:00:00+00:00",age:"33",sex:"Male",phone:"4151234567",insurance:"Obama Care",facesheet:{},timeline:{},visit:{cc:"Flu",vitals:{temp:"98.8 rectal",bp:"169/77",pulse:"71",resp:"61",sat:"99%",height:"69 inches",weight:"142 lbs",bmi:"29.2"},medications:[{name:"Naproxen",method:"oral table",dosage:"500 mg",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00",refill:"(No refills)"},{name:"Neurontin (gabapentin)",method:"oral table",dosage:"300 mg",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00",refill:"(1x refill)"},{name:"Mobic (meloxicam)",method:"oral tablet",dosage:"7.5 mg",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00",refill:"(No refills)"},{name:"Flexeril (cyclobeuraprine)",method:"oral tablet",dosage:"300 mg",doctor:"Dr. Marie Sheffield",date:"9/23/2013",refill:"(refill due)"},{name:"Ibuprofen",method:"oral tabelt",dosage:" 200 mg",doctor:"Patient",date:"9/23/2013",refill:"(No refills)"}],problems:[{name:"Sciatica",metric:"724.3",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"},{name:"Obesity, unspecified",metric:"278.00",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"},{name:"Lumbosacral spondylosis without myelopathy",metric:"721.3",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"},{name:"Lumbago",metric:"724.2",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"},{name:"Closed fracture of vault of skull with other and unspecified intracranial hemorrhage with prolonged (more than 24 hours) loss of consciousness and return to pre-existing conscious level",metric:"724.3",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"},{name:"Unspecified essential hypertension",metric:"278.00",doctor:"Patient",date:"2013-09-13T00:00:00+00:00"}],historyMedical:[{name:"Low back pain",doctor:"Patient",date:"2013-09-13T00:00:00+00:00"},{name:"Unspecified essential hypertension",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"}],historySurgical:[{name:"Appendectomy",doctor:"Patient",date:"2013-09-13T00:00:00+00:00"}],historyFamily:[{name:"Heart disease",details:"Father",notes:"Age 56"},{name:"Kidney disease",details:"Mother",notes:"Age 61"}],historySocial:[{name:"Current smoker",details:"22 pack years",notes:""},{name:"Alcohol use",details:"5 drinks a week",notes:""},{name:"Illicit drug use",details:"Occasional marijuana",notes:""},{name:"Sexually active",details:"Male & female partners",notes:"Condom contraception"}],activities:[]}}],a.patientLabel=function(a,b){return a+" "+b},a.selectPatient=function(b){b?a.selectedPatient=b:a.selectedPatient=a.charts[0]},a.selectPatient()}}}),angular.module("ehrApp").controller("ChartsCtrl",["$scope","$state",function(a,b){a.searchUpdate=function(c){a.search=c,c?"ehr.charts.search"!=b.current.name&&(a.preSearchState=b.current.name,b.go("ehr.charts.search")):b.go(a.preSearchState)}}]),angular.module("ehrApp").controller("ChartsScheduledCtrl",["$scope","model","charts",function(a,b,c){b.scheduledPatients||c.getScheduledPatients(),a.today=moment().format("dddd, MMM Do"),a.search=""}]),angular.module("ehrApp").factory("model",function(){return{now:moment().format("MM/DD/YYYY"),labs:[{id:"lab-1",name:"Quest-1",logo:"images/quest.png"},{id:"lab-2",name:"Quest-2",logo:"images/quest.png"},{id:"lab-3",name:"Quest-3",logo:"images/quest.png"}],lab_tests:[{id:"lab_test_1",name:"278.0 Complete Blood Count (CBC)",dx:"",fasting:!1,cholesterol:!1,test_date:{value:!1,date:""},note:""},{id:"lab_test_2",name:"796.4 Estradiol",dx:"",fasting:!1,cholesterol:!1,test_date:{value:!1,date:""},note:""},{id:"lab_test_3",name:"272.4 Lipids Panel",dx:"",fasting:!1,cholesterol:!1,test_date:{value:!1,date:""},note:""},{id:"lab_test_4",name:"794.8 Liver Function",dx:"",fasting:!1,cholesterol:!1,test_date:{value:!1,date:""},note:""},{id:"lab_test_5",name:"791.9 Urinalysis",dx:"",fasting:!1,cholesterol:!1,test_date:{value:!1,date:""},note:""},{id:"lab_test_6",name:"401.9 Basic Metabolic Profile (BMP)",dx:"",fasting:!1,cholesterol:!1,test_date:{value:!1,date:""},note:""},{id:"lab_test_7",name:"269.3 Serum Calcium",dx:"",fasting:!1,cholesterol:!1,test_date:{value:!1,date:""},note:""},{id:"lab_test_8",name:"790.21 Fasting Blood Glucose",dx:"",fasting:!1,cholesterol:!1,test_date:{value:!1,date:""},note:""}],lab_test_templates:[{id:"lab_test_template_1",name:"Hypertension - Females Over 25",tests:[{id:"lab_test_6",name:"401.9 Basic Metabolic Profile (BMP)"},{id:"lab_test_8",name:"790.21 Fasting Blood Glucose"},{id:"lab_test_3",name:"272.4 Lipids Panel"},{id:"lab_test_7",name:"269.3 Serum Calcium"},{id:"lab_test_5",name:"791.9 Urinalysis"}]}],collected:["Blood, venous","Blood, arterial","Urine, clean catch","Sputum"],dx:["Acute Upper Respiratory Infection","Hypercholesterolemia","Hypertension","Laryngitis","Lumbago","Migraines"],ccs:["Influenza","Panic Attack","Hypertension","Diabetes","Anemia"],drugs:["Naproxen","Neurontin (Gabapentin)","Mobic (Meloxicam)","Flexeril (Cyclobeuraprine)","Ibuprofen","Xanax (ALPRAZolam)","MS Contin (Morphine)"],drugMethods:["oral tablet"],doctors:["Dr. Marie Sheffield","Dr. Smith","Dr. Rogers"],refills:["No refills","1x refill","refill due"],problems:["Sciatica","Obesity, unspecified","Lumbosacral Spondylosis Without Myelopathy","Lumbago","Unspecified Essential Hypertension"],surgeries:["Appendectomy","Tonsilectomy","Quadruple Bypass","Liver Transplant"],diseases:["Heart Disease","Kidney Disease","Diabetes"],relations:["Mother","Father","Sister","Brother","Uncle","Aunt","Grandmother","Grandfather","Son","Daughter"],socials:[{name:"Current Smoker",info:"22 packs/year",detail:""},{name:"Alcohol Use",info:"5 drinks/week",detail:""},{name:"Illicit Drug Use",info:"Occasional marijuana",detail:""},{name:"Sexually Active",info:"Male & female partners",detail:"Condom contraception"}],psychs:["Depression","Schizophrenia"],insurance:["Anthem","Blueshield","Kaiser","MetLife","VSP"],patients:[{id:"00000001",image:"images/patient_sarah.png",firstName:"Sarah",lastName:"Williams",sex:"Female",dob:"1984-02-05T00:00:00.00",phone:"4151234567",insurance:"Blueshield",ssn:"123-45-6789",address:{city:"Berkeley",state:"CA"},orders:[]},{id:"00000002",image:"images/patient_alfred.png",firstName:"Alfred",lastName:"Zhang",sex:"Male",dob:"1950-04-12T00:00:00.00",phone:"4151234567",insurance:"Blueshield",ssn:"234-56-7890",address:{city:"San Francisco",state:"CA"},orders:[]},{id:"00000003",image:"images/patient_elsa.png",firstName:"Elsa",lastName:"Freude",sex:"Female",dob:"1930-10-25T00:00:00.00",phone:"4151234567",insurance:"Blueshield",ssn:"345-67-8901",address:{city:"Oakland",state:"CA"},orders:[]}]}}),angular.module("ehrApp").factory("charts",["model","$http",function(a,b){return{getScheduledPatients:function(){var b=_.sample(a.patients,_.random(1,a.patients.length));_.each(b,function(b){b.cc=_.sample(a.ccs,1)[0],b.last_visit=moment().subtract("days",_.random(365)).format(),b.last_dx=_.sample(a.ccs,1)[0],b.appt=moment().startOf("day").add("hours",8).add("hours",_.random(8)).format(),b.status="In Room "+_.random(1,10)}),a.scheduledPatients=b},getPatientFacesheet:function(b){var c=_.where(a.patients,{id:b})[0];c.cds={cds:"This patient is at high risk for COPD based on smoking history patient reported symptoms",interventor:"Boehringer Ingelheim Pharmaceuticals, Inc",citor:"Boehringer Ingelheim Pharmaceuticals, Inc",sponsor:"Boehringer Ingelheim Pharmaceuticals, Inc"},c.medications=[];for(var d=0;1>d;d++){var e={};e.name=_.sample(a.drugs,1)[0],e.method=_.sample(a.drugMethods,1)[0],e.dosage=Math.round(1e3*Math.random())/10+" mg",e.doctor=_.sample(a.doctors,1)[0],e.date=moment().subtract("days",_.random(1e3)).format(),e.refill="("+_.sample(a.refills,1)[0]+")",c.medications.push(e)}c.problems=[];for(var d=0;d<_.random(1,a.problems.length);d++){var f={};f.name=_.sample(a.problems,1)[0],f.metric=Math.round(1e3*Math.random())/10+" mg",f.doctor=_.sample(a.doctors,1)[0],f.date=moment().subtract("days",_.random(1e3)).format(),c.problems.push(f)}c.medicalHistory=[];for(var d=0;d<_.random(1,a.problems.length);d++){var g={};g.name=_.sample(a.problems,1)[0],g.metric=Math.round(1e3*Math.random())/10+" mg",g.doctor=_.sample(a.doctors,1)[0],g.date=moment().subtract("days",_.random(1e3)).format(),c.medicalHistory.push(g)}c.surgicalHistory=[];for(var d=0;d<_.random(1,a.surgeries.length);d++){var h={};h.name=_.sample(a.surgeries,1)[0],h.metric=Math.round(1e3*Math.random())/10+" mg",h.doctor=_.sample(a.doctors,1)[0],h.date=moment().subtract("days",_.random(1e3)).format(),c.surgicalHistory.push(h)}c.familyHistory=[];for(var d=0;d<_.random(1,a.diseases.length);d++){var i={};i.name=_.sample(a.diseases,1)[0],i.relation=_.sample(a.relations,1)[0],i.date=moment().subtract("years",_.random(100)).format(),c.familyHistory.push(i)}c.socialHistory=[];for(var d=0;d<_.random(1,a.socials.length);d++)c.socialHistory.push(_.sample(a.socials,1)[0]);c.psychAssessments=[];for(var d=0;d<_.random(1,a.psychs.length);d++){var j={};j.name=_.sample(a.psychs,1)[0],j.doctor=_.sample(a.doctors,1)[0],j.date=moment().subtract("years",_.random(10)).format(),c.psychAssessments.push(j)}return c},getSearchablePatients:function(b){var c=a.patients;_.each(c,function(a){a.last_visit=moment().subtract("days",_.random(365)).format()}),a.searchablePatients=c}}}]),angular.module("ehrApp").filter("age",function(){return function(a){return-1*moment.duration(moment(a)-moment()).years()}}),angular.module("ehrApp").filter("phone",function(){return function(a){if(!a)return"";var b=a.toString().trim().replace(/^\+/,"");if(b.match(/[^0-9]/))return a;var c,d,e;switch(b.length){case 10:c=1,d=b.slice(0,3),e=b.slice(3);break;case 11:c=b[0],d=b.slice(1,4),e=b.slice(4);break;case 12:c=b.slice(0,3),d=b.slice(3,5),e=b.slice(5);break;default:return a}return 1==c&&(c=""),e=e.slice(0,3)+"-"+e.slice(3),(c+" ("+d+") "+e).trim()}}),angular.module("ehrApp").controller("ChartsPatientCtrl",["$scope","$stateParams","charts",function(a,b,c){a.patient=c.getPatientFacesheet(b.id)}]),angular.module("ehrApp").controller("ChartsSearchCtrl",["$scope","model","charts",function(a,b,c){b.searchablePatients||c.getSearchablePatients()}]),angular.module("ehrApp").controller("ChartsFacesheetCtrl",["$scope","$timeout",function(a,b){}]),angular.module("ehrApp").directive("grid",function(){return{templateUrl:"views/grid.html",restrict:"E",link:function(a,b,c){}}}),angular.module("ehrApp").directive("focusMe",["$timeout","$parse",function(a,b){return{link:function(c,d,e){var f=b(e.focusMe);c.$watch(f,function(b){b===!0&&a(function(){d[0].focus()})})}}}]),angular.module("ehrApp").directive("focus",["$parse",function(a){return function(b,c,d){var e=a(d.focus);c.bind("focus",function(a){b.$apply(function(){e(b,{$event:a})})})}}]),angular.module("ehrApp").directive("editorLabSelection",function(){return{templateUrl:"views/editor_lab_selection.html",restrict:"E",link:function(a,b,c){}}}),angular.module("ehrApp").directive("editorLabDetail",function(){return{templateUrl:"views/editor_lab_detail.html",restrict:"E",link:function(a,b,c){}}}),angular.module("ehrApp").directive("editorLabTestSelection",function(){return{templateUrl:"views/editor_lab_test_selection.html",restrict:"E",link:function(a,b,c){}}}),angular.module("ehrApp").directive("editorLabTestDetail",function(){return{templateUrl:"views/editor_lab_test_detail.html",restrict:"E",link:function(a,b,c){}}}),angular.module("ehrApp").directive("editorOrder",function(){return{templateUrl:"views/editor_order.html",restrict:"E",link:function(a,b,c){}}}),angular.module("ehrApp").controller("ChartsEncounterCtrl",["$scope","$timeout",function(a,b){a.cdsMore=!1,a.editorSectionID=!1,a.orderTypes={value:"default",options:[{label:"Add Order",value:"default"},{label:"Image",value:""},{label:"Lab",value:"lab_test"},{label:"Medication",value:""},{label:"Patient Education",value:""},{label:"Procedure",value:""},{label:"Referral",value:""}]},a.$watch("showing",function(){if(a.showing)switch(a.showing.toLowerCase()){case"cds":a.showCDS=!0,a.cdsMore=!1}a.showing="Show..."}),a.$watch("patient.orders",function(b,c){a.patient.orders.length>0&&a.updateNotifications()},!0),a.updateNotifications=function(){a.notificationIndex=0,a.notifications=[],_.each(a.patient.orders,function(b){if(b.tests.length>0){var c=!1;_.each(b.tests,function(b){b.dx&&b.dx.length>0?(a.removeNotification(b.id),c=!0):(a.createNotification("test",b,"DX missing from lab order test"),c=!1)})}})},a.hasNotification=function(b){return _.findWhere(a.notifications,{id:b})},a.createNotification=function(b,c,d){switch(b){case"order":var e={id:a.selected_order.id,type:b,track:{order:a.selected_order},path:"Orders: "+a.selected_order.name,description:d};break;case"test":var e={id:c.id,type:b,track:{order:a.selected_order,test:c},path:"Orders: "+a.selected_order.name+": "+c.name,description:d}}_.findWhere(a.notifications,{id:e.id})||a.notifications.push(e)},a.removeNotification=function(b){a.notifications=_.without(a.notifications,_.findWhere(a.notifications,{id:b})),a.notificationIndex=0},a.nextNotification=function(){a.notificationIndex=a.notificationIndex==a.notifications.length-1?0:a.notificationIndex+1,a.goToNotification()},a.goToNotification=function(){var b=a.notifications[a.notificationIndex];a.showTest(b.track.test,b.track.order,_.indexOf(b.track.order.tests,b.track.test)),a.scrollToSelection()},a.scrollToSelection=function(){var a=$("#orders");b(function(){var b=0;a.prevAll().each(function(){b+=$(this).outerHeight(!0)}),$(".scroll").animate({scrollTop:b},"slow")},0)},a.editor=!1,a.showEditor=function(c,d,e){a.editorSectionID=d,a.editor={type:c},a.resetScrollPosition(),$("#carousel-editor-order").carousel({pause:!0,interval:!1}),b(function(){a.slideIdx=e,a.closingSlideIdx>0&&$("#carousel-editor-order .item").eq(e).addClass("active")})},a.closeEditor=function(c){a.editor=!1,a.resetScrollPosition(c),a.closingSlideIdx=a.slideIdx,b(function(){a.reset()})},a.reset=function(){a.selected_test=!1,a.selected_order=!1,a.showTestInputs=!1,a.slideIdx=0},a.done=function(){a.selected_test?a.showOrder(a.selected_order):a.closeEditor()},a.applyAll=function(){_.each(a.selected_order.tests,function(b){b.dx=a.selected_order.dx_all}),a.updateNotifications(),b(function(){$("#input_add_test").focus()})},a.resetScrollPosition=function(){var c=$("#"+a.editorSectionID),d=c.offset().top-c.parent().offset().top;b(function(){var a=0;c.prevAll().each(function(){a+=$(this).outerHeight(!0)}),$(".scroll").scrollTop(a-d)},0)},a.slides=[{type:"a"},{type:"b"}],a.next=function(){a.slides[1].active=!0},a.selected_order=!1,a.$watch("orderTypes.value",function(b){if("Add Order"!=b){switch(b.toLowerCase()){case"lab_test":a.addLabOrder()}a.orderTypes.value="default"}}),a.getAddTestPlaceholder=function(){return a.selected_order?a.selected_order.tests.length>0?"Add another test":"Add a test":void 0},a.addLabOrder=function(){var b=a.patient.orders.length+1,c={id:a.patient.id+"-"+a.patient.orders.length+"1-"+parseInt(1e3*Math.random(10)),name:"Lab Order "+b,sent:!1,date:new Date,type:"lab_test",lab:!1,tests:[],insurance:{primary:"",secondary:"",payment:""},physician:"",ordering:"",dx_all:""};a.patient.orders.push(c),a.showOrder(c)},a.deleteOrder=function(){_.each(a.selected_order.tests,function(b){a.notifications=_.without(a.notifications,_.findWhere(a.notifications,{id:"t-"+a.selected_order.id+"-"+b.id})),a.notificationIndex=0}),a.patient.orders=_.without(a.patient.orders,_.findWhere(a.patient.orders,{id:a.selected_order.id})),a.closeEditor()},a.submitOrder=function(b){b.sent=!0,a.closeEditor()},a.showOrder=function(b){a.selected_order=b,a.selected_test=!1,a.editor||a.showEditor("lab_test","orders",0),a.slideIdx=0},a.showLab=function(b){a.selected_lab=b},a.showTest=function(b,c,d){a.editor?(a.selected_test=b,a.slideIdx=d+1):(a.selected_order=c,a.selected_test=b,a.showEditor("lab_test","orders",d+1))},a.onFocus=function(){a.showEditor("lab_test_selection","orders")},a.checkEditorSelectionForOrder=function(b){return a.selected_order.id==b.id&&!a.selected_test},a.checkEditorSelectionForLab=function(b,c){return a.selected_lab?a.selected_lab.id==b.id&&a.selected_order.id==c.id&&"lab_detail"==a.editor.type:void 0},a.checkEditorSelectionForTest=function(b,c){return a.selected_test?a.selected_test.id==b.id&&a.selected_order.id==c.id:void 0},a.addTest=function(b){0==_.where(a.selected_order.tests,{id:b.id}).length&&(a.selected_order.dx_all&&(b.dx=a.selected_order.dx_all),a.selected_order.tests.push(b),this.test=void 0)},a.addTemplate=function(b){_.each(b.tests,function(b){a.addTest(b)})},a.deleteTest=function(b){a.selected_order.tests=_.without(a.selected_order.tests,_.findWhere(a.selected_order.tests,{id:b.id})),a.showOrder(a.selected_order)},a.labSelected=function(){b(function(){$("#input_all_dx").focus()})},a.hasDrafts=function(){return _.findWhere(a.patient.orders,{sent:!1})},a.hasPending=function(){return _.findWhere(a.patient.orders,{sent:!0})},a.slideIdx=0,a.$watch("slideIdx",function(c){b(function(){$("#carousel-editor-order").carousel(c),a.manageSelection()})}),a.goToSlide=function(b){a.slideIdx=b},a.goNextSlide=function(){a.slideIdx=a.slideIdx+1},a.goPrevSlide=function(){a.slideIdx=a.slideIdx-1},a.manageSelection=function(){a.slideIdx>0?a.selected_test=a.selected_order.tests[a.slideIdx-1]:a.selected_test=!1},a.getNextDisabled=function(){var b=!0;return a.selected_order.tests&&a.selected_order.tests.length>0&&(b=!1),b},a.groups=[{title:"Dynamic Group Header - 1",content:"Dynamic Group Body - 1"},{title:"Dynamic Group Header - 2",content:"Dynamic Group Body - 2"}],a.items=["Item 1","Item 2","Item 3"],a.addItem=function(){var b=a.items.length+1;a.items.push("Item "+b)}}]),angular.module("ehrApp").directive("dropdown",function(){return{templateUrl:"views/dropdown.html",restrict:"E",link:function(a,b,c){}}}),angular.module("ehrApp").directive("dateTimePicker",["$sce",function(a){return{templateUrl:"views/dateTimePicker.html",restrict:"E",require:"ngModel",scope:{ngModel:"=",onChange:"&"},replace:!0,link:function(b,c,d,e){b.$watch("ngModel",function(a){b.dateString=moment(a).format("M/D/YYYY")});var f,g,h,i,j,k,l,m,n,o,p,q={options:{dateFormat:"M/D/YYYY",timeFormat:"h:mm a",labelFormat:null,placeholder:"Click to Set Date",hoverText:null,buttonIconHtml:null,closeButtonHtml:"X",nextLinkHtml:"Next",prevLinkHtml:"Prev",disableTimepicker:!1,disableClearButton:!1,dayAbbreviations:["Su","M","Tu","W","Th","F","Sa"],parseDateFunction:function(a){var b;return b=Date.parse(a),isNaN(b)?null:new Date(b)}},$get:function(){return this.options},set:function(a,b){var c,d,e;if("object"==typeof a){e=[];for(c in a)d=a[c],e.push(this.options[c]=d);return e}return this.options[a]=b}};return i=d.debug&&d.debug.length,k=function(){return b.toggleCalendar(!1),b.weeks=[],b.inputDate=null,"string"==typeof b.ngModel&&(b.ngModel=l(b.ngModel)),"string"==typeof d.initValue&&(b.ngModel=l(d.initValue)),o(),p(),m()},o=function(){var c,e;for(c in q)e=q[c],c.match(/[Hh]tml/)?b[c]=a.trustAsHtml(q[c]||""):d[c]?b[c]=d[c]:b[c]=q[c];return b.labelFormat||(b.labelFormat=b.dateFormat,b.disableTimepicker||(b.labelFormat+=" "+b.timeFormat)),d.iconClass&&d.iconClass.length?b.buttonIconHtml=a.trustAsHtml("<i ng-show='iconClass' class='"+d.iconClass+"'></i>"):void 0},g=!1,window.document.addEventListener("click",function(a){return g||(b.toggleCalendar(!1),b.$apply()),g=!1}),angular.element(c[0])[0].addEventListener("click",function(a){return g=!0}),p=function(){return b.ngModel?(b.inputDate=moment(b.ngModel).format("M/D/YYYY"),b.inputTime=moment(b.ngModel).format("h:mm")):(b.inputDate=null,b.inputTime=null)},m=function(){var a;return a=b.ngModel?new Date(b.ngModel):new Date,"Invalid Date"===a.toString()&&(a=new Date),a.setDate(1),b.calendarDate=new Date(a)},n=function(){var a,c,d,e,f,g,i,k,l,m,n,o,p;for(g=b.calendarDate.getDay(),e=j(b.calendarDate.getFullYear(),b.calendarDate.getMonth()),f=Math.ceil((g+e)/7),m=[],a=new Date(b.calendarDate),a.setDate(a.getDate()+-1*g),i=n=0,p=f-1;p>=0?p>=n:n>=p;i=p>=0?++n:--n)for(m.push([]),d=o=0;6>=o;d=++o)c=new Date(a),k=b.ngModel&&c&&h(c,b.ngModel),l=h(c,new Date),m[i].push({date:c,selected:k,other:c.getMonth()!==b.calendarDate.getMonth(),today:l}),a.setDate(a.getDate()+1);return b.weeks=m},f=function(a,c){return moment(b.ngModel).format("M/D/YYYY")},l=q.parseDateFunction,h=function(a,b,c){return null==c&&(c=!1),c?a-b===0:a&&b&&a.getYear()===b.getYear()&&a.getMonth()===b.getMonth()&&a.getDate()===b.getDate()},j=function(a,b){return[31,a%4===0&&a%100!==0||a%400===0?29:28,31,30,31,30,31,31,30,31,30,31][b]},b.$watch("ngModel",function(a,b){return a!==b?(p(),m()):void 0}),b.$watch("calendarDate",function(a,b){return a!==b?n():void 0}),b.$watch("calendarShown",function(a,b){var d;return d=angular.element(c[0].querySelector(".quickdate-date-input"))[0],d.select()}),b.mainButtonStr=function(){return b.ngModel?moment(b.ngModel).format("M/D/YYYY"):b.placeholder},b.toggleCalendar=function(a){return isFinite(a)?b.calendarShown=a:b.calendarShown=!b.calendarShown},b.setDate=function(a,c){var d;return null==c&&(c=!0),d=!b.ngModel&&a||b.ngModel&&!a||a.getTime()!==b.ngModel.getTime(),b.ngModel=a,c&&b.toggleCalendar(!1),d&&b.onChange?b.onChange():void 0},b.setDateFromInput=function(a){var c,d,e,f;null==a&&(a=!1);try{if(d=l(b.inputDate),!d)throw"Invalid Date";if(!b.disableTimepicker&&b.inputTime&&b.inputTime.length&&d){if(f=b.disableTimepicker?"00:00:00":b.inputTime,e=l(""+b.inputDate+" "+f),!e)throw"Invalid Time";b.setDate(e,!1)}else b.setDate(d,!1);return a&&b.toggleCalendar(!1),b.inputDateErr=!1,b.inputTimeErr=!1}catch(g){if(c=g,"Invalid Date"===c)return b.inputDateErr=!0;if("Invalid Time"===c)return b.inputTimeErr=!0}},b.onDateInputTab=function(a){return b.disableTimepicker&&b.toggleCalendar(!1),!0},b.onTimeInputTab=function(a){return b.toggleCalendar(!1),!0},b.nextMonth=function(){return b.calendarDate=new Date(new Date(b.calendarDate).setMonth(b.calendarDate.getMonth()+1))},b.prevMonth=function(){return b.calendarDate=new Date(new Date(b.calendarDate).setMonth(b.calendarDate.getMonth()-1))},k(),n(),i?console.log("quick date scope:",b):void 0}}}]).directive("ngEnter",function(){return function(a,b,c){return b.bind("keydown keypress",function(b){return 13===b.which?(a.$apply(c.ngEnter),b.preventDefault()):void 0})}}).directive("ngTab",function(){return function(a,b,c){return b.bind("keydown keypress",function(b){return 9===b.which?a.$apply(c.ngTab):void 0})}});