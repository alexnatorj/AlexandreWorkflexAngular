import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkationTable } from './workation-table';

describe('WorkationTable', () => {
  let component: WorkationTable;
  let fixture: ComponentFixture<WorkationTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkationTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkationTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
