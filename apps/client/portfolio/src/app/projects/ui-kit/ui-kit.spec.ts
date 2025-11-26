import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiKit } from './ui-kit';

describe('UiKit', () => {
  let component: UiKit;
  let fixture: ComponentFixture<UiKit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiKit],
    }).compileComponents();

    fixture = TestBed.createComponent(UiKit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
