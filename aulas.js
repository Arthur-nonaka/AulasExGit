async function getAulas(ano) {
    const resp = await fetch("./aulas.json");
    let aulas = await resp.json();
    console.log(aulas);
    return aulas[ano];
}
let meses = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
const trs = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'];

// async function getTodosOsDias(ano) {
//     const dias = meses.map(async mes => {
//         return await getAulas(ano, mes)
//     });
//     return dias;
// }

async function criarDias() {
    const dados = await getAulas("2022");
    meses.forEach(function (mes) {
        const elemMes = document.querySelector("." + mes);
        let dias = dados[elemMes.dataset.mes];

        dias.forEach(function (dia) {
            const elemSemana = document.querySelector("tr." + dia.dia_semana)
            const elemDia = document.createElement("td");
            if (dia.quantidade  < 2) {
                elemDia.setAttribute("class", "dia ruim");
            }
            else if (dia.quantidade < 4) {
                elemDia.setAttribute("class", "dia medio");
            }
            else if (dia.quantidade > 3) {
                elemDia.setAttribute("class", "dia bom");
            }
            const divElem = document.createElement("div");
            divElem.innerHTML = "Quantidade: " + dia.quantidade + "Dia: " + dia.dia;
            divElem.setAttribute("class", "info")
            elemDia.appendChild(divElem);
            elemDia.addEventListener("mouseenter",function() {
                divElem.classList.add("show");
            });
            elemDia.addEventListener("mouseleave", function (){
                divElem.classList.remove("show");
            });
            elemSemana.appendChild(elemDia);
        })
    })
}

// function criarTD() {
//     trs.forEach(tr => {
//         const elemTR = document.querySelector("." + tr);
//         for (let x = 0; x <= 53; x++) {
//             elemTR.innerHTML += `<td class="dia"></td>`;
//         }
//     });
// }

var button1 = document.getElementById("buttonYear2022");
var button2 = document.getElementById("buttonYear2023");
// button1.addEventListener("click", () => getTodosOsDias(2022));
// button2.addEventListener("click", () => getTodosOsDias(2023));

criarDias();