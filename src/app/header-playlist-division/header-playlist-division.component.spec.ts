import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPlaylistDivisionComponent } from './header-playlist-division.component';

describe('HeaderPlaylistDivisionComponent', () => {
  let component: HeaderPlaylistDivisionComponent;
  let fixture: ComponentFixture<HeaderPlaylistDivisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderPlaylistDivisionComponent]
    });
    fixture = TestBed.createComponent(HeaderPlaylistDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
