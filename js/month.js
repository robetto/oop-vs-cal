import { Day } from "./day.js";

class Month {
  constructor(num_mese, num_anno) {
    this.num_mese = num_mese;
    this.num_anno = num_anno;
  }

  renderMonth() {
    const month_div = document.createElement("div");
    month_div.classList.add("mese");
    month_div.classList.add(`mese_${this.num_mese + 1}`);

    month_div.append(this.renderMonthHeading());

    const month_grid = document.createElement("div");
    month_grid.classList.add("month_grid");

    this.renderPaddingDays(month_grid)

    const giorniMese = this.getNumTotaleGiorni();

    for (let index = 0; index < giorniMese; index++) {
      const giorno = new Day(index + 1, this.num_mese, this.num_anno).renderDay(
        "regular_day"
      );
      month_grid.append(giorno);
    }

    month_div.append(month_grid);

    return month_div;
  }

  getNumTotaleGiorni() {
    let anno = this.num_anno;
    let mese_precedente = this.num_mese;
    if (this.num_mese == 0) {
      mese_precedente = 11;
      anno--;
    } else {
      mese_precedente--;
    }

    const ultimo_giorno_mese_precedente = new Date(anno, mese_precedente, 0);

    const totale_giorni = ultimo_giorno_mese_precedente.getDate();

    return totale_giorni;
  }

  /*
   * Domenica 0
   * Lunedì 1
   * Martedì 2
   * Mercoledì 3
   * Giovedì 4
   * Venerdì 5
   * Sabato 6
   */
  getNumPaddingDays() {
    const primo_giorno_del_mese = new Date(this.num_anno, this.num_mese, 1);
    const tipo_primo_giorno = primo_giorno_del_mese.getDay();

    let num_padding_days;
    if (tipo_primo_giorno == 0) {
      num_padding_days = 6;
    } else {
      num_padding_days = tipo_primo_giorno - 1;
    }

    return num_padding_days;
  }

  renderMonthHeading() {
    const heading_div = document.createElement("div");
    heading_div.classList.add("heading_mese");
    heading_div.innerHTML = `
    <div class="heading_giorno">Lunedì</div>
    <div class="heading_giorno">Martedì</div>
    <div class="heading_giorno">Mercoledì</div>
    <div class="heading_giorno">Giovedì</div>
    <div class="heading_giorno">Venerdì</div>
    <div class="heading_giorno">Sabato</div>
    <div class="heading_giorno">Domenica</div>
    `;
    return heading_div;
  }

  renderPaddingDays(contenitore) {
    const paddingDays = this.getNumPaddingDays();

    let padding_mese = this.num_mese
    let padding_giorno = -paddingDays+1

    for (let index = 0; index < paddingDays; index++) {
      const giorno = new Day(padding_giorno, padding_mese, this.num_anno).renderDay("padding_day");
      padding_giorno++;
      contenitore.append(giorno);
    } 
  }
}

export { Month };
