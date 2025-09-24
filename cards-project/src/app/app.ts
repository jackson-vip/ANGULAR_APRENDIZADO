import { Component } from '@angular/core';

// Definindo um tipo para os planos
type CardColor = 'orange' | 'purple';

interface Plan {
  type: string;
  price: number;
  color: CardColor;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
})
export class App {
  onButtonClick() {
    console.log('Button clicked!');
  }

  // Lista com os planos disponíveis
  plans: Plan[] = [
    { type: 'Básico', price: 19, color: 'orange' },
    { type: 'Profissional', price: 29, color: 'purple' },
    { type: 'Empresarial', price: 49, color: 'orange' },
  ];
}
