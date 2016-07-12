var userName = document.getElementById("userName");
var userPassword = document.getElementById("userPassword");
var userPassword1 = document.getElementById("userPassword1");
var userPhone = document.getElementById("userPhone");
var errorName = document.getElementById("errorName");
var errorNameSymbol = document.getElementById("errorNameSymbol");
var errorPhone = document.getElementById("errorPhone");
var errorPassword = document.getElementById("errorPassword");
var errorPasswordSymbol = document.getElementById("errorPasswordSymbol");
var errorPasswordChange = document.getElementById("errorPasswordChange");


function validate(){
    userName.style.border = "1px solid black"
    userPhone.style.border = "1px solid black";
    userPassword.style.border = "1px solid black";
    userPassword1.style.border = "1px solid black";

    var userN = userName.value.length;
	var userPass = userPassword.value.length;
    var userPassCorrect = userPassword.value;
    var userPassCorrect1 = userPassword1.value;
	var reg1 = /\W/g;
	var reg2 = /[^0-9]/g;
    var w8 = true;

	if((!userName.value)||(userName.value.search(reg1) != -1)){
        userName.style.border = "2px solid red";
        errorName.style.top = "105px";
        errorName.style.left = "400px";
        setTimeout('errorName.style.visibility = "visible"', 1000);
        setTimeout('errorName.style.visibility = "hidden"', 7000);
        setTimeout('userName.style.border = "1px solid black"',7700);
        w8=false;
	}	
    if((userN<5)){
		userName.style.border = "2px solid red";
        errorNameSymbol.style.top = "117px";
        errorNameSymbol.style.left = "400px";
        setTimeout('errorNameSymbol.style.visibility = "visible"', 1000);
        setTimeout('errorNameSymbol.style.visibility = "hidden"', 7000);
        setTimeout('userName.style.border = "1px solid black"',7700);
        w8=false;
	}
    if((!userPhone.value)||(userPhone.value.search(reg2) != -1)||(userPhone.value.length != 10)){
        userPhone.style.border = "2px solid red";
        errorPhone.style.top = "208px";
        errorPhone.style.left = "400px";
        setTimeout('errorPhone.style.visibility = "visible"', 1000);
        setTimeout('errorPhone.style.visibility = "hidden"', 7000);
        setTimeout('userPhone.style.border = "1px solid black"',7700);
        w8=false;
    }
    if((!userPassword.value)||(userPassword.value.search(reg1) != -1)){
		userPassword.style.border = "2px solid red";
        errorPassword.style.top = "296px";
        errorPassword.style.left = "400px";
        setTimeout('errorPassword.style.visibility = "visible"', 1000);
        setTimeout('errorPassword.style.visibility = "hidden"', 7000);
        setTimeout('userPassword.style.border = "1px solid black"',7700);
        w8=false;
		}
    if((userPass<5)){
		userPassword.style.border = "2px solid red";
        errorPasswordSymbol.style.top = "308px";
        errorPasswordSymbol.style.left = "400px";
        setTimeout('errorPasswordSymbol.style.visibility = "visible"', 1000);
        setTimeout('errorPasswordSymbol.style.visibility = "hidden"', 7000);
        setTimeout('userPassword.style.border = "1px solid black"',7700);
        w8=false;
	}
    if((userPassCorrect1!==userPassCorrect)){
	    userPassword1.style.border = "2px solid red";
        errorPasswordChange.style.top = "400px";
        errorPasswordChange.style.left = "400px";
        setTimeout('errorPasswordChange.style.visibility = "visible"', 1000);
        setTimeout('errorPasswordChange.style.visibility = "hidden"', 7000);
        setTimeout('userPassword1.style.border = "1px solid black"',7700);
        w8=false;
    }
    if (w8 === false){
        return false;
    }
    alert("Success! Takes my congratulations!");
	return true;
}