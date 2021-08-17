import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselOfGamesComponent } from './carousel-of-games.component';

describe('CarouselOfGamesComponent', () => {
  let component: CarouselOfGamesComponent;
  let fixture: ComponentFixture<CarouselOfGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselOfGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselOfGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
