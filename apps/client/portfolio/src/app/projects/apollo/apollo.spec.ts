import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Apollo } from './apollo';

describe('Apollo', () => {
  let component: Apollo;
  let fixture: ComponentFixture<Apollo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Apollo],
    }).compileComponents();

    fixture = TestBed.createComponent(Apollo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
