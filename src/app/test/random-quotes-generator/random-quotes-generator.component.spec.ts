import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomQuotesGeneratorComponent } from './random-quotes-generator.component';

describe('RandomQuotesGeneratorComponent', () => {
  let component: RandomQuotesGeneratorComponent;
  let fixture: ComponentFixture<RandomQuotesGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomQuotesGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomQuotesGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
