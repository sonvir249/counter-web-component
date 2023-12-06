export default class Counter extends HTMLElement {
  constructor() {
    super();
    this.counter = 0;
    this.attachShadow({ mode: "open" });
    this.render();
  }

  css = `
   :host {
    display: block;
    max-width: 550px;
   }
  `;

  template = () =>
    `<div class="counter">
      <h5>This is Counter Component</h5>
      <p id="counter">${this.counter}</p>
      <div>
        <button id="increment">+</button>
        <button id="decrement">-</button>
      </div>
    </div>`;

  clickIncrement = () => {
    this.counter++;
    this.render();
  };

  clickDecrement = () => {
    if (this.counter > 0) {
      this.counter--;
      this.render();
    }
  };

  render() {
    this.shadowRoot.innerHTML = `
      <style>${this.css}</style>
      ${this.template().trim()}
    `;
    this.shadowRoot
      .querySelector("#increment")
      .addEventListener("click", this.clickIncrement);

    this.shadowRoot
      .querySelector("#decrement")
      .addEventListener("click", this.clickDecrement);
  }
}
