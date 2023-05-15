import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  ngOnInit(): void { }
  @Input() skill: Skill = {
    name:'',
    logo:'',
    site:'',
  }
}
