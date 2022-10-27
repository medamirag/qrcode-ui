import { ComponentFixture, TestBed } from '@angular/core/testing';

import { URLComponent } from './url.component';

describe('URLComponent', () => {
  let component: URLComponent;
  let fixture: ComponentFixture<URLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ URLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(URLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
