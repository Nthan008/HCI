const type = ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"];
function canGiveBlood(a, b){
	if (!type.includes(a) || !type.includes(b)){
		return false
	}
	else if(b[b.length - 1] == "-" && a[a.length - 1] == "+"){
		return false;
	}
	else if(b[0] == "O" && a[0] != "O"){
        return false
	}
	else if((b[0] == 'B' || b[1] == 'B') && !a.includes('B')){
		return false;
	}
	else if((a[0] == "A" && b[0] == ('B')) || (a[1] == "B" && b[1] != "B")){
		return false;
	}
	else{
		return true;
	}
}

console.log(canGiveBlood("AB-", "B-"));
console.log(canGiveBlood("BA+", "AB+"));
console.log(canGiveBlood("O-", "O-"));	 