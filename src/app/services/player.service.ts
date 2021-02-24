import { Injectable } from '@angular/core';
import { Player } from './../models/player'

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  players: any
  player: Player = new Player;

  constructor() {
    this.players = localStorage.getItem('players') ? localStorage.getItem('players') : null
    this.players = this.players ? JSON.parse(this.players) : []
  }

  createPlayer(data: any){
    // Add player to local storage
    localStorage['name'] = data.value.name;

    return new Promise<Player>((resolve, reject) => {
      const position = this.players.findIndex((p:any) => p.name === data.value.name)
      // Player already exists
      if(position>=0) {
        const player = this.players[position]
        resolve(player)
      }
      // New player
      else {
        let nbofplayers = localStorage.players ? localStorage.players.length : 1
        let newplayer = {id: nbofplayers+1, name: data.value.name, games: 0, wins: 0, total: 0}
        this.players.push(newplayer)
        resolve(newplayer)
      }
    })
  }

  getAllPlayers() {
    return this.players
  }

  getPlayer(name: string) {
    return this.players.find((el:any) => el.name === name)
  }

  saveResult(name: string, result: boolean) {
    // get player with his name
    let player = this.getPlayer(name)

    // update player
    if (player) {
      player.games += 1
      player.wins = result ? player.wins+1 : player.wins
      const total = Math.round(player.wins*100/player.games)
      player.total = total
    }

    // save players to local storage
    localStorage.setItem('players', JSON.stringify(this.players))
  }





}
