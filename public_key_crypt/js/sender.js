function handleShow() {
  const modal          = document.getElementById("modal");
  const publicKey      = document.getElementById("public-key").value;
  const publicPareKey1 = document.getElementById("public-pare-key1").value;
  const publicPareKey2 = document.getElementById("public-pare-key2").value;

  document.getElementById("public-key-show").innerText = publicKey;
  document.getElementById("public-pare-key1-show").innerText = publicPareKey1;
  document.getElementById("public-pare-key2-show").innerText = publicPareKey2;

  modal.classList.remove("hidden");
}

function handleClose() {
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
}

function calcPare2() {
  const sendNumber = document.getElementById("send-number").value;
  const publicKey  = document.getElementById("public-key").value;

  document.getElementById("public-pare-key2").value = sendNumber * publicKey;
}

function calcSecret() {
  const sendNumber = document.getElementById("send-number").value;
  const publicPareKey1 = document.getElementById("public-pare-key1").value;

  document.getElementById("secret-number").value = sendNumber * publicPareKey1;
}