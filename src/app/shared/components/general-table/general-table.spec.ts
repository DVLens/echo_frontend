import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralTable } from './general-table';

describe('GeneralTable', () => {
  let component: GeneralTable;
  let fixture: ComponentFixture<GeneralTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
