/* GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist */

//DONE-run on opening time & date, save button saves text input,
// checks time hlite now-red, before-grey(Danger, secondary)
//need variables for time string/class


var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);

var workTime = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]

for (var i = 0; i < workTime.length; i++) {
    var listItem = workTime[i];
    $(".container").append('<li id="timeS" class="row time-block"><section class="col-1 hour">' +time+ '</section><textarea class="col-10 description"></textarea><button class="button saveBtn col-1">Save</button></section></li>')
}

//adds click listener and save function
$(function btnClick() {
    $(".saveBtn").on("click", function () {
        var input = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, input);
        console.log()
    })

    $("#timeS .description").val(localStorage.getItem("timeS"));
})