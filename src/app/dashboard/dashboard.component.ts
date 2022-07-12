import { Component, OnInit } from '@angular/core';
import { faTShirt } from '@fortawesome/free-solid-svg-icons';
import { EChartsOption, registerMap } from 'echarts';
import { DataService } from '../data.service';
import { IData } from '../dataInterface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

//Wolrd MAP
//https://datamatic-public.github.io/echarts-2.1.10/doc/example/map13.html


  chartLineOption: EChartsOption = {
    title: {
      text: 'Linien Diagramm'
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      name: "Monat",
      type: 'category',
      data: []
    },
    yAxis: {
      name: "Einnahmen",
      type: 'value',
    },
    series: [
      {
        data: [],
        type: 'line',
        encode: {
          x: 'value',
          y: 'groupId',
          itemName: 'value',
          tooltip: ['Einnahmen']
        }
      },
    ],};


  chartBarOption: EChartsOption = {
    title: {
      text: 'Balken Diagramm'
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      name: "Länder",
      type: 'category',
      max: 10,
      data: [],
      axisLabel: {
        rotate: 50
      },
    },
    yAxis: {
      name: "Unternehmen",
      type: 'value',
    },
    series: [
      {
        data: [],
        type: 'bar',
      },
    ],
    grid:{
      containLabel: true,
    }
  };

    chartPieOption: EChartsOption = {
      legend: {
        orient: 'vertical',
        left: 'right',
      },
      title: {
        text: 'Marktanteil der Unternehmen'
      },
      tooltip: {
        trigger: 'item',
        valueFormatter: (value) => value + ' %'
      },
      series: [
        {
          data: [],
          type: 'pie',
          label: {
            show: true,
            formatter: (value) => value.name + '\n'+ value.value + ' %'
          },
        },
      ],};
  
      worldOption: EChartsOption = {
        title : {
            text : 'Worldmap',
            subtext: 'by 江江的喵',
            link: 'Quelle: https://datamatic-public.github.io/echarts-2.1.10/doc/example/map13.html#infographic',
        },
        tooltip : {
            trigger: 'item',
            formatter: function (params: any){
                var value = "Einwohner: " + params.value;
                return params.name + ' <br /> ' + value;
            }
        },
        toolbox: {
            show : true,
            orient : 'vertical',
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        series : [
            {
                name: 'Worldmap',
                type: 'map',
                map: 'Worldmap',
                roam: true,
                label: {
                  show: true
                },
                data:[
                    {name: 'asia', value: 8967.69},
                    {name: 'australia', value: 592.09},
                    {name: 'europe', value: 183.62},
                    {name: 'north_america', value: 41.63},
                    {name: 'south_america', value: 10.41},
                    {name: 'africa', value: 22.5837}
                ]
            }
        ]
    };


  mergeLineOptions: EChartsOption = {};
  mergeBarOptions: EChartsOption = {};
  mergePieOptions: EChartsOption = {};
  mergeWorldOptions: EChartsOption = {};

  constructor(
    private _myData: DataService
  ) { 
    
  }

  ngOnInit(): void {


    registerMap('Worldmap', this._myData.dataWorld);


    this.createLineChartOptions();
    this.createBarChartOptions();
    this.createPieChartOptions();
    this.createWorldChartOption();

  }

  ngAfterInitView(): void {

  }


  createLineChartOptions(){
    let data: any[] = [];
    let xAxis: any[] = [];

    this._myData.dataCompanies.forEach(company =>{
      data.push(company.balance);
      xAxis.push(company.month);
    });

    this.mergeLineOptions = {
      xAxis:{ data: xAxis },
      series: [{ data: data }],
    }
  }

  createBarChartOptions(){
    let data: any[] = [];
    let xAxis: any[] = [];

    this._myData.dataCountries.forEach(country =>{
      data.push(country.companies);
      xAxis.push(country.country);
    });

    this.mergeBarOptions = {
      xAxis:{ data: xAxis },
      series: [{ data: data }],
    }
  }

  createPieChartOptions(){
    let data: any[] = [];
    let xAxis: any[] = [];
    let allSales = 0.0;

    this._myData.dataCompanies.forEach(company =>{
      allSales += company.balance;
    });

    this._myData.dataCompanies.forEach(company =>{
      let percent = (company.balance / allSales * 100);
      let round = Math.round(percent * 100) / 100;
      data.push({name: company.company, value: round});
    });

    this.mergePieOptions = {
      series: [{ data: data }],
    }
  }

  createWorldChartOption(){
    let data: any[] = [{name: 'asia', value: 0},
    {name: 'australia', value: 0},
    {name: 'europe', value: 0},
    {name: 'north_america', value: 0},
    {name: 'south_america', value: 0},
    {name: 'africa', value: 0}];

    let feature: any = {type: "", properties: {name: ""}, geometry: {type: "", coordinates: [[[0,1],[0,1],[0,1]],[[0,1],[0,1]],[[0,1]],[[0,1]]]}}

    this._myData.dataCountries.forEach(country =>{
        data.forEach(continent =>{
            if(continent.name === country.continent){
              continent.value = continent.value + country.resident;
            }
        });
    });
    this.mergeWorldOptions = {
      series: [{ data: data }],
    }
  }
  
}
