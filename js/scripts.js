let elResult = document.querySelector(".result");
let userName = prompt("Isming nima og'ayni");
let money = Number(prompt(`${userName} qancha jigar bor?`));
let dollorAmunt = 9433.34;
let euroAmunt = 10354.03;
let bilet = 500 * dollorAmunt;
let hotel = 250 * dollorAmunt;
let relax = 150 * euroAmunt;
let totalCoast = bilet + hotel + relax;
let go = "😎Brat ishlaga omad. Davay bosing soqqa yetadi;🚀 ";
let earn = "‍👨‍🔧Brat ishlash kerak soqqa kerak💰💰";
if (money > totalCoast) {
  elResult.textContent = go;
} else {
  elResult.textContent = earn;
}
