import { LitElement, css, html } from 'lit'
import './nissan-sentra'
import './nissan-altima'
import './nissan-rogue'
import './nissan-maxima'
import './nissan-pathfinder'


export class MyElement extends LitElement {
  static get properties() {
    return {
      /**
       * The number of page currently displayed
       */
      position: { type: Number },
    }
  }

  constructor() {
    super()
    this.position = 0
  
  }

  setPrevious(e) {
    if (this.position === 0) {
      this.position = 4
    } else {
      this.position--
    }
  }

  setNext(e) {
    if (this.position === 4) {
      this.position = 0
    } else {
      this.position++
    }
  }

  render() {
    return html`
      <div>
    <button @click="${this.setPrevious}">Anterior</button>
    <button @click="${this.setNext}">Siguiente</button>
    <h1>${this.position}</h1>
    ${this.position === 0 ? html` <nissan-sentra></nissan-sentra>` : ''}

    ${this.position === 1 ? html` <nissan-altima></nissan-altima>` : ''}

    ${this.position === 2 ? html` <nissan-rogue></nissan-rogue>` : ''}

    ${this.position === 3 ? html` <nissan-maxima></nissan-maxima>` : ''}

    ${this.position === 4 ? html` <nissan-pathfinder></nissan-pathfinder>` : ''}

    
      </div>
    
    `
  }

  

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      
      }
      

  `
  }
}

window.customElements.define('my-element', MyElement)
