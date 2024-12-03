import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchDirectionComponent } from './research-direction.component';

describe('ResearchDirectionComponent', () => {
  let component: ResearchDirectionComponent;
  let fixture: ComponentFixture<ResearchDirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResearchDirectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
