//Define DateTimestamp for today
$("#currentDay").text(moment().format("MMM Do YYYY hh:mm:ss"));





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