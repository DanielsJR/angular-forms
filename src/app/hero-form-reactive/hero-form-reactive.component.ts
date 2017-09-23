import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/forbidden-name.directive';


@Component({
  selector: 'app-hero-form-reactive',
  templateUrl: './hero-form-reactive.component.html',
  styles: [`
  .ng-valid[required], .ng-valid.required  {
      border-left: 5px solid #42A948; /* green */
  }

  .ng-invalid:not(form)  {
     border-left: 5px solid #a94442; /* red */
  }
`]
})
export class HeroFormReactiveComponent implements OnInit{

  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];
  hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0], sidekick: false };
  heroForm: FormGroup;

  constructor(private fb: FormBuilder) { } // <--- inject FormBuilder

  ngOnInit(): void {
    // this.createForm1();
    this.createForm2();

  }

  createForm1() {
    this.heroForm = new FormGroup({
      'name': new FormControl(this.hero.name, [Validators.required, Validators.minLength(4), this.nombreProhibidoValidator(/luka/i)]),
      'alterEgo': new FormControl(this.hero.alterEgo),
      'power': new FormControl(this.hero.power, Validators.required),
      'sidekick': new FormControl(this.hero.sidekick)
    });

  }


  // with form builder
  createForm2() {
    this.heroForm = this.fb.group({
      name: [this.hero.name, [Validators.required, this.noWhitespaceValidator, Validators.minLength(4),
             this.nombreProhibidoValidator(/luka/i)]],
      alterEgo: [this.hero.alterEgo, [Validators.required, this.noWhitespaceValidator,
             this.nombreProhibidoValidator(/luka/i)]],
      power: [this.hero.power, Validators.required],
      sidekick: this.hero.sidekick
    });
  }

  // validators
  nombreProhibidoValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? { 'nombreProhibido': { value: control.value } } : null;
    };
  }

  noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

  // getters
  get name() { return this.heroForm.get('name'); }
  get alterEgo() { return this.heroForm.get('alterEgo'); }
  get power() { return this.heroForm.get('power'); }
  get sidekick() { return this.heroForm.get('sidekick'); }


}
