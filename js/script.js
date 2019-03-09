//Test if jQuery is Working.
window.onload = function() {
    if (window.jQuery) {
        // jQuery is loaded
        console.log("jQuery is working.");
    } else {
        // jQuery is not loaded
        console.log("jQuery is not working.");
    }
}


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

//For the T-Shirt "Color" menu, only display the color options
//that match the design selected in the "Design" menu.

//Display & Select Relevant Colors based on Design
$("#design").change(function(){
  let optionValue = $(this).val();
  if (optionValue === "select theme") {
    $("#cfb").show();
    $("#dsg").show();
    $("#g").show();
    $("#t").show();
    $("#sb").show();
    $("#dg").show();
  }
});

//Display & Select Relevant Colors based on Design
$("#design").change(function(){
  let optionValue = $(this).val();
  if (optionValue === "js puns") {
    $("#t").hide();
    $("#sb").hide();
    $("#dg").hide();
    $("#cfb").show();
    $("#dsg").show();
    $("#g").show();
    $("#color").val("cornflowerblue");
  }
});

//Display & Select Relevant Colors based on Design
$("#design").change(function(){
  let optionValue = $(this).val();
  if (optionValue === "heart js") {
    $("#cfb").hide();
    $("#dsg").hide();
    $("#g").hide();
    $("#t").show();
    $("#sb").show();
    $("#dg").show();
    $("#color").val("tomato");
  }
});

//In the Register for Activities Section, Only Allow non-conflicting
//events to be concurrently checked.
$("#jsFrameworks").on("change", function() {
  if(this.checked) {
    $("#express").prop("checked", false);
  }
});

$("#express").on("change", function() {
  if(this.checked) {
    $("#jsFrameworks").prop("checked", false);
  }
});

$("#libraries").on("change", function() {
  if(this.checked) {
    $("#node").prop("checked", false);
  }
});

$("#node").on("change", function() {
  if(this.checked) {
    $("#libraries").prop("checked", false);
  }
});
