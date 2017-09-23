import { Hero } from '../models/hero';
import { Component } from '@angular/core';



@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styles: [`
  .ng-valid[required], .ng-valid.required  {
      border-left: 5px solid #42A948; /* green */
  }

  .ng-invalid:not(form)  {
     border-left: 5px solid #a94442; /* red */
  }
`]
})
export class HeroFormComponent {

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  hero = new Hero(18, 'Dr IQ', 'Sr Wise', this.powers[0], false);
   // hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0], sidekick: false };
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newHero() {
     // this.hero = { name: '', alterEgo: '', power: this.powers[0], sidekick: false };
     this.hero = new Hero(42, '', '', '', false);
  }
}
