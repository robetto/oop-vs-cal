import { Month } from "./js/month.js";

const main = document.querySelector("main");
const prevMonth = document.querySelector("#prevMonth");
const nextMonth = document.querySelector("#nextMonth");

const oggi = new Date();
let [mese_selezionato, anno_selezionato] = [
  oggi.getMonth(),
  oggi.getFullYear(),
];

let selected_month = new Month(mese_selezionato, anno_selezionato);

main.append(selected_month.renderMonth());

prevMonth.addEventListener("click", () => {
  main.innerHTML = "";

  if (mese_selezionato == 0) {
    mese_selezionato = 11;
    anno_selezionato = anno_selezionato - 1;
  } else {
    mese_selezionato--;
  }
  selected_month = new Month(mese_selezionato, anno_selezionato);
  main.append(selected_month.renderMonth());
});

nextMonth.addEventListener("click", () => {
  main.innerHTML = "";

  if (mese_selezionato == 11) {
    mese_selezionato = 0;
    anno_selezionato++;
  } else {
    mese_selezionato--;
  }
  selected_month = new Month(mese_selezionato, anno_selezionato);
  main.append(selected_month.renderMonth());
});
