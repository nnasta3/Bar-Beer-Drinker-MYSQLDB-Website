import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { BarsService,Top3Beers,BigSpenders, TopManf, BarMenu} from '../bars.service';
import { HttpResponse } from '@angular/common/http';

declare const Highcharts: any;


@Component({
  selector: 'app-bar-details',
  templateUrl: './bar-details.component.html',
  styleUrls: ['./bar-details.component.css']
})
export class BarDetailsComponent implements OnInit {

  barName: string;
  barDetails: BarMenu[];
  top3: Top3Beers[];
  bigSpenders: BigSpenders[];
  topManf: TopManf[];

  constructor(
    public barService : BarsService,
    public route: ActivatedRoute
  ) {
    route.paramMap.subscribe((paramMap) => {
      this.barName = paramMap.get('bar');

      barService.getBar(this.barName).subscribe(
        data => {
          this.barDetails = data;
        },
        (error: HttpResponse<any>) =>{
          if(error.status === 404) {
            alert('Bar not found');
          }
          else{
            console.error(error.status + ' - '+ error.body);
            alert('An error occurred on the server. Please check the browser console.')
          }
        }
        );

        barService.getTop3Beers(this.barName).subscribe(
          data =>{
            this.top3 = data;

            const beer = [];
            const numSold = [];

          data.forEach( top3 =>{
            beer.push(top3.beer);
            numSold.push(top3.total);
          });

          this.renderChartPopular(beer,numSold);
          }
        );

        barService.getLargestSpenders(this.barName).subscribe(
          data =>{
            this.bigSpenders = data;
          const drinkers = [];
          const total = [];

          data.forEach( drinker =>{
            drinkers.push(drinker.drinker);
            total.push(drinker.total);
          });

          this.renderChartSpender(drinkers,total);
          }
          
        );

        barService.getMostSoldManf(this.barName).subscribe(
          data=>{
            this.topManf = data;
            const manf = [];
            const numBots = [];

          data.forEach( topManf =>{
            manf.push(topManf.manf);
            numBots.push(topManf.total);
          });

          this.renderChartTopManf(manf,numBots);
          }
          
        );
    });
   
  }

   renderChartSpender(drinker: string[], total: number[]){
    Highcharts.chart('bargraph',{
    chart:{
      type: 'column'
    },
    title:{
      text: 'Biggest Spenders'
    },
    xAxis: {
      categories: drinker,
      title: 'Drinker Name'
    },
    yAxis:  {
      min:0,
      title: {
        text: 'Total (In USD)'
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
      data:total
    }]
    });
  }
    renderChartTopManf(manf: string[], numBots: number[]){
      Highcharts.chart('bargraph2',{
      chart:{
        type: 'column'
      },
      title:{
        text: 'Top Manufacturers'
      },
      xAxis: {
        categories: manf,
        title: 'Manufacturer'
      },
      yAxis:  {
        min:0,
        title: {
          text: 'Number of Bottles Sold'
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
        data:numBots
      }]
      });
    }
  
    renderChartPopular(beer: string[], total: number[]){
      Highcharts.chart('bargraph3',{
      chart:{
        type: 'column'
      },
      title:{
        text: 'Top Beers'
      },
      xAxis: {
        categories: beer,
        title: 'Beer'
      },
      yAxis:  {
        min:0,
        title: {
          text: 'Number of Beer Sold'
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
        data:total
      }]
      });
    }


  ngOnInit() {
  }

}
