'use strict';

angular.module('ehrApp')
  .directive('dateTimePicker', ['$sce', function ($sce) {
    return {
      templateUrl: 'views/dateTimePicker.html',
      restrict: 'E',
	  
	  require: "ngModel",
      scope: {
	  	ngModel: "=",
	  	onChange: "&"
	  },
	  replace: true,

      link: function postLink(scope, element, attrs, ngModel) {

      	scope.$watch('ngModel',function(val){
      		scope.dateString = moment(val).format('M/D/YYYY');
      	})

      	var defaults = {
			options: {
				dateFormat: 'M/D/YYYY',
				timeFormat: 'h:mm a',
				labelFormat: null,
				placeholder: 'Click to Set Date',
				hoverText: null,
				buttonIconHtml: null,
				closeButtonHtml: 'X',
				nextLinkHtml: 'Next',
				prevLinkHtml: 'Prev',
				disableTimepicker: false,
				disableClearButton: false,
				dayAbbreviations: ["Su", "M", "Tu", "W", "Th", "F", "Sa"],
				parseDateFunction: function(str) {
				  var seconds;
				  seconds = Date.parse(str);
				  if (isNaN(seconds)) {
				    return null;
				  } else {
				    return new Date(seconds);
				  }
				}
			},
			$get: function() {
				return this.options;
			},
			set: function(keyOrHash, value) {
				var k, v, _results;
				if (typeof keyOrHash === 'object') {
				  _results = [];
				  for (k in keyOrHash) {
				    v = keyOrHash[k];
				    _results.push(this.options[k] = v);
				  }
				  return _results;
				} else {
				  return this.options[keyOrHash] = value;
				}
			}
		};


		var dateToString, datepickerClicked, datesAreEqual, debug, getDaysInMonth, initialize, parseDateString, setCalendarDateFromModel, setCalendarRows, setConfigOptions, setInputDateFromModel;
        
        debug = attrs.debug && attrs.debug.length;

          initialize = function() {
            scope.toggleCalendar(false);
            scope.weeks = [];
            scope.inputDate = null;
            if (typeof scope.ngModel === 'string') {
              scope.ngModel = parseDateString(scope.ngModel);
            }
            if (typeof attrs.initValue === 'string') {
              scope.ngModel = parseDateString(attrs.initValue);
            }
            setConfigOptions();
            setInputDateFromModel();
            return setCalendarDateFromModel();
          };

          setConfigOptions = function() {
            var key, value;
            for (key in defaults) {
              value = defaults[key];
              if (key.match(/[Hh]tml/)) {
                scope[key] = $sce.trustAsHtml(defaults[key] || "");
              } else if (attrs[key]) {
                scope[key] = attrs[key];
              } else {
                scope[key] = defaults[key];
              }
            }
            if (!scope.labelFormat) {
              scope.labelFormat = scope.dateFormat;
              if (!scope.disableTimepicker) {
                scope.labelFormat += " " + scope.timeFormat;
              }
            }
            if (attrs.iconClass && attrs.iconClass.length) {
              return scope.buttonIconHtml = $sce.trustAsHtml("<i ng-show='iconClass' class='" + attrs.iconClass + "'></i>");
            }
          };
          datepickerClicked = false;
          window.document.addEventListener('click', function(event) {
            if (!datepickerClicked) {
              scope.toggleCalendar(false);
              scope.$apply();
            }
            return datepickerClicked = false;
          });
          angular.element(element[0])[0].addEventListener('click', function(event) {
            return datepickerClicked = true;
          });
          setInputDateFromModel = function() {
            if (scope.ngModel) {
              scope.inputDate = moment(scope.ngModel).format('M/D/YYYY');
              return scope.inputTime = moment(scope.ngModel).format('h:mm');
            } else {
              scope.inputDate = null;
              return scope.inputTime = null;
            }
          };
          setCalendarDateFromModel = function() {
            var d;
            d = scope.ngModel ? new Date(scope.ngModel) : new Date();
            if (d.toString() === "Invalid Date") {
              d = new Date();
            }
            d.setDate(1);
            return scope.calendarDate = new Date(d);
          };
          setCalendarRows = function() {
            var curDate, d, day, daysInMonth, numRows, offset, row, selected, today, weeks, _i, _j, _ref;
            offset = scope.calendarDate.getDay();
            daysInMonth = getDaysInMonth(scope.calendarDate.getFullYear(), scope.calendarDate.getMonth());
            numRows = Math.ceil((offset + daysInMonth) / 7);
            weeks = [];
            curDate = new Date(scope.calendarDate);
            curDate.setDate(curDate.getDate() + (offset * -1));
            for (row = _i = 0, _ref = numRows - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; row = 0 <= _ref ? ++_i : --_i) {
              weeks.push([]);
              for (day = _j = 0; _j <= 6; day = ++_j) {
                d = new Date(curDate);
                selected = scope.ngModel && d && datesAreEqual(d, scope.ngModel);
                today = datesAreEqual(d, new Date());
                weeks[row].push({
                  date: d,
                  selected: selected,
                  other: d.getMonth() !== scope.calendarDate.getMonth(),
                  today: today
                });
                curDate.setDate(curDate.getDate() + 1);
              }
            }
            return scope.weeks = weeks;
          };
          dateToString = function(date, format) {
            return moment(scope.ngModel).format('M/D/YYYY');
          };
          parseDateString = defaults.parseDateFunction;
          datesAreEqual = function(d1, d2, compareTimes) {
            if (compareTimes == null) {
              compareTimes = false;
            }
            if (compareTimes) {
              return (d1 - d2) === 0;
            } else {
              return d1 && d2 && (d1.getYear() === d2.getYear()) && (d1.getMonth() === d2.getMonth()) && (d1.getDate() === d2.getDate());
            }
          };
          getDaysInMonth = function(year, month) {
            return [31, ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
          };
          scope.$watch('ngModel', function(newVal, oldVal) {
            if (newVal !== oldVal) {
              setInputDateFromModel();
              return setCalendarDateFromModel();
            }
          });
          scope.$watch('calendarDate', function(newVal, oldVal) {
            if (newVal !== oldVal) {
              return setCalendarRows();
            }
          });
          scope.$watch('calendarShown', function(newVal, oldVal) {
            var dateInput;
            dateInput = angular.element(element[0].querySelector(".quickdate-date-input"))[0];
            return dateInput.select();
          });
          scope.mainButtonStr = function() {
            if (scope.ngModel) {
            	return moment(scope.ngModel).format('M/D/YYYY');
            } else {
              return scope.placeholder;
            }
          };
          scope.toggleCalendar = function(show) {
            if (isFinite(show)) {
              return scope.calendarShown = show;
            } else {
              return scope.calendarShown = !scope.calendarShown;
            }
          };
          scope.setDate = function(date, closeCalendar) {
            var changed;
            if (closeCalendar == null) {
              closeCalendar = true;
            }
            changed = (!scope.ngModel && date) || (scope.ngModel && !date) || (date.getTime() !== scope.ngModel.getTime());
            scope.ngModel = date;
            if (closeCalendar) {
              scope.toggleCalendar(false);
            }
            if (changed && scope.onChange) {
              return scope.onChange();
            }
          };
          scope.setDateFromInput = function(closeCalendar) {
            var err, tmpDate, tmpDateAndTime, tmpTime;
            if (closeCalendar == null) {
              closeCalendar = false;
            }
            try {
              tmpDate = parseDateString(scope.inputDate);
              if (!tmpDate) {
                throw 'Invalid Date';
              }
              if (!scope.disableTimepicker && scope.inputTime && scope.inputTime.length && tmpDate) {
                tmpTime = scope.disableTimepicker ? '00:00:00' : scope.inputTime;
                tmpDateAndTime = parseDateString("" + scope.inputDate + " " + tmpTime);
                if (!tmpDateAndTime) {
                  throw 'Invalid Time';
                }
                scope.setDate(tmpDateAndTime, false);
              } else {
                scope.setDate(tmpDate, false);
              }
              if (closeCalendar) {
                scope.toggleCalendar(false);
              }
              scope.inputDateErr = false;
              return scope.inputTimeErr = false;
            } catch (_error) {
              err = _error;
              if (err === 'Invalid Date') {
                return scope.inputDateErr = true;
              } else if (err === 'Invalid Time') {
                return scope.inputTimeErr = true;
              }
            }
          };
          scope.onDateInputTab = function(param) {
            if (scope.disableTimepicker) {
              scope.toggleCalendar(false);
            }
            return true;
          };
          scope.onTimeInputTab = function(param) {
            scope.toggleCalendar(false);
            return true;
          };
          scope.nextMonth = function() {
            return scope.calendarDate = new Date(new Date(scope.calendarDate).setMonth(scope.calendarDate.getMonth() + 1));
          };
          scope.prevMonth = function() {
            return scope.calendarDate = new Date(new Date(scope.calendarDate).setMonth(scope.calendarDate.getMonth() - 1));
          };

          initialize();

          setCalendarRows();

          if(debug) {
            return console.log("quick date scope:", scope);
          }
      }
    };
  }])

.directive('ngEnter', function() {
    return function(scope, element, attr) {
      return element.bind('keydown keypress', function(e) {
        if (e.which === 13) {
          scope.$apply(attr.ngEnter);
          return e.preventDefault();
        }
      });
    };
  })

  .directive('ngTab', function() {
    return function(scope, element, attr) {
      return element.bind('keydown keypress', function(e) {
        if (e.which === 9) {
          return scope.$apply(attr.ngTab);
        }
      });
    };
  });
