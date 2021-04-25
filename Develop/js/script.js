//Define DateTimestamp for today
$("#currentDay").text(moment().format("MMMM Do YYYY hh:mm:ss a"));

// For the button of each row -- each time clicked, need to loop back to the overarching parent id = 'hour1'
    $("#saveBtn").on("click", function() {
        var currentHour = $(this)
            .parent()
            .attr("id");
        
        var descriptionText = $("<textarea>")
            .attr("class", "description")
            .val()
            .text();
        
            localStorage.setItem(currentHour, descriptionText);
    })

    $("#hour1 .description").val(localStorage.getItem("hour1"));
    $("#hour2 .description").val(localStorage.getItem("hour2"));
    $("#hour3 .description").val(localStorage.getItem("hour3"));
    $("#hour4 .description").val(localStorage.getItem("hour4"));
    $("#hour5 .description").val(localStorage.getItem("hour5"));
    $("#hour6 .description").val(localStorage.getItem("hour6"));
    $("#hour7 .description").val(localStorage.getItem("hour7"));
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));



    function hours() {
        var currentMoment = moment().hour();

        $(".hour-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);
             
            if (blockTime < currentMoment) {
                $(this).addClass("past");
                   $(this).removeClass("future");
                   $(this).removeClass("present");
            }
            else if (blockTime === currentMoment) {
                $(this).removeClass("past");
                    $(this).addClass("present");
                    $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                     $(this).removeClass("past");
                     $(this).addClass("future");
            }
        })
    }
    hours();



// $(".row").on("click", "p", function() {
//     var text = $(this)
//     .text()
//     .trim();
//     console.log(text);
//     var textInput = $("<textarea>")
//       .addClass("form-control")
//       .val(text);
//     $(this).replaceWith(textInput).textInput.trigger("focus");


// $(".row").on("blur", "textarea", function() {
//     //get the text area's current value/text
//     var text = $(this)
//       .val()
//       .trim();
//     // get the parent ul's id attribute
//     var status = $(this)
//       .closest(".description")
//       .attr("id")
//       .replace("list-", "");
//   });
//   // get the task's position in the list of other li elements
//   var index = $(this)
//   .closest(".description-item")
//   .index();
//   //recreate p element
//   var taskP = $("<p>")
//   .addClass("m-1")
//   .text(text);

//   //replace textarea with p element
//   $(this).replaceWith(taskP);
// });