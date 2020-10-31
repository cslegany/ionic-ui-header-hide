import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HideHeaderPage } from './hide-header.page';

describe('HideHeaderPage', () => {
  let component: HideHeaderPage;
  let fixture: ComponentFixture<HideHeaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HideHeaderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HideHeaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
