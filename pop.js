var login = document.getElementById('box');
var mpLink = document.getElementById("tombol");
var close = document.getElementsByClassName("close")[0];
mpLink.onclick = function(tombol) {
    login.style.display = "block";
}
close.onclick = function(close) {
    login.style.display = "none";
}

	function klik(){
		if (document.getElementById('nama').value == ""){
	            alert("Nama Tidak Boleh Kosong");
	            return false;
	        }
	            

	    if (document.getElementById('email').value == ""){
	            alert("Email Tidak Boleh Kosong");
	            return false;
	        }


	     if (document.getElementById('password').value == ""){
	            alert("Password Tidak Boleh Kosong");
	            return false;
	        }
	        else{
	        	location.href="translate.html"
	        }
	    }