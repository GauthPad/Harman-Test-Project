function validate() {

	if (document.loginForm.firstname.value == "") {
		document.loginForm.firstname.focus();
		document.getElementById('firstname').style.borderColor = "red";
		document.getElementById('errorMessage').innerText = 'Please provide your first name!';
		return false;
	} else if (document.loginForm.firstname.value.length < 3) {
		document.loginForm.firstname.focus();
		document.getElementById('firstname').style.borderColor = "red";
		document.getElementById('errorMessage').innerText = 'First name should be atleast 3 charecters long!';
		return false;
	} else {
		document.getElementById('firstname').style.borderColor = "#f0f8ff";
	}

	if (document.loginForm.lastname.value == "") {
		document.loginForm.lastname.focus();
		document.getElementById('lastname').style.borderColor = "red";
		document.getElementById('errorMessage').innerText = 'Please provide your last name!';
		return false;
	} else {
		document.getElementById('lastname').style.borderColor = "#f0f8ff";
	}

	if (document.loginForm.email.value == "") {
		document.loginForm.email.focus();
		document.getElementById('email').style.borderColor = "red";
		document.getElementById('errorMessage').innerText = 'Please provide your Email!';
		return false;
	} else {
		document.getElementById('email').style.borderColor = "#f0f8ff";
	}

	if (document.loginForm.email.value) {
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

		if (reg.test(document.loginForm.email.value) == false) {
			document.getElementById('email').style.borderColor = "red";
			document.getElementById('errorMessage').innerText = 'Invalid Email Address';
			return false;
		}
	} else {
		document.getElementById('email').style.borderColor = "#f0f8ff";
	}

	if (document.loginForm.password.value == "") {
		document.loginForm.password.focus();
		document.getElementById('password').style.borderColor = "red";
		document.getElementById('errorMessage').innerText = 'Please provide your password!';
		return false;
	} else if (document.loginForm.password.value.length < 5) {
		document.loginForm.password.focus();
		document.getElementById('password').style.borderColor = "red";
		document.getElementById('errorMessage').innerText = 'Password should be atleast 5 charecters long!';
		return false;
	}else {
		document.getElementById('password').style.borderColor = "#f0f8ff";
	}

	return (true);
}