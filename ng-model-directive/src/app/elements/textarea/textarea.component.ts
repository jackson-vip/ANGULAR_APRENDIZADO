import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss'
})
export class TextareaComponent implements AfterViewInit {

  text: string = 'Texto inicial do textarea';

  // Acessa o NgModel do textarea usando ViewChild
  @ViewChild('meuTextareaFormControl') textareaFormControl!: NgModel;

  // Método chamado após a inicialização da view
  ngAfterViewInit() {
    console.log('Textarea Form Control:', this.textareaFormControl);
  }

  onChange(text: string) {
    this.text = text;
  }

  showText() {
    // console.log('Texto Atual:', this.textareaFormControl.value);
    console.log('Texto Atual :', this.text);
    
    // Atualiza o conteúdo do elemento com id 'showText' 
    const element = document.getElementById('showText');
    if (element) {
      // element.textContent = this.text;
      element.textContent = this.text; 
    }
  }
}
