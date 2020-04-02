import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiTokensComponent } from './api-tokens.component';

describe('ApiTokensComponent', () => {
  let component: ApiTokensComponent;
  let fixture: ComponentFixture<ApiTokensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiTokensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiTokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
