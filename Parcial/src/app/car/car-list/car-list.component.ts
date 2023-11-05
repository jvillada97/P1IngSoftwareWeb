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
  results: Array<Number> = [];
  constructor(private carService:CarService) { }

  getCarsList() {
    this.carService.getCars().subscribe(cars =>{
      this.cars = cars;
    });
  }

  getNumbers(cars: Array<Car>):void {

    this.results = [1,2,3];
  }
  ngOnInit() {
    this.getCarsList();
    this.getNumbers(this.cars);
  }

}
