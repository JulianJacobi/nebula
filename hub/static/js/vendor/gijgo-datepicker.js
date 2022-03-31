gj.datepicker={plugins:{}},gj.datepicker.config={base:{showOtherMonths:!1,selectOtherMonths:!0,width:void 0,minDate:void 0,maxDate:void 0,format:"mm/dd/yyyy",uiLibrary:"materialdesign",iconsLibrary:"materialicons",value:void 0,weekStartDay:0,disableDates:void 0,disableDaysOfWeek:void 0,calendarWeeks:!1,keyboardNavigation:!0,locale:"en-us",icons:{rightIcon:'<i class="gj-icon">event</i>',previousMonth:'<i class="gj-icon chevron-left"></i>',nextMonth:'<i class="gj-icon chevron-right"></i>'},fontSize:void 0,size:"default",modal:!1,header:!1,footer:!1,showOnFocus:!0,showRightIcon:!0,style:{modal:"gj-modal",wrapper:"gj-datepicker gj-datepicker-md gj-unselectable",input:"gj-textbox-md",calendar:"gj-picker gj-picker-md datepicker gj-unselectable",footer:"",button:"gj-button-md"}},bootstrap:{style:{wrapper:"gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group",input:"form-control",calendar:"gj-picker gj-picker-bootstrap datepicker gj-unselectable",footer:"modal-footer",button:"btn btn-default"},iconsLibrary:"glyphicons",showOtherMonths:!0},bootstrap4:{style:{wrapper:"gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group",input:"form-control",calendar:"gj-picker gj-picker-bootstrap datepicker gj-unselectable",footer:"modal-footer",button:"btn btn-default"},showOtherMonths:!0},fontawesome:{icons:{rightIcon:'<i class="fa fa-calendar" aria-hidden="true"></i>',previousMonth:'<i class="fa fa-chevron-left" aria-hidden="true"></i>',nextMonth:'<i class="fa fa-chevron-right" aria-hidden="true"></i>'}},glyphicons:{icons:{rightIcon:'<span class="glyphicon glyphicon-calendar"></span>',previousMonth:'<span class="glyphicon glyphicon-chevron-left"></span>',nextMonth:'<span class="glyphicon glyphicon-chevron-right"></span>'}}},gj.datepicker.methods={init:function(a){return gj.widget.prototype.init.call(this,a,"datepicker"),this.attr("data-datepicker","true"),gj.datepicker.methods.initialize(this,this.data()),this},initialize:function(a,b){var c,d,e=a.parent('div[role="wrapper"]');0===e.length?(e=$('<div role="wrapper" />').addClass(b.style.wrapper),a.wrap(e)):e.addClass(b.style.wrapper),e=a.parent('div[role="wrapper"]'),b.width&&e.css("width",b.width),a.val(b.value).addClass(b.style.input).attr("role","input"),b.fontSize&&a.css("font-size",b.fontSize),"bootstrap"===b.uiLibrary||"bootstrap4"===b.uiLibrary?"small"===b.size?(e.addClass("input-group-sm"),a.addClass("form-control-sm")):"large"===b.size&&(e.addClass("input-group-lg"),a.addClass("form-control-lg")):"small"===b.size?e.addClass("small"):"large"===b.size&&e.addClass("large"),b.showRightIcon&&(d="bootstrap"===b.uiLibrary?$('<span class="input-group-addon">'+b.icons.rightIcon+"</span>"):"bootstrap4"===b.uiLibrary?$('<span class="input-group-append"><button class="btn btn-outline-secondary border-left-0" type="button">'+b.icons.rightIcon+"</button></span>"):$(b.icons.rightIcon),d.attr("role","right-icon"),d.on("click",function(c){$("body").find('[role="calendar"][guid="'+a.attr("data-guid")+'"]').is(":visible")?gj.datepicker.methods.close(a):gj.datepicker.methods.open(a,b)}),e.append(d)),b.showOnFocus&&a.on("focus",function(){gj.datepicker.methods.open(a,b)}),c=gj.datepicker.methods.createCalendar(a,b),!0!==b.footer&&(a.on("blur",function(){a.timeout=setTimeout(function(){gj.datepicker.methods.close(a)},500)}),c.mousedown(function(){return clearTimeout(a.timeout),document.activeElement!==a[0]&&a.focus(),!1}),c.on("click",function(){clearTimeout(a.timeout),document.activeElement!==a[0]&&a.focus()})),b.keyboardNavigation&&$(document).on("keydown",gj.datepicker.methods.createKeyDownHandler(a,c,b))},createCalendar:function(a,b){var c,d,e,f,g,h=$('<div role="calendar" type="month"/>').addClass(b.style.calendar).attr("guid",a.attr("data-guid"));return b.fontSize&&h.css("font-size",b.fontSize),c=gj.core.parseDate(b.value,b.format,b.locale),!c||isNaN(c.getTime())?c=new Date:a.attr("day",c.getFullYear()+"-"+c.getMonth()+"-"+c.getDate()),h.attr("month",c.getMonth()),h.attr("year",c.getFullYear()),gj.datepicker.methods.renderHeader(a,h,b,c),d=$('<div role="body" />'),h.append(d),b.footer&&(e=$('<div role="footer" class="'+b.style.footer+'" />'),f=$('<button class="'+b.style.button+'">'+gj.core.messages[b.locale].cancel+"</button>"),f.on("click",function(){a.close()}),e.append(f),g=$('<button class="'+b.style.button+'">'+gj.core.messages[b.locale].ok+"</button>"),g.on("click",function(){var c,d,e=h.attr("selectedDay");e?(d=e.split("-"),c=new Date(d[0],d[1],d[2],h.attr("hour")||0,h.attr("minute")||0),gj.datepicker.methods.change(a,h,b,c)):a.close()}),e.append(g),h.append(e)),h.hide(),$("body").append(h),b.modal&&(h.wrapAll('<div role="modal" class="'+b.style.modal+'"/>'),gj.core.center(h)),h},renderHeader:function(a,b,c,d){var e,f,g;c.header&&(e=$('<div role="header" />'),g=$('<div role="year" />').on("click",function(){gj.datepicker.methods.renderDecade(a,b,c),g.addClass("selected"),f.removeClass("selected")}),g.html(gj.core.formatDate(d,"yyyy",c.locale)),e.append(g),f=$('<div role="date" class="selected" />').on("click",function(){gj.datepicker.methods.renderMonth(a,b,c),f.addClass("selected"),g.removeClass("selected")}),f.html(gj.core.formatDate(d,"ddd, mmm dd",c.locale)),e.append(f),b.append(e))},updateHeader:function(a,b,c){a.find('[role="header"] [role="year"]').removeClass("selected").html(gj.core.formatDate(c,"yyyy",b.locale)),a.find('[role="header"] [role="date"]').addClass("selected").html(gj.core.formatDate(c,"ddd, mmm dd",b.locale)),a.find('[role="header"] [role="hour"]').removeClass("selected").html(gj.core.formatDate(c,"HH",b.locale)),a.find('[role="header"] [role="minute"]').removeClass("selected").html(gj.core.formatDate(c,"MM",b.locale))},createNavigation:function(a,b,c,d){var e,f,g=$("<thead/>");for(f=$('<div role="navigator" />'),f.append($("<div>"+d.icons.previousMonth+"</div>").on("click",gj.datepicker.methods.prev(a,d))),f.append($('<div role="period"></div>').on("click",gj.datepicker.methods.changePeriod(a,d))),f.append($("<div>"+d.icons.nextMonth+"</div>").on("click",gj.datepicker.methods.next(a,d))),b.append(f),e=$('<tr role="week-days" />'),d.calendarWeeks&&e.append("<th><div>&nbsp;</div></th>"),i=d.weekStartDay;i<gj.core.messages[d.locale].weekDaysMin.length;i++)e.append("<th><div>"+gj.core.messages[d.locale].weekDaysMin[i]+"</div></th>");for(i=0;i<d.weekStartDay;i++)e.append("<th><div>"+gj.core.messages[d.locale].weekDaysMin[i]+"</div></th>");g.append(e),c.append(g)},renderMonth:function(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s=b.children('[role="body"]'),t=$("<table/>"),u=$("<tbody/>"),v=gj.core.messages[c.locale].titleFormat;for(s.off().empty(),gj.datepicker.methods.createNavigation(a,s,t,c),g=parseInt(b.attr("month"),10),h=parseInt(b.attr("year"),10),b.attr("type","month"),v=v.replace("mmmm",gj.core.messages[c.locale].monthNames[g]).replace("yyyy",h),b.find('div[role="period"]').text(v),i=new Array(31,28,31,30,31,30,31,31,30,31,30,31),h%4==0&&1900!=h&&(i[1]=29),j=i[g],k=(new Date(h,g,1).getDay()+7-c.weekStartDay)%7,d=0,$row=$("<tr />"),n=gj.datepicker.methods.getPrevMonth(g,h),l=1;l<=k;l++)f=i[n.month]-k+l,r=new Date(n.year,n.month,f),c.calendarWeeks&&1===l&&$row.append('<td class="calendar-week"><div>'+gj.datepicker.methods.getWeekNumber(r)+"</div></td>"),p=$('<td class="other-month" />'),c.showOtherMonths&&(q=$("<div>"+f+"</div>"),p.append(q),c.selectOtherMonths&&gj.datepicker.methods.isSelectable(c,r)?(p.addClass("gj-cursor-pointer").attr("day",f).attr("month",n.month).attr("year",n.year),q.on("click",gj.datepicker.methods.dayClickHandler(a,b,c,r)),q.on("mousedown",function(a){a.stopPropagation()})):p.addClass("disabled")),$row.append(p),d++;for(l>1&&u.append($row),m=new Date,l=1;l<=j;l++)r=new Date(h,g,l),0==d&&($row=$("<tr>"),c.calendarWeeks&&$row.append('<td class="calendar-week"><div>'+gj.datepicker.methods.getWeekNumber(r)+"</div></td>")),p=$('<td day="'+l+'" month="'+g+'" year="'+h+'" />'),h===m.getFullYear()&&g===m.getMonth()&&l===m.getDate()?p.addClass("today"):p.addClass("current-month"),q=$("<div>"+l+"</div>"),gj.datepicker.methods.isSelectable(c,r)?(p.addClass("gj-cursor-pointer"),q.on("click",gj.datepicker.methods.dayClickHandler(a,b,c,r)),q.on("mousedown",function(a){a.stopPropagation()})):p.addClass("disabled"),p.append(q),$row.append(p),7==++d&&(u.append($row),d=0);for(o=gj.datepicker.methods.getNextMonth(g,h),l=1;0!=d;l++)r=new Date(o.year,o.month,l),p=$('<td class="other-month" />'),c.showOtherMonths&&(q=$("<div>"+l+"</div>"),c.selectOtherMonths&&gj.datepicker.methods.isSelectable(c,r)?(p.addClass("gj-cursor-pointer").attr("day",l).attr("month",o.month).attr("year",o.year),q.on("click",gj.datepicker.methods.dayClickHandler(a,b,c,r)),q.on("mousedown",function(a){a.stopPropagation()})):p.addClass("disabled"),p.append(q)),$row.append(p),7==++d&&(u.append($row),d=0);t.append(u),s.append(t),b.attr("selectedDay")&&(e=b.attr("selectedDay").split("-"),r=new Date(e[0],e[1],e[2],b.attr("hour")||0,b.attr("minute")||0),b.find('tbody td[day="'+e[2]+'"][month="'+e[1]+'"]').addClass("selected"),gj.datepicker.methods.updateHeader(b,c,r))},renderYear:function(a,b,c){var d,e,f,g,h=b.find('>[role="body"]>table'),i=h.children("tbody");for(h.children("thead").hide(),d=parseInt(b.attr("year"),10),b.attr("type","year"),b.find('div[role="period"]').text(d),i.empty(),e=0;e<3;e++){for($row=$("<tr />"),f=4*e;f<=4*e+3;f++)g=$("<div>"+gj.core.messages[c.locale].monthShortNames[f]+"</div>"),g.on("click",gj.datepicker.methods.selectMonth(a,b,c,f)),$cell=$("<td></td>").append(g),$row.append($cell);i.append($row)}},renderDecade:function(a,b,c){var d,e,f,g,h,i=b.find('>[role="body"]>table'),j=i.children("tbody");for(i.children("thead").hide(),d=parseInt(b.attr("year"),10),e=d-d%10,b.attr("type","decade"),b.find('div[role="period"]').text(e+" - "+(e+9)),j.empty(),f=e-1;f<=e+10;f+=4){for($row=$("<tr />"),g=f;g<=f+3;g++)h=$("<div>"+g+"</div>"),h.on("click",gj.datepicker.methods.selectYear(a,b,c,g)),$cell=$("<td></td>").append(h),$row.append($cell);j.append($row)}},renderCentury:function(a,b,c){var d,e,f,g,h,i=b.find('>[role="body"]>table'),j=i.children("tbody");for(i.children("thead").hide(),d=parseInt(b.attr("year"),10),e=d-d%100,b.attr("type","century"),b.find('div[role="period"]').text(e+" - "+(e+99)),j.empty(),f=e-10;f<e+100;f+=40){for($row=$("<tr />"),g=f;g<=f+30;g+=10)h=$("<div>"+g+"</div>"),h.on("click",gj.datepicker.methods.selectDecade(a,b,c,g)),$cell=$("<td></td>").append(h),$row.append($cell);j.append($row)}},getWeekNumber:function(a){var b=new Date(a.valueOf());b.setDate(b.getDate()+6),b=new Date(Date.UTC(b.getFullYear(),b.getMonth(),b.getDate())),b.setUTCDate(b.getUTCDate()+4-(b.getUTCDay()||7));var c=new Date(Date.UTC(b.getUTCFullYear(),0,1));return Math.ceil(((b-c)/864e5+1)/7)},getMinDate:function(a){var b;return a.minDate&&("string"==typeof a.minDate?b=gj.core.parseDate(a.minDate,a.format,a.locale):"function"==typeof a.minDate?"string"==typeof(b=a.minDate())&&(b=gj.core.parseDate(b,a.format,a.locale)):"function"==typeof a.minDate.getMonth&&(b=a.minDate)),b},getMaxDate:function(a){var b;return a.maxDate&&("string"==typeof a.maxDate?b=gj.core.parseDate(a.maxDate,a.format,a.locale):"function"==typeof a.maxDate?"string"==typeof(b=a.maxDate())&&(b=gj.core.parseDate(b,a.format,a.locale)):"function"==typeof a.maxDate.getMonth&&(b=a.maxDate)),b},isSelectable:function(a,b){var c,d=!0,e=gj.datepicker.methods.getMinDate(a),f=gj.datepicker.methods.getMaxDate(a);if(e&&b<e?d=!1:f&&b>f&&(d=!1),d){if(a.disableDates)if($.isArray(a.disableDates))for(c=0;c<a.disableDates.length;c++)a.disableDates[c]instanceof Date&&a.disableDates[c].getTime()===b.getTime()?d=!1:"string"==typeof a.disableDates[c]&&gj.core.parseDate(a.disableDates[c],a.format,a.locale).getTime()===b.getTime()&&(d=!1);else a.disableDates instanceof Function&&(d=a.disableDates(b));$.isArray(a.disableDaysOfWeek)&&a.disableDaysOfWeek.indexOf(b.getDay())>-1&&(d=!1)}return d},getPrevMonth:function(a,b){return date=new Date(b,a,1),date.setMonth(date.getMonth()-1),{month:date.getMonth(),year:date.getFullYear()}},getNextMonth:function(a,b){return date=new Date(b,a,1),date.setMonth(date.getMonth()+1),{month:date.getMonth(),year:date.getFullYear()}},prev:function(a,b){return function(){var c,d,e,f,g,h=$("body").find('[role="calendar"][guid="'+a.attr("data-guid")+'"]');switch(e=parseInt(h.attr("year"),10),h.attr("type")){case"month":d=parseInt(h.attr("month"),10),c=gj.datepicker.methods.getPrevMonth(d,e),h.attr("month",c.month),h.attr("year",c.year),gj.datepicker.methods.renderMonth(a,h,b);break;case"year":h.attr("year",e-1),gj.datepicker.methods.renderYear(a,h,b);break;case"decade":f=e-e%10,h.attr("year",f-10),gj.datepicker.methods.renderDecade(a,h,b);break;case"century":g=e-e%100,h.attr("year",g-100),gj.datepicker.methods.renderCentury(a,h,b)}}},next:function(a,b){return function(){var c,d,e,f,g,h=$("body").find('[role="calendar"][guid="'+a.attr("data-guid")+'"]');switch(e=parseInt(h.attr("year"),10),h.attr("type")){case"month":d=parseInt(h.attr("month"),10),c=gj.datepicker.methods.getNextMonth(d,e),h.attr("month",c.month),h.attr("year",c.year),gj.datepicker.methods.renderMonth(a,h,b);break;case"year":h.attr("year",e+1),gj.datepicker.methods.renderYear(a,h,b);break;case"decade":f=e-e%10,h.attr("year",f+10),gj.datepicker.methods.renderDecade(a,h,b);break;case"century":g=e-e%100,h.attr("year",g+100),gj.datepicker.methods.renderCentury(a,h,b)}}},changePeriod:function(a,b){return function(c){var d=$("body").find('[role="calendar"][guid="'+a.attr("data-guid")+'"]');switch(d.attr("type")){case"month":gj.datepicker.methods.renderYear(a,d,b);break;case"year":gj.datepicker.methods.renderDecade(a,d,b);break;case"decade":gj.datepicker.methods.renderCentury(a,d,b)}}},dayClickHandler:function(a,b,c,d){return function(e){return e&&e.stopPropagation(),gj.datepicker.methods.selectDay(a,b,c,d),!0!==c.footer&&!1!==c.autoClose&&gj.datepicker.methods.change(a,b,c,d),a}},change:function(a,b,c,d){var e=(d.getDate(),d.getMonth()),f=d.getFullYear(),g=gj.core.formatDate(d,c.format,c.locale);b.attr("month",e),b.attr("year",f),a.val(g),gj.datepicker.events.change(a),"none"!==window.getComputedStyle(b[0]).display&&gj.datepicker.methods.close(a)},selectDay:function(a,b,c,d){var e=d.getDate(),f=d.getMonth(),g=d.getFullYear();b.attr("selectedDay",g+"-"+f+"-"+e),b.find("tbody td").removeClass("selected"),b.find('tbody td[day="'+e+'"][month="'+f+'"]').addClass("selected"),gj.datepicker.methods.updateHeader(b,c,d),gj.datepicker.events.select(a,"day")},selectMonth:function(a,b,c,d){return function(e){b.attr("month",d),gj.datepicker.methods.renderMonth(a,b,c),gj.datepicker.events.select(a,"month")}},selectYear:function(a,b,c,d){return function(e){b.attr("year",d),gj.datepicker.methods.renderYear(a,b,c),gj.datepicker.events.select(a,"year")}},selectDecade:function(a,b,c,d){return function(e){b.attr("year",d),gj.datepicker.methods.renderDecade(a,b,c),gj.datepicker.events.select(a,"decade")}},open:function(a,b){var c,d=$("body").find('[role="calendar"][guid="'+a.attr("data-guid")+'"]');switch(a.val()?a.value(a.val()):(c=new Date,d.attr("month",c.getMonth()),d.attr("year",c.getFullYear())),d.attr("type")){case"month":gj.datepicker.methods.renderMonth(a,d,b);break;case"year":gj.datepicker.methods.renderYear(a,d,b);break;case"decade":gj.datepicker.methods.renderDecade(a,d,b);break;case"century":gj.datepicker.methods.renderCentury(a,d,b)}d.show(),d.closest('div[role="modal"]').show(),b.modal?gj.core.center(d):(gj.core.setChildPosition(a[0],d[0]),document.activeElement!==a[0]&&a.focus()),clearTimeout(a.timeout),gj.datepicker.events.open(a)},close:function(a){var b=$("body").find('[role="calendar"][guid="'+a.attr("data-guid")+'"]');b.hide(),b.closest('div[role="modal"]').hide(),gj.datepicker.events.close(a)},createKeyDownHandler:function(a,b,c){return function(d){var e,f,g,h,i,j,d=d||window.event;"none"!==window.getComputedStyle(b[0]).display&&(j=gj.datepicker.methods.getActiveCell(b),"38"==d.keyCode?(h=j.index(),i=j.closest("tr").prev("tr").find("td:eq("+h+")"),i.is("[day]")||(gj.datepicker.methods.prev(a,c)(),i=b.find("tbody tr").last().find("td:eq("+h+")"),i.is(":empty")&&(i=b.find("tbody tr").last().prev().find("td:eq("+h+")"))),i.is("[day]")&&(i.addClass("focused"),j.removeClass("focused"))):"40"==d.keyCode?(h=j.index(),i=j.closest("tr").next("tr").find("td:eq("+h+")"),i.is("[day]")||(gj.datepicker.methods.next(a,c)(),i=b.find("tbody tr").first().find("td:eq("+h+")"),i.is("[day]")||(i=b.find("tbody tr:eq(1)").find("td:eq("+h+")"))),i.is("[day]")&&(i.addClass("focused"),j.removeClass("focused"))):"37"==d.keyCode?(i=j.prev("td[day]:not(.disabled)"),0===i.length&&(i=j.closest("tr").prev("tr").find("td[day]").last()),0===i.length&&(gj.datepicker.methods.prev(a,c)(),i=b.find("tbody tr").last().find("td[day]").last()),i.length>0&&(i.addClass("focused"),j.removeClass("focused"))):"39"==d.keyCode?(i=j.next("[day]:not(.disabled)"),0===i.length&&(i=j.closest("tr").next("tr").find("td[day]").first()),0===i.length&&(gj.datepicker.methods.next(a,c)(),i=b.find("tbody tr").first().find("td[day]").first()),i.length>0&&(i.addClass("focused"),j.removeClass("focused"))):"13"==d.keyCode?(g=parseInt(j.attr("day"),10),e=parseInt(j.attr("month"),10),f=parseInt(j.attr("year"),10),gj.datepicker.methods.dayClickHandler(a,b,c,new Date(f,e,g))()):"27"==d.keyCode&&a.close())}},getActiveCell:function(a){var b=a.find("td[day].focused");return 0===b.length&&(b=a.find("td[day].selected"),0===b.length&&(b=a.find("td[day].today"),0===b.length&&(b=a.find("td[day]:not(.disabled)").first()))),b},value:function(a,b){var c,d,e=a.data();return void 0===b?a.val():(d=gj.core.parseDate(b,e.format,e.locale),d&&d.getTime()?(c=$("body").find('[role="calendar"][guid="'+a.attr("data-guid")+'"]'),gj.datepicker.methods.dayClickHandler(a,c,e,d)()):a.val(""),a)},destroy:function(a){var b=a.data(),c=a.parent(),d=$("body").find('[role="calendar"][guid="'+a.attr("data-guid")+'"]');return b&&(a.off(),d.parent('[role="modal"]').length>0&&d.unwrap(),d.remove(),a.removeData(),a.removeAttr("data-type").removeAttr("data-guid").removeAttr("data-datepicker"),a.removeClass(),c.children('[role="right-icon"]').remove(),a.unwrap()),a}},gj.datepicker.events={change:function(a){return a.triggerHandler("change")},select:function(a,b){return a.triggerHandler("select",[b])},open:function(a){return a.triggerHandler("open")},close:function(a){return a.triggerHandler("close")}},gj.datepicker.widget=function(a,b){var c=this,d=gj.datepicker.methods;return c.value=function(a){return d.value(this,a)},c.destroy=function(){return d.destroy(this)},c.open=function(){return d.open(this,this.data())},c.close=function(){return d.close(this)},$.extend(a,c),"true"!==a.attr("data-datepicker")&&d.init.call(a,b),a},gj.datepicker.widget.prototype=new gj.widget,gj.datepicker.widget.constructor=gj.datepicker.widget,function(a){a.fn.datepicker=function(a){var b;if(this&&this.length){if("object"!=typeof a&&a){if(b=new gj.datepicker.widget(this,null),b[a])return b[a].apply(this,Array.prototype.slice.call(arguments,1));throw"Method "+a+" does not exist."}return new gj.datepicker.widget(this,a)}}}(jQuery);