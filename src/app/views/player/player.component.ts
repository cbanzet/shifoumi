import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { PlayerService } from '../../services/player.service';
import { Router } from '@angular/router';
import { Player } from './../../models/player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  formPlayer: FormGroup

  constructor(
    private route: Router,
    private formBuilder: FormBuilder,
    private playerService: PlayerService) {
      this.formPlayer = this.formBuilder.group({
        name: ['', Validators.required],
      });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.playerService.createPlayer(this.formPlayer)
    this.route.navigate(['/game'])
  }

}
