import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent  {


  developer: Developer = {
    lastName: '',
    firstName: '',
    age: 30,
    gender: 'MR',
    bio:'dev',
    skills: [{
      name : "angular",
      logo: "",
      site:'www.yahoo.fr'
    },{
      name : "react",
      logo : "",
      site :'www.google.fr'

    }]
  }

  constructor() {
  }

}
