import { TestBed } from '@angular/core/testing';
import { PlayerService } from './player.service';

describe('PlayerService', () => {
  let service: PlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [PlayerService] });
    service = TestBed.inject(PlayerService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
