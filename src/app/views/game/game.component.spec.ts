import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { faHandPaper } from '@fortawesome/free-solid-svg-icons';
import { faHandScissors } from '@fortawesome/free-solid-svg-icons';
import { faHandRock } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { RouterTestingModule } from '@angular/router/testing';
import { GameComponent } from './game.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(() => {
    const playerServiceStub = () => ({
      getPlayer: (name:any) => ({}),
      saveResult: (name:any, result:any) => ({})
    });
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [GameComponent],
      providers: [{ provide: PlayerService, useFactory: playerServiceStub }]
    });
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`paper has default value`, () => {
    expect(component.paper).toEqual(faHandPaper);
  });

  it(`scissors has default value`, () => {
    expect(component.scissors).toEqual(faHandScissors);
  });

  it(`rock has default value`, () => {
    expect(component.rock).toEqual(faHandRock);
  });

  it(`user has default value`, () => {
    expect(component.user).toEqual(faUser);
  });

  it(`result has default value`, () => {
    expect(component.result).toEqual(false);
  });

  it(`sentence has default value`, () => {
    expect(component.sentence).toEqual(`Are you ready`);
  });
});
