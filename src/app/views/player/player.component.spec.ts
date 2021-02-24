import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PlayerService } from '../../services/player.service';
import { Router } from '@angular/router';
import { PlayerComponent } from './player.component';

describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;

  beforeEach(() => {
    const formBuilderStub = () => ({ group: (object:any) => ({}) });
    const playerServiceStub = () => ({ createPlayer: (formPlayer:any) => ({}) });
    const routerStub = () => ({ navigate: (array:any) => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [PlayerComponent],
      providers: [
        { provide: FormBuilder, useFactory: formBuilderStub },
        { provide: PlayerService, useFactory: playerServiceStub },
        { provide: Router, useFactory: routerStub }
      ]
    });
    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('onSubmit', () => {
    it('makes expected calls', () => {
      const playerServiceStub: PlayerService = fixture.debugElement.injector.get(
        PlayerService
      );
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(playerServiceStub, 'createPlayer').and.callThrough();
      spyOn(routerStub, 'navigate').and.callThrough();
      component.onSubmit();
      expect(playerServiceStub.createPlayer).toHaveBeenCalled();
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });
});
