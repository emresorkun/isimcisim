$(function() {
    
   $(".my1Button").on("click",function(){
    let printInput1=$("#inputid1").val();
    let printInput2=$("#inputid2").val();
    let firstnumber=parseInt(printInput1);
    let secondnumber=parseInt(printInput2);
    let summa=firstnumber+secondnumber;
    
    $("<p>").html(summa).appendTo($("body"));

    let pTag = $("<p>");
 
    if(summa>100) {
    pTag.html("buyuk");
    }
else {
  pTag.html("kucuk");
}
 
pTag.appendTo($("body"))

   }) 
});

