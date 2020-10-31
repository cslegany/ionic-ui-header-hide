import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FadeHeaderPage } from './fade-header.page';

describe('FadeHeaderPage', () => {
  let component: FadeHeaderPage;
  let fixture: ComponentFixture<FadeHeaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FadeHeaderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FadeHeaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
