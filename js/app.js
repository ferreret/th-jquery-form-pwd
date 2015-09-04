// Problem: Hint are shown even when form is valid
// Solution: Hide and show them at appropiate time

var $username        = $('#username');
var $password        = $('#password');
var $confirmPassword = $('#confirm_password');
var $submit          = $(':submit');

// Hide hints
$('form span').hide();

enableSubmitEvent();

function isUserNamePresent () {
	return $username.val().length > 0;
}

function isPasswordValid () {
	return $password.val().length > 8;
}

function arePasswordMatching () {
	return $password.val() === $confirmPassword.val();	
}

function canSubmit () {
	return isPasswordValid() && arePasswordMatching()
			 && isUserNamePresent();
}

function passwordEvent () {
	if ( isPasswordValid() ) {
		// Hide de hint
		$password.next().hide();
	} else {
		// Show the hint
		$password.next().show();
	}		
}

function confirmPasswordEvent () {
	if ( arePasswordMatching() ) {
		$confirmPassword.next().hide();
	} else {
		$confirmPassword.next().show();
	}
}

function enableSubmitEvent () {
	$submit.prop('disabled', !canSubmit());
}

// When event pass on passowrd inputs
$password.focus(passwordEvent)
		 .keyup(passwordEvent)
		 .keyup(confirmPasswordEvent)
		 .keyup(enableSubmitEvent);

// When event happens on confirmation
$confirmPassword.focus(confirmPasswordEvent)
				.keyup(confirmPasswordEvent)
				.keyup(enableSubmitEvent);

$username.focus(enableSubmitEvent)
		 .keyup(enableSubmitEvent);

// SOLUCIÓN PROPIA, A LO MEJOR ES MÁS ÓPTIMA QUE LA 
// QUE SE MUESTRA EN EL PROYECTO

/*var $pass1  = $('#password');
var $pass2  = $('#confirm_password');
var $submit = $(':submit');

function testHint1 ( par ) {
	console.log($pass1.val().length);
	if ($pass1.val().length > 8) {
		$(par).next().hide();
	} else {
		$(par).next().show();
	}
}

function testHint2 ( par ) {
	if ($pass1.val() === $pass2.val()) {
		$(par).next().hide();
	} else {
		$(par).next().show();
	}
}

$pass1.on('keyup change', function () {
	testHint1(this);
	testHint2($pass2);
});

$pass2.on('keyup change', function () {
	testHint1($pass1);
	testHint2(this);
});

$submit.on('click', function ( e ) {
	e.preventDefault();
	console.log("Submit seleccionado");
	testHint1($pass1);
	testHint2($pass2);
})

testHint1($pass1);
testHint2($pass2);*/