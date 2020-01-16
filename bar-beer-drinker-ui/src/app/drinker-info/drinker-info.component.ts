import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { DrinkerInfoService, Bills, TopBeersOrd, SumPrice, TimeSpending, TimeSpendingYear } from '../drinker-info.service';


declare const Highcharts: any;

@Component({
  selector: 'app-drinker-info',
  templateUrl: './drinker-info.component.html',
  styleUrls: ['./drinker-info.component.css']
})
export class DrinkerInfoComponent implements OnInit {

  drinkerName: string;
  bills:Bills[];
  cols:any[];
  topBeersOrd: TopBeersOrd[];
  sumPrice: SumPrice[];
  timSpending: TimeSpending[];
  timeSpendingYr: TimeSpendingYear[];

  constructor(
    public drinkerService : DrinkerInfoService,
    public route: ActivatedRoute
  ) {
    route.paramMap.subscribe((paramMap) => {
      this.drinkerName = paramMap.get('drinker');

      drinkerService.getBills(this.drinkerName).subscribe(
        data =>{
          this.bills=data;
        });
        drinkerService.getTopBeersOrd(this.drinkerName).subscribe(
          data =>{
          this.topBeersOrd = data;

          const beer = [];
          const numBeer = [];

          data.forEach(topBeersOrd =>{
          beer.push(topBeersOrd.beer);
          numBeer.push(topBeersOrd.numBeers);
          });

          this.renderChart(beer,numBeer);
          });

        drinkerService.getSumPrice(this.drinkerName).subscribe(
          data =>{
            this.sumPrice = data;
            const bar = [];
            const sum = [];
          data.forEach(sumPrice =>{
          bar.push(sumPrice.bar);
          sum.push(sumPrice.total);
          });

          this.renderChartSum(bar,sum);
          });
          drinkerService.getTimeSpending(this.drinkerName).subscribe(
            data =>{
              this.timSpending = data;
            const mon = [];
            const sum = [];
          data.forEach(timSpending =>{
            mon.push(timSpending.mon);
          sum.push(timSpending.total);
          });

          this.renderChartTime(mon,sum);
            });

            drinkerService.getTimeSpendingYear(this.drinkerName).subscribe(
              data =>{
                this.timeSpendingYr = data;
              const year = [];
              const sum = [];
            data.forEach(timeSpendingYr =>{
              year.push(timeSpendingYr.yr);
            sum.push(timeSpendingYr.total);
            });
  
            this.renderChartTimeYr(year,sum);
              });
    });
   }

  ngOnInit() {
    this.drinkerService.getBills(this.drinkerName).subscribe(bills => this.bills = bills);

        this.cols = [
            { field: 'id', header: 'Id' },
            { field: 'items', header: 'Items' },
            { field: 'price', header: 'Price (USD)' },
            { field: 'tip', header: 'Tip (USD)' },
            { field: 'bar', header: 'Bar' },
            { field: 'time', header: 'Time' },
            { field: 'date', header: 'Date' },
            

        ];
  }

  renderChart(bar: string[], numBeer: number[]){
    Highcharts.chart('bargraph',{
    chart:{
      type: 'column'
    },
    title:{
      text: 'Most Purchased Beers'
    },
    xAxis: {
      categories: bar,
      title: 'Beer'
    },
    yAxis:  {
      min:0,
      title: {
        text: 'Number of Beers Bought'
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
      data:numBeer
    }]
    });
  }

  renderChartSum(bar: string[], price: number[]){
    Highcharts.chart('bargraph2',{
    chart:{
      type: 'column'
    },
    title:{
      text: 'Total Spending By Bar'
    },
    xAxis: {
      categories: bar,
      title: 'Bar'
    },
    yAxis:  {
      min:0,
      title: {
        text: 'Total (USD)'
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
      data:price
    }]
    });
  }



  renderChartTime(bar: string[], price: number[]){
    Highcharts.chart('bargraph3',{
    chart:{
      type: 'column'
    },
    title:{
      text: 'Total Spending By Month'
    },
    xAxis: {
      categories: bar,
      title: 'Month'
    },
    yAxis:  {
      min:0,
      title: {
        text: 'Total (USD)'
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
      data:price
    }]
    });
  }


  renderChartTimeYr(bar: string[], price: number[]){
    Highcharts.chart('bargraph4',{
    chart:{
      type: 'column'
    },
    title:{
      text: 'Total Spending By Year'
    },
    xAxis: {
      categories: bar,
      title: 'Year'
    },
    yAxis:  {
      min:0,
      title: {
        text: 'Total (USD)'
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
      data:price
    }]
    });
  }
}

