# work-day-scheduler

[Deployable Link: https://snyh212.github.io/work-day-scheduler/](https://snyh212.github.io/work-day-scheduler/)

## Description

ON this webpage the user is shown the date and can easily log information that pretains to the time of day and save it in local storage for future referance with a button.


## Technologies used

Project done using HTML, CSS, JavaScript, DOM, Github, GitLab, JQuery, bootstrap, fontawesome, moment.js on VS code and GitBash.


## Code and its function
This code adds 'click' to the button, and calls the functions to begin logging what was done-
```
$(function () {
    $(".saveBtn").on("click", function () {
        var input = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, input);
        console.log()
    })
```
The JavaScript code here is used to add the background styling with effect-
```
$(".time-block").each(function () {
            var area = parseInt($(this).attr("id").split("hour"));

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
}
```
Some html, and the webpage-

<img src="assets\Screenshot 2022-07-01 194443.png">


## Contact

[E-mail: Snyh121@gmail.com](mailto:snyh121@gmail.com")  
[GitHub: snyh212](https://r.search.yahoo.com/_ylt=AwrJ6yegl7JipfcAzB5XNyoA;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1655900193/RO=10/RU=https%3a%2f%2fgithub.com%2fsnyh212/RK=2/RS=jAFa0VbZnIusPrwj.ZmIx9gZ3AA-)  
[LinkdIn: Shmuel-Hoffman](https://www.linkedin.com/in/shmuel-hoffman-254b0223b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BS2rg0PtBTLeG2szT2ZbGmg%3D%3D)