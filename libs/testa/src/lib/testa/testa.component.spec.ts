import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { TestaComponent } from './testa.component';

describe('TestaComponent', () => {
  let component: TestaComponent;
  let fixture: ComponentFixture<TestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestaComponent, NoopAnimationsModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
