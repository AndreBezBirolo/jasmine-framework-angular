import { LikeWidgetComponent } from './like-widget.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidgetModule } from './like-widget.module';

describe('LikeWidgetComponent', () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LikeWidgetModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should auto generate ID during ngOnInit when (@Input id) is not assigned', () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('Shouldnt auto-generate ID during ngOnInit when (@Input id) is assigned', () => {
    const ID = 'someID';
    component.id = ID;
    fixture.detectChanges();
    expect(component.id).toBe(ID);
  });

  it(`#${LikeWidgetComponent.prototype.like.name}
  should trigger (@Output liked) when called`, () => {
    spyOn(component.liked, 'emit');
    fixture.detectChanges();
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  });

});
