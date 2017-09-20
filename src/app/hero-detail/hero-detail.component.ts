import { HeroService } from '../hero.service';
import { Component, Input, OnChanges } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Address, Hero, states } from '../models/data-model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnChanges {
  @Input() hero: Hero;
  heroForm: FormGroup; // <--- heroForm is of type FormGroup
  states = states;
  nameChangeLog: string[] = [];

  constructor(private fb: FormBuilder, private heroService: HeroService) { // <--- inject FormBuilder
    this.createForm();
    this.logNameChange();
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]], // <--- the FormControl called "name"
      secretLairs: this.fb.array([]), // <-- secretLairs as an empty FormArray
      power: '',
      sidekick: ''
    });
  }

  ngOnChanges() {
    this.heroForm.reset({
      name: this.hero.name,
      power: this.hero.power,
      sidekick: this.hero.sidekick
    });
    this.setAddresses(this.hero.addresses);
  }

  get secretLairs(): FormArray {
    return this.heroForm.get('secretLairs') as FormArray;
  }

  setAddresses(addresses: Address[]) {
    const addressFGs = addresses.map(address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressFGs);
    this.heroForm.setControl('secretLairs', addressFormArray);
  }

  addLair() {
    this.secretLairs.push(this.fb.group(new Address()));
  }

  removeLair() {
    this.secretLairs.removeAt(this.secretLairs.length - 1);
  }


  logNameChange() {
    const nameControl = this.heroForm.get('name');
    nameControl.valueChanges.forEach(
      (value: string) => this.nameChangeLog.push(value)
    );
  }

  onSubmit() {
    this.hero = this.prepareSaveHero();
    this.heroService.updateHero(this.hero).subscribe(/* error handling */);
    this.ngOnChanges();
  }

  prepareSaveHero(): Hero {
    const formModel = this.heroForm.value;

    // deep copy of form model lairs
    const secretLairsDeepCopy: Address[] = formModel.secretLairs.map(
      (address: Address) => Object.assign({}, address)
    );

    // return new `Hero` object containing a combination of original hero value(s)
    // and deep copies of changed form model values
    const saveHero: Hero = {
      id: this.hero.id,
      name: formModel.name as string,
      // addresses: formModel.secretLairs // <-- bad!
      addresses: secretLairsDeepCopy,
      power: formModel.power as string,
      sidekick: formModel.sidekick as boolean
    };
    return saveHero;
  }

  revert() {
    this.ngOnChanges();
  }

}
