function calcCrypt() {
  const commonKey    = document.getElementById("common-key").value;
  const cryptNumber = document.getElementById("crypt-number").value;

  const secretNumber  = cryptNumber / commonKey;
  document.getElementById("secret-number").value = secretNumber;
}