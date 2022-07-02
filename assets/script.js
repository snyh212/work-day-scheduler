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

//adds click listener and save function
$(function () {
    $(".saveBtn").on("click", function () {
        var input = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, input);
        console.log()
    })
    function timeTracker() {
        var now = moment().hour();

        $(".time-block").each(function () {
            var area = parseInt($(this).attr("id").split("hour")[1]);

            if (area < now) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
                
                
            }
            else if (area === now) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
                
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");

            }
        })
    }
    
    $("#t9 .description").val(localStorage.getItem("t9"));
    $("#t10 .description").val(localStorage.getItem("t10"));
    $("#t11 .description").val(localStorage.getItem("t11"));
    $("#t12 .description").val(localStorage.getItem("t12"));
    $("#t1 .description").val(localStorage.getItem("t1"));
    $("#t2 .description").val(localStorage.getItem("t2"));
    $("#t3 .description").val(localStorage.getItem("t3"));
    $("#t4 .description").val(localStorage.getItem("t4"));
    $("#t5 .description").val(localStorage.getItem("t5"));
    $("#t6 .description").val(localStorage.getItem("t6"));

    timeTracker();
})