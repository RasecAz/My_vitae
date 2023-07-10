import { JSDocComment } from '@angular/compiler';
import { Component, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-hoja-de-vida',
  templateUrl: './hoja-de-vida.component.html',
  styleUrls: ['./hoja-de-vida.component.css']
})

  
export class HojaDeVidaComponent {
  @ViewChild('frmpdf', {static:true})el!: ElementRef

  imprimir() {
    let pdf = new jsPDF('p', 'pt', 'letter');
    var margin = 30;
    var scale = (pdf.internal.pageSize.width - margin * 2) / document.body.scrollWidth;

    pdf.html(this.el.nativeElement, {
      x: margin,
      y: margin,
      html2canvas: {
        scale: scale,
      },
      callback: (pdf) => {
        pdf.save("HV_CesarAriza.pdf")
      }
    })
    
  }
}
