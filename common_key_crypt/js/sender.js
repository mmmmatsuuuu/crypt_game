function calcCrypt() {
  const commonKey    = document.getElementById("common-key").value;
  const secretNumber = document.getElementById("secret-number").value;
  if (commonKey <= 9 || commonKey >= 100) {
    alert("共通鍵は１０〜９９の間で指定してください");
    return;
  }
  if (secretNumber <= 9 || secretNumber >= 100) {
    alert("秘密の数字は１０〜９９の間で指定してください");
    return;
  }
  const cryptNumber  = commonKey * secretNumber;
  document.getElementById("crypt-number").value = cryptNumber;
}

function handleShow() {
  const modal          = document.getElementById("modal");
  const cryptNumber    = document.getElementById("crypt-number").value;
  const modalNumberDiv = document.getElementById("modal-number-div");
  modalNumberDiv.innerText = cryptNumber;
  modal.classList.remove("hidden");
}

function handleClose() {
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
}