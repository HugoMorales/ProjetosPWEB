function calc(){
	var result = 0.0;
	
	if($('input:radio[id="pP1"]').is(':checked')){
		result = result + 15;
		}
	else
		{
		if($('input:radio[id="pP2"]').is(':checked'))
			result = result + 20;
		else
			if($('input:radio[id="pP3"]').is(':checked'))
				result = result + 17.5;
		}
	
	if($('input:checkbox[id="aP1"]').is(':checked'))
		result = result + 7.25;
	
	if($('input:checkbox[id="aP2"]').is(':checked'))
		result = result + 6.75;
	
	if($('input:checkbox[id="aP3"]').is(':checked'))
		result = result + 9.45;
	
	if($('input:checkbox[id="pP4"]').is(':checked'))
		result = result + 8.99;
	
	if($("#selCon").val() == "IDK1")
		result = result - (result * 0.2);
	else
		{
		if($("#selCon").val() == "IDK2")
			result = result - (result * 0.25);
		}
	
	alert(result);
	
	document.getElementById("hResult").innerHTML = "Conta final:";
	document.getElementById("resultCalc").innerHTML = "R$ " + result;
}