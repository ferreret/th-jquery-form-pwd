// Problem: Hint are shown even when form is valid
// Solution: Hide and show them at appropiate time

// Hide hints
var $pass1 = $('#password');
var $hint1 = $pass1.next();
var $pass2 = $('#confirm_password');
var $hint2 = $pass2.next();

function testHint1() {
	console.log($pass1.val().length);
	if ($pass1.val().length > 8) {
		console.log('hiding');
		console.log($hint1);
		$hint1.hide();		
	} else {
		console.log('showing');
		console.log($hint1);
		$hint1.show();
	}
}

function testHint2() {
	if ($pass1.val() === $pass2.val()) {
		$hint2.hide();
	} else {
		$hint1.show();
	}
}

function testHints() {
	console.log("text hints");
	testHint1();
	testHint2();
}

testHints();

$pass1.on('change', testHints);
$pass2.on('change', testHints);