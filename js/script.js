//Test if jQuery is Working.
/*
window.onload = function() {
    if (window.jQuery) {
        // jQuery is loaded
        alert("jQuery is working.");
    } else {
        // jQuery is not loaded
        alert("jQuery is not working.");
    }
}
*/

//Set focus on the first text field.
$("#name").focus();

//"Other-Title" textbox and label hidden upon page load.
$("#other-title").hide();

//”Other-Title” textbox and label un-hidden if 'other' role selected.
$("#title").change(function(){
  //alert("The text has been changed.");
  let optionValue = $(this).val();
  if (optionValue === "other") {
    $("#other-title").show();
  }
});
