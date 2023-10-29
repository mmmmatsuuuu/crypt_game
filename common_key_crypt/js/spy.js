function addPredict() {
  const predictNumber = document.getElementById("predict-number").value;
  if (predictNumber >= 10 && predictNumber <= 99) {
    const table = document.getElementById("predict-table");
  
    const tr = document.createElement("tr");
    tr.classList.add("border");
    const th = document.createElement("th");
    th.innerText = "予想: "
    tr.appendChild(th);
    const td = document.createElement("td");
    td.innerText = predictNumber;
    tr.appendChild(td);
    table.appendChild(tr);
  } else {
    alert("予想される数字は１０〜９９の間です。");
  }
}