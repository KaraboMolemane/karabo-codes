import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeQuality } from './code-quality';

describe('CodeQuality', () => {
  let component: CodeQuality;
  let fixture: ComponentFixture<CodeQuality>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeQuality],
    }).compileComponents();

    fixture = TestBed.createComponent(CodeQuality);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
