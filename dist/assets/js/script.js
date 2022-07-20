// валидация мейла

const reg = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;

const input = document.getElementById('email');
const check = document.getElementById('check');

function onInput() {
    
  if (isEmailValid(input.value)) {
    check.style.display = 'block';
  } else {
    input.style.borderColor = 'red';
  }
}

input.addEventListener('input', onInput);

function isEmailValid(value) {
return reg.test(value);
}

// // дни
for (let day = 1; day <= 31; day++) {
  let options = document.createElement("OPTION");
  document.getElementById("day").appendChild(options).innerHTML = day;
}

// // месяцы
var index=0;
var arr=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь",
"Ноябрь","Декабрь"];
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
for (let year = 1995; year <= 2022; year++) {
  let options = document.createElement("OPTION");
  document.getElementById("year").appendChild(options).innerHTML = year;
}
//# sourceMappingURL=script.js.map
