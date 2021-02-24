import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHandPaper, faHandRock, faHandScissors, faUser } from '@fortawesome/free-solid-svg-icons';
import { PlayerService } from './../../services/player.service';

interface Choice {
  id: number
  name: string
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  paper = faHandPaper
  scissors = faHandScissors
  rock = faHandRock
  user = faUser

  result = false
  playerChoice: any
  computerChoice: any
  winner = ''
  sentence = 'Are you ready'
  inFewWords = ''

  computerscore=0
  currentuserscore=0  

  player: any
  answers: Choice[]

  constructor(private playerService : PlayerService, private route: Router) {
    this.player = this.playerService.getPlayer(localStorage.name)
    this.playerChoice = {id: 1, name: 'rock', icon: 'faHandRock'}
    this.answers = [
      {id: 0, name: 'rock' },
      {id: 1, name: 'paper' },
      {id: 2, name: 'scissors' }
    ]
  }

  ngOnInit(): void {
  }

  launchGame(choice : string) {
    // Get User Answer
    this.playerChoice = this.answers.find(el => el.name === choice)
    // Get Computer Answer
    const i = Math.floor(Math.random() * Math.floor(this.answers.length))
    this.computerChoice =  this.answers[i]
    // Get the winner
    this.winner = this.getResult(this.playerChoice.id, this.computerChoice.id)
    this.sentence = this.winner==='computer' || this.winner==='equality' ? 'You should try again' : 'Congrats'
    this.inFewWords = this.winner==='user' ? 'YOU WIN' : this.winner==='equality' ? 'NO WINNER' : 'YOU LOOSE'
    let win = this.winner==='user' ? true : false
    // Save Winner and Games Count in local storage
    this.computerscore = this.winner==='computer' ? this.computerscore+1 : this.computerscore
    this.currentuserscore = this.winner==='user' ? this.currentuserscore+1 : this.currentuserscore
    // Save Result in local storage
    this.saveResult(this.player.name, win)
    // Show Result in template
    this.result = true
  }

  getIcon(id: number) {
    const icon =  (id===0) ? faHandRock :
                  (id===1) ? faHandPaper : faHandScissors
    return icon
  }


  getResult(A: number, B: number) {
    if(A === B) return 'equality'
    else if ((A>B && B+1==A) || (A<B && A+B==2)) return 'user'
    else return 'computer'
  }

  saveResult(name: string, result: boolean) {
    this.playerService.saveResult(name, result)
  }

  playAgain() {
    this.result=false;
    this.sentence = 'Are you ready';   
  }

  changePlayer() {
    this.currentuserscore = 0
    this.computerscore = 0
    this.route.navigate(['/player'])
  }

}
