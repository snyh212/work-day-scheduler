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


var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);


//adds click listener and save function
$(function btnClick() {
    $(".saveBtn").on("click", function () {
        var input = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, input);
        console.log()
    })

    $("#9am .description").val(localStorage.getItem("9am"));
})