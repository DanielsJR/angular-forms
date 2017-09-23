import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-form-template-driven',
  templateUrl: './hero-form-template-driven.component.html',
  styles: [`
    .ng-valid[required], .ng-valid.required  {
        border-left: 5px solid #42A948; /* green */
    }

    .ng-invalid:not(form)  {
       border-left: 5px solid #a94442; /* red */
    }
  `]
})
export class HeroFormTemplateDrivenComponent {

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0], sidekick: false };

}
