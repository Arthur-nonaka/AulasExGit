async function getAulas(ano,mes) {
    const resp = await fetch("./aulas.json");
    let aulas = await resp.json();
    return aulas.anos[ano][mes];
}

async function getTodosOsDias(ano) {
    let meses = ["01","02","03","04","05","06","07","08","09","10","11","12"];
    const dias = meses.map(async mes => {
        return await getAulas(ano,mes)
    });
    return dias;
}

function criarTD () {
    const trs = ['seg','ter','qua','qui','sex','sab','dom'];
    trs.forEach(tr => {
        const elemTR = document.querySelector("."+tr);
        for(let x =0 ;x <= 53; x++) {
            elemTR.innerHTML += `<td class="dia"></td>`;
        }
    });
}
var button1 = document.getElementById("buttonYear2022");
var button2 = document.getElementById("buttonYear2023");
button1.addEventListener("click", () => getTodosOsDias(2022));
button2.addEventListener("click", () => getTodosOsDias(2023));

criarTD();