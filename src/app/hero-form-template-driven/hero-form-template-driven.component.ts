import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-form-template-driven',
  templateUrl: './hero-form-template-driven.component.html',
  styles: []
})
export class HeroFormTemplateDrivenComponent {

  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0] };

}
