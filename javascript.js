function tombol(){
		var login = document.getElementById('box');
		var Linky = document.getElementById("tombol");
		Linky.onclick = login.style.display = "block";}

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
