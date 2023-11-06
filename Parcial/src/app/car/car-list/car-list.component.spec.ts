/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { CarListComponent } from './car-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Car } from '../car';

describe('CarListComponent', () => {
  let component: CarListComponent;
  let fixture: ComponentFixture<CarListComponent>;
  let debug: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarListComponent);
    component = fixture.componentInstance;
    for (let index = 0; index < 3; index++) {
      const car = new Car(
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.number.int(),
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ) ;
      component.cars.push(car);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 4 <tr> elements', () => {
    expect(debug.queryAll(By.css('tr'))).toHaveSize(4)
  });

  it('should have 12 <td> elements', () => {
    expect(debug.queryAll(By.css('td'))).toHaveSize(12)
  });

  it('should have 4 <p> elements', () => {
    expect(debug.queryAll(By.css('p'))).toHaveSize(4)
  });

it('should have 3 <tr> elements and the deleted book should not exist', () => {
  const car = component.cars.pop()!;
  fixture.detectChanges();
  expect(debug.queryAll(By.css('tr'))).toHaveSize(3)

  debug.queryAll(By.css('tr')).forEach((selector, i)=>{
    expect(selector.nativeElement.textContent).not.toContain(car.marca);
  });
});

});
