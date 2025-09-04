import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorModal } from './editor-modal';

describe('EditorModal', () => {
  let component: EditorModal;
  let fixture: ComponentFixture<EditorModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
