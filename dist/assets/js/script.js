// Here, the ease animation will be use for the global drawing.
new Vivus("main__bg", {
	type: "delayed",
	duration: 800,
});

//  проверка правильности введенных данных

document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("form_id");
	
	form.addEventListener("submit",formSend);

	async function formSend(e) {		
		
		e.preventDefault();

		let error = formValidate(form);

		if (error === 0) {
		} else {					
			// alert("Заполните обязательные поля");
			document.getElementById('btn').classList.toggle('animate__shakeX');
		} 		
		
	}
	

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll("._req");

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains("_email")) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else {
				if (input.value === "") {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}

	function formAddError(input) {
		input.parentElement.classList.add("_error");
		input.classList.add("_error");
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove("_error");
		input.classList.remove("_error");
	}

	



	// функция теста email
	function emailTest(input) {
		return !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
			input.value
		);
	}
});

// валидация мейла

const reg = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
const input = document.getElementById("email");
const check = document.getElementById("check");

function onInput() {
	if (isEmailValid(input.value)) {
		check.style.display = "block";
	}
}

input.addEventListener("input", onInput);

function isEmailValid(value) {
	return reg.test(value);
}



// // дни
for (let day = 1; day <= 31; day++) {
	let options = document.createElement("OPTION");
	document.getElementById("day").appendChild(options).innerHTML = day;
}

// // месяцы
var index = 0;
var arr = [
	"January ",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
var date = new Date();
day = date.getDate();
index = date.getMonth();
if (day > 15) {
	var index = index + 1;
}
//alert(index)
select1 = document.getElementsByName("month")[0];
for (var i = 0; i < 12; i++) {
	if (index > 11) index = 0;
	var opt = document.createElement("option");
	opt.text = arr[index];
	opt.value = arr[index];
	select1.appendChild(opt);
	index++;
}
// годы
for (let year = 1920; year <= 2022; year++) {
	let options = document.createElement("OPTION");
	document.getElementById("year").appendChild(options).innerHTML = year;
}


// password

var myInput = document.getElementById("psw");

// Когда пользователь начинает вводить что-то в поле пароля
myInput.onkeyup = function() {
  // Проверка строчных букв
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Проверка заглавных букв
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Проверка чисел
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Проверить длину
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
};


//# sourceMappingURL=script.js.map
