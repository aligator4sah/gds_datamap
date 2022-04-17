import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataToolPlatformComponent } from './data-tool-platform.component';

describe('DataToolPlatformComponent', () => {
  let component: DataToolPlatformComponent;
  let fixture: ComponentFixture<DataToolPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataToolPlatformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataToolPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
