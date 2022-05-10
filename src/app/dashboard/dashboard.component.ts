import { Component, OnInit } from '@angular/core';
import { faTShirt } from '@fortawesome/free-solid-svg-icons';
import { EChartsOption } from 'echarts';
import { DataService } from '../data.service';
import { IData } from '../dataInterface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {



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
        },
      ],};
  
  mergeLineOptions: EChartsOption = {};
  mergeBarOptions: EChartsOption = {};
  mergePieOptions: EChartsOption = {};

  constructor(
    private _myData: DataService
  ) { 

  }

  ngOnInit(): void {
    this.createLineChartOptions();
    this.createBarChartOptions();
    this.createPieChartOptions();
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

}
