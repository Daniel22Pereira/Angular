import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeBookComponent } from './recipe-book.component';

describe('RecipeBookComponent', () => {
  let component: RecipeBookComponent;
  let fixture: ComponentFixture<RecipeBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipeBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
