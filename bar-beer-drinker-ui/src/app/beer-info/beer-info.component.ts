import { Component, OnInit } from '@angular/core';
import { BeerInfoService, TopSellers, BigConsumers, TimeDist} from '../beer-info.service';
import { ActivatedRoute} from '@angular/router';
import { HttpResponse } from '@angular/common/http';

declare const Highcharts: any;


@Component({
  selector: 'app-beer-info',
  templateUrl: './beer-info.component.html',
  styleUrls: ['./beer-info.component.css']
})
export class BeerInfoComponent implements OnInit {

  beerName:string;
  topSellers:TopSellers[];
  bigConsumers: BigConsumers[];
  timeDist: TimeDist[];

  constructor(
    public beerService : BeerInfoService,
    public route: ActivatedRoute
  ) {
    route.paramMap.subscribe((paramMap) => {
      this.beerName = paramMap.get('beer');

      beerService.getTopSellers(this.beerName).subscribe(
        data => {
          this.topSellers = data; 
          
          const bars = [];
          const bills = [];

          data.forEach(bar =>{
          bars.push(bar.bar);
          bills.push(bar.bills);
          });

          this.renderChart(bars,bills);
      }),

      beerService.getBiggestConsumers(this.beerName).subscribe(
        data =>{
          this.bigConsumers = data;
          
        }
      ),

      beerService.getTimeDist(this.beerName).subscribe(
        data =>{
          
          this.timeDist = data;
           
          const hour = [];
          const bills = [];
          console.log(data)
          data.forEach(BeerSoldByHour =>{
          hour.push(BeerSoldByHour.BeerSoldByHour);
          bills.push(BeerSoldByHour.hours);
          });
          this.renderChartTime(bills,hour);
          
      });

    });
   }


   renderChart(bar: string[], bills: number[]){
    Highcharts.chart('bargraph',{
    chart:{
      type: 'column'
    },
    title:{
      text: 'Bars Where This Beer is a Top Seller'
    },
    xAxis: {
      categories: bar,
      title: 'Bar'
    },
    yAxis:  {
      min:0,
      title: {
        text: 'Number of Bills'
      },
      labels: {
        overflow: 'justify'
      },
      plotOptions: {
        dataLabels:{
          enabled: true
        }
      }
    },
    legend :{
      enabled: false
    },
    credits:{
      enabled: false
    },
    series: [{
      data:bills
    }]
    });
  }

  renderChartTime(hours: number[], BeerSoldByHour: number[]){
    console.log(hours)
    console.log(BeerSoldByHour)
 
    Highcharts.chart('bargraph2',{
    chart:{
      type: 'column'
    },
    title:{
      text: 'Time Distribution of Sales'
    },
    xAxis: {
      categories: hours,
      title: {
        text:'24 Hour Time'
      }
    },
    yAxis:  {
      min:0,
      title: {
        text: 'Number of Beers Sold'
      },
      labels: {
        overflow: 'justify'
      },
      plotOptions: {
        dataLabels:{
          enabled: true
        }
      }
    },
    legend :{
      enabled: false
    },
    credits:{
      enabled: false
    },
    plotOptions:{
      colorByPoint: true,
      stacking: 'normal'
    },
    series: [{
      colorByPoint: true,
      data: BeerSoldByHour,
    }]
    
    });
  }


  ngOnInit() {
  }

}
