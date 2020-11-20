//$(function () { $("#myButtons1 .btn").click(function(){ $(this).button('toggle'); }); });
//$(function() { $("#myButtons2 .btn").click(function(){ $(this).button('loading').delay(1000).queue(function() { }); }); });
//$(function() { $("#myButtons3 .btn").click(function(){ $(this).button('loading').delay(1000).queue(function() { $(this).button('reset'); }); }); });
//$(function() { $("#myButton4").click(function(){ $(this).button('loading').delay(1000).queue(function() { $(this).button('complete'); }); }); });
$("[data-toggle='toggle']").click(function() {
    var selector = $(this).data("target");
    $(selector).toggleClass('in');
});
let 
function display(){
      let content="";
      let departure=document.getElementById("fromwere").value;
      let arrival=document.getElementById("towere").value;
     // let firstname=document.getElementById("firstname").value;
      let bus=document.getElementById("bus").value;
      content+="Bus"+" "+bus+" "+"from"+" "+departure+" "+"just arrived"+" "+arrival+"."+"<p>Thanks</p>";
      let output=document.getElementById("output");
      output.innerHTML=content;
      }