import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Player } from './../../models/player';
import { PlayerService } from './../../services/player.service';
import { RankingComponent } from './ranking.component';

describe('RankingComponent', () => {
  let component: RankingComponent;
  let fixture: ComponentFixture<RankingComponent>;

  beforeEach(() => {
    const playerServiceStub = () => ({
      getAllPlayers: () => ({ sort: () => ({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [RankingComponent],
      providers: [{ provide: PlayerService, useFactory: playerServiceStub }]
    });
    fixture = TestBed.createComponent(RankingComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`wins has default value`, () => {
    expect(component.wins).toEqual(0);
  });

  it(`games has default value`, () => {
    expect(component.games).toEqual(0);
  });

  it(`total has default value`, () => {
    expect(component.total).toEqual(0);
  });

  it(`displayedColumns has default value`, () => {
    expect(component.displayedColumns).toEqual([`name`, `games`, `victory`]);
  });
});
