import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Practica';
  LineChart=[];
  API : string = "https://api.covid19api.com/summary";
  chart;
  options;
  country;
  constructor(private http : HttpClient){}
   ngAfterViewInit() 
  {
  }

  ngOnInit()
  {
    //Line Chart:
    

    this.GetInfoCoronavirus().subscribe(data => {
        let res : any = data;
        this.options = res.Countries;
        console.log(this.options);
    })
    
  }

  PaisObtenido()
  {
      console.log(this.country);
  }
  GetInfoCoronavirus()
  {
    return this.http.get(this.API);
  }

}