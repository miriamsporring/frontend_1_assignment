function submitForm() {

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var author = document.getElementById('author').value;
  var bookTip = document.getElementById('bookTip').value;

  // Exempel: Visa en bekräftelsemeddelande
  alert('Tack för ditt boktips!\n\nNamn: ' + name + '\nMejladress: ' + email + '\nNobelpristagare: ' + author + '\nBoktips: ' + bookTip); //ska fyllas i

  // Rensa formuläret om det behövs
  document.getElementById('bookForm').reset();
}