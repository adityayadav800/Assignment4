function Validate(x)
{
	flag=true;
    otp=document.getElementById('otp')
    if(otp.value==''){
    	alert("Plese Enter OTP");
    	flag=false;
    }
	var option=document.getElementsByName('pmethod');
    console.log("I came In");
	if (!(option[0].checked || option[1].checked || option[2].checked)) {
    	alert("Please Select Mode of Payment");
    	flag=false;
  		}
	var e = document.getElementById("Loc");
	var strUser = e.options[e.selectedIndex].value;
	var strUser1 = e.options[e.selectedIndex].text;
	if(strUser==0)
	{
	alert("Please select a Location");
	flag=false;
	}

 	if (x.Agree.checked == false){
        	alert ('You didn\'t Agree to terms and Conditions check that box!');
    	}
    return flag;
}

