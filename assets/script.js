// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var currentDayEl = $('#currentDay')
var timeBlockEl = $('.time-block')
var saveBtnEl = $('.saveBtn')
var hourEl = $('.hour')
var descriptionEl = $('.description')
//targetting <p> tag to display
var containerEl = $('.container-lg px-5')
var time = dayjs().format('MMMM DD, YYYY [at] hh:mm A')
var currentTime = dayjs().format('h')
var currentHour = dayjs().format('H')
var currentDay = dayjs().format('dddd')
console.log(currentDay)
console.log(currentHour)
console.log(currentTime)

//display current date and time

$(function  getTime () {
  currentDayEl.text(time)
$('.saveBtn').on('click', function() {
  var time = $(this).parent().attr('id')
  var description = $(this).siblings('.description').val()
  localStorage.setItem(time, description)
  console.log(time, description)
})
//event listener for save button
 
  $('.time-block').each(function() {
    var time = $(this).attr('id')
    var timeId = parseInt(time)
    console.log(timeId)
    var showData = localStorage.getItem(time);
    }
    //get data from local storage
  
});
