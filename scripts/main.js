
function BMI()
{
    var w=document.getElemntById('w').value;
     var h=document.getElemntById('h').value;
     var bmi=w(h/100*h/100);
     var bmio=(bmi.toFixed(2));
     
     document.getElementById("result").innerHTML="Your BMI is: "+bmio;
     

}
function Clear()
{
    focument.getElementById("result").innterHTML="";
}