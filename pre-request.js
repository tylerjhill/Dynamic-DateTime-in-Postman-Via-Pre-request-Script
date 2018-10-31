//set global or environment variables as 'date' and 'enddate'

var today = new Date();
var dd = today.getDate();
var dd_end = today.getDate()+2; //two days ahead for end date
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
var hh = today.getHours();
var ss = today.getSeconds();

if(dd<10) {
    dd = '0'+dd
} 

if(dd_end<10) {
    dd_end = '0'+ dd_end
} 

if(mm<10) {
    mm = '0'+mm
} 

if(hh<10) {
    hh = '0'+hh
} 

if(ss<10) {
    ss = '0'+ss
} 

today = yyyy +'-'+ mm +'-'+ dd + 'T' + hh + ':' + ss + 'Z'; 

postman.setEnvironmentVariable("date", today);

enddate = yyyy +'-'+ mm +'-'+ dd_end + 'T' + hh + ':' + ss + 'Z'; 

postman.setEnvironmentVariable("enddate", enddate);
