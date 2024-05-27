import { LitElement, css, html } from 'lit'




export class NissanSentra extends LitElement {
  static get properties() {
    return {

      /**
       * Este es el titulo  de mi pagina 
      */
      title: { type: String },


      /**
       * Este es el titulo 1 de mi pagina 
      */
      title1: { type: String },

      /**
       * Este es el parrafo 1
       */
      paragraph1: { type: String },

      /**
        * Este es el titulo 2  de mi pagina 
       */
      title2: { type: String },

      /**
       * Este es el parrafo 2
       */
      paragraph2: { type: String },

      /**
        * Este es el titulo 3  de mi pagina 
       */
      title3: { type: String },

      /**
       * Este es el parrafo 3
       */
      paragraph3: { type: String },

      /**
         * Este es el titulo 4  de mi pagina 
        */
      title4: { type: String },

      /**
       * Este es el parrafo 4
       */
      paragraph4: { type: String },

      /**
         * Este es el titulo 5  de mi pagina 
        */
      title5: { type: String },

      /**
       * Este es el parrafo 5
       */
      paragraph5: { type: String },

      /**
         * Este es el titulo 6  de mi pagina 
        */
      title6: { type: String },

      /**
       * Este es el parrafo 6
       */
      paragraph6: { type: String },

      /**
         * Este es el titulo 7  de mi pagina 
        */
      title7: { type: String },

      /**
       * Este es el parrafo 7
       */
      paragraph7: { type: String },

      /**
         * Este es el titulo 8 de mi pagina 
        */
      title8: { type: String },

      /**
       * Este es el parrafo 8
       */
      paragraph8: { type: String },

      /**
         * Este es el titulo 9  de mi pagina 
        */
      title9: { type: String },

      /**
       * Este es el parrafo 9
       */
      paragraph9: { type: String },

     
      /**
       * Esta es la url de la image 1
       */
      Image1url: { type: String },



    }
  }

  constructor() {
    super()

    this.title = 'Sentra'

    this.title1 = 'Número y configuración de cilindros:   '
    this.paragraph1 = '  Motor de 4 cilindros en línea.  '

    this.title2 = 'Desplazamiento del motor:  '
    this.paragraph2 = ' Varía según la generación y la especificación, pero suele estar en el rango de 1.8 a 2.0 litros.    '

    this.title3 = 'Potencia del motor:  '
    this.paragraph3 = ' Entre 124 y 149 caballos de fuerza (hp), o entre 92 y 111 kilovatios (kW), dependiendo del motor y la versión.   '

    this.title4 = 'Torque del motor:   '
    this.paragraph4 = ' Generalmente en el rango de 125 a 146 libras-pie, o aproximadamente 169 a 198 Newton metros.    '

    this.title5 = 'Capacidad de ocupantes:  '
    this.paragraph5 = ' Por lo general, capacidad para 5 pasajeros.   '

    this.title6 = 'Tipo de tracción:    '
    this.paragraph6 = '  Mayormente tracción delantera (FWD).  '

    this.title7 = 'Tipo de transmisión:  '
    this.paragraph7 = 'Principalmente transmisiones automáticas de varias velocidades o transmisiones continuamente variables (CVT).    '

    this.title8 = 'Capacidad de carga:     '
    this.paragraph8 = 'El espacio de carga en el Sentra puede variar según la generación y la configuración, pero suele estar en el rango de 14 a 15 pies cúbicos en el maletero.   '

    this.title9 = 'Capacidad de remolque: '
    this.paragraph9 = ' El Sentra no está diseñado para remolcar cargas pesadas y generalmente no tiene capacidad de remolque significativa.    '

   
    this.Image1url = 'https://file.kelleybluebookimages.com/kbb/base/evox/CP/11114/2016-Nissan-Sentra-front_11114_032_1811x796_QM1_cropped.png '
    



  }

  render() {
    return html`
      <div id = "main">
        <h1>${this.title}</h1>
        
        <h1>${this.title1}</h1>
        <p>${this.paragraph1}</p>

        <h1>${this.title2}</h1>
        <p>${this.paragraph2}</p>
        
        <h1>${this.title3}</h1>
        <p>${this.paragraph3}</p>
        
        <h1>${this.title4}</h1>
        <p>${this.paragraph4}</p>
        
        <h1>${this.title5}</h1>
        <p>${this.paragraph5}</p>
        
        <h1>${this.title6}</h1>
        <p>${this.paragraph6}</p>
        
        <h1>${this.title7}</h1>
        <p>${this.paragraph7}</p>
        
        <h1>${this.title8}</h1>
        <p>${this.paragraph8}</p>
        
        <h1>${this.title9}</h1>
        <p>${this.paragraph9}</p>
        
        
        <img src = "${this.Image1url}">

        
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
      body{
        background-color: tomato
      }
      #parrafo {
        background-color: blue
        
      }
      #main {
        background-color: rgb(187, 109, 109);
        font-family: Times;
        color: chocolate 
      }
      div{
        padding: 15vw ;
      }
      #main {
        background-color: darkgreen
      }
      img {
        width:20vw;
      }
      p {
        font-size:8vh;
      }
      h1{
        font-size:10vh;
      }

      #titulo-1 {
        color: coral;
      }
      #titulo-2 {
        color: aqua;
      }
      #titulo-3 {
        color: chartreuse;
      }
      #titulo-4 {
        color: brown;
      }
      #titulo-5 {
        color: darkgreen;
      }
      #titulo-6 {
        color: darkorchid;

      }





    `
  }
}

window.customElements.define('nissan-sentra', NissanSentra)
