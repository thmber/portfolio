import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickerButtonComponent } from './sticker-button.component';

describe('StickerButtonComponent', () => {
  let component: StickerButtonComponent;
  let fixture: ComponentFixture<StickerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StickerButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StickerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
