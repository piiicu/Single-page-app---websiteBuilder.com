import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Proiecte");
  }

  async getHtml() {
    return `
    <div class="overlap">
    <h2 class="content-title">
        Portofoliul nostru ...
    </h2>
    <div class="line"></div>
  </div>
  <div class="content-main">
    <div class="article">
      <p class="content">
        Fiind la inceput, din pacate, nu avem un portofoliu ca sa va arate munca noastra.
      </p>
      <div class="images-project">
        <img src="static/images/proiecte5.jpg" alt="">
        <img src="static/images/proiecte10.jpg" alt="">
        <img src="static/images/proiecte3.jpg" alt="">
        <img src="static/images/proiecte4.jpg" alt="">
        <img src="static/images/proiecte1.jpg" alt="">
        <img src="static/images/proiecte6.jpg" alt="">
        <img src="static/images/proiecte7.jpg" alt="">
        <img src="static/images/proiecte8.jpg" alt="">
        <img src="static/images/proiecte9.jpg" alt="">
        <img src="static/images/proiecte2.jpg" alt="">
        <img src="static/images/proiecte11.jpg" alt="">
        <img src="static/images/proiecte12.jpg" alt="">
      </div>
      <p class="content content-style">
        Fa parte din portofoliul nostru, va asteptam!
      </p>
    </div>
  </div>
        `;
  }
}
