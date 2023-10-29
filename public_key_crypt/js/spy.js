function addPredict() {
  const predictNumber = document.getElementById("predict-number").value;
  const table = document.getElementById("predict-table");
  
  if (predictNumber) {
    const tr = document.createElement("tr");
    tr.classList.add("border");
    const th = document.createElement("th");
    th.innerText = "予想: "
    tr.appendChild(th);
    const td = document.createElement("td");
    td.innerText = predictNumber;
    tr.appendChild(td);
    table.appendChild(tr);
  }
}