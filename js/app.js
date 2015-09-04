// Problem: Hint are shown even when form is valid
// Solution: Hide and show them at appropiate time

// Hide hints
var $pass1  = $('#password');
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
testHint2($pass2);