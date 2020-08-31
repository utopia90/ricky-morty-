import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterssimplepageComponent } from './characterssimplepage.component';

describe('CharacterssimplepageComponent', () => {
  let component: CharacterssimplepageComponent;
  let fixture: ComponentFixture<CharacterssimplepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterssimplepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterssimplepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
