class Day {
  constructor(num_giorno, num_mese, num_anno) {
    this.num_giorno = num_giorno;
    this.num_mese = num_mese;
    this.num_anno = num_anno;
  }

  renderDay(classe_css) {
    const day_div = document.createElement("div");
    day_div.classList.add("giorno");

    classe_css && day_div.classList.add(classe_css);

    let options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    let today = new Date(this.num_anno, this.num_mese, this.num_giorno);

    day_div.innerText = today.toLocaleDateString("it-IT");

    return day_div;
  }
}

export { Day };
