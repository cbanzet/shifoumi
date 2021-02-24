import { Component, Input, OnInit } from '@angular/core';
import { Player } from './../../models/player';
import { PlayerService } from './../../services/player.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  player: any
  players: any
  name = ''
  wins = 0
  games = 0
  total = 0

  displayedColumns: string[] = ['name', 'games', 'victory'];
  dataSource: MatTableDataSource<Player>;

  constructor(private playerService : PlayerService) {
    const data = this.playerService.getAllPlayers().sort(this.compare)    
    this.dataSource = new MatTableDataSource<Player>(data);
  }

  ngOnInit(): void {
  }

  // order players by ranking
  compare( a: Player, b: Player ) {
    if ( a.total > b.total ){
      return -1;
    }
    if ( a.total < b.total ){
      return 1;
    }
    return 0;
  }  


}
