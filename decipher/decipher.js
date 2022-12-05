function digitalDecipher(mes, key){
	for(let i = 0; i < mes.length; i++){
	    mes[i] -= parseInt(key.toString()[i % key.toString().length]);}
	const letters = "abcdefghijklmnopqrstuvwxyz";
	var res = "";
	for(let i = 0; i < mes.length; i++){
		res += letters[mes[i] - 1];}
	return res;
}

console.log(digitalDecipher([10, 12, 17, 24, 11, 10, 23, 16, 23, 5, 20] , 7023)) // -> cloudjumper
console.log(digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990)) //-> mubashir
console.log(digitalDecipher([10, 4, 1, 3, 9, 20], 100)) // -> idabit