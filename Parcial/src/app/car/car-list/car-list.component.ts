import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: Array<Car> = [];
  results: Array<number> = [0, 0, 0];
  constructor(private carService:CarService) { }

  getCarsList() {
    this.carService.getCars().subscribe(cars =>{
      this.cars = cars;
    });
  }

  getNumbers(marca: string):number {
    let reps: number = 0;
    this.cars.forEach(element => {
      if (marca === element.marca){
        reps += 1;
      }
    });
    return reps;
  }
  ngOnInit() {
    this.getCarsList();
  }

}
