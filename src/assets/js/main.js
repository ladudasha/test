// Here, the ease animation will be use for the global drawing.
new Vivus(
	'main__bg',
	{
	  type: 'delayed',
	  duration: 800
	}	
  );





// // дни
for (let day = 1; day <= 31; day++) {
  let options = document.createElement("OPTION");
  document.getElementById("day").appendChild(options).innerHTML = day;
}

// // месяцы
var index=0;
var arr=["January ","February","March","April","May","June","July","August","September","October",
"November","December"];
var date=new Date();
day=date.getDate();
index=date.getMonth();
if(day>15){
	var index=index+1;
	}
	//alert(index)
select1=document.getElementsByName('month')[0]	;
for(var i=0;i<12;i++){
	if(index>11) index=0;
	var opt=document.createElement('option');
	opt.text=arr[index];
	opt.value=arr[index];
	select1.appendChild(opt);
	index++
	}
// годы
for (let year = 1920; year <= 2022; year++) {
  let options = document.createElement("OPTION");
  document.getElementById("year").appendChild(options).innerHTML = year;
}



// валидация мейла

$(function() {
	$(".main__btn").on("check", validate);
   
	// Validate email
	function validateEmail(email) {
	  var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
	  return re.test(String(email).toLowerCase());
	}
	 
	// send form
	function sendForm() {
	  $(".error").text("Form sending").fadeIn();
	}
   
	// validate email and send form after success validation
	function validate() {
	  var email = $(".form__input-mail").val();
	  var $error = $(".error");
	  $error.text("");
   
	  if (validateEmail(email)) {
		$error.fadeOut();
		sendForm();
	  } else {
		$error.fadeIn();
		$error.text(email + " is not valid");
	  }
	  return false;
	}
  });