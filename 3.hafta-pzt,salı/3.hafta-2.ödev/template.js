function domFunction(){
    document.getElementById("dom_id").innerHTML=dateDogus();
    
} 
    
function dateDogus(){


    var tarih=new Date();
	var yil=tarih.getFullYear();
	var ay=tarih.getMonth();
	var gun=tarih.getDay();
	var saat=tarih.getHours();
	var dakika=tarih.getMinutes();
	var saniye=tarih.getSeconds();	
	document.write(gun+"/"+ay+"/"+yil+"<br>"+saat+":"+dakika+":"+saniye);
}