import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KowledgeComponent } from './kowledge.component';

describe('KowledgeComponent', () => {
  let component: KowledgeComponent;
  let fixture: ComponentFixture<KowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KowledgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
