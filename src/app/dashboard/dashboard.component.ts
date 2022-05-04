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


  data: any = [
    {
        value: "1269709",
        name: "Garth Henry"
    },
    {
        value: "1662841",
        name: "Barry Moss"
    },
    {
        value: "399442",
        name: "Catherine Bishop"
    },
    {
        value: "314212",
        name: "Jarrod Stafford"
    },
    {
        value: "1474549",
        name: "Sierra Tate"
    },
    {
        value: "1465796",
        name: "Tanya Coleman"
    },
    {
        value: "1165195",
        name: "Gregory Harrington"
    },
    {
        value: "280848",
        name: "Pandora Fowler"
    },
    {
        value: "1492819",
        name: "Jenette Golden"
    },
    {
        value: "1087818",
        name: "Uriel Cobb"
    },
    {
        value: "258262",
        name: "Dillon Colon"
    },
    {
        value: "733477",
        name: "Clio Parks"
    },
    {
        value: "926646",
        name: "Gloria Bowen"
    },
    {
        value: "768480",
        name: "Cyrus Bowen"
    },
    {
        value: "1141024",
        name: "Joan Day"
    },
    {
        value: "349212",
        name: "Perry Keller"
    },
    {
        value: "1442241",
        name: "Wing Tyson"
    },
    {
        value: "869539",
        name: "Brian Stanton"
    },
    {
        value: "676031",
        name: "Ella Mccormick"
    },
    {
        value: "1984383",
        name: "Clinton Neal"
    },
    {
        value: "222862",
        name: "Timon Hayes"
    },
    {
        value: "215224",
        name: "Molly Booth"
    },
    {
        value: "1833942",
        name: "Brennan Grant"
    },
    {
        value: "1047717",
        name: "Vance Dixon"
    },
    {
        value: "1066199",
        name: "Russell Madden"
    },
    {
        value: "1365399",
        name: "Lysandra Rogers"
    },
    {
        value: "512437",
        name: "Seth Daugherty"
    },
];
  category: any = [
    "Garth Henry",
    "Barry Moss",
    "Catherine Bishop",
    "Jarrod Stafford",
    "Sierra Tate",
    "Tanya Coleman",
    "Gregory Harrington",
    "Pandora Fowler", 
    "Jenette Golden",
    "Uriel Cobb",
    "Dillon Colon",
    "Clio Parks",  
    "Gloria Bowen",
    "Cyrus Bowen",
    "Joan Day",  
    "Perry Keller",
    "Wing Tyson",
    "Brian Stanton",
    "Ella Mccormick", 
    "Clinton Neal",
    "Timon Hayes",
    "Molly Booth",
    "Brennan Grant",
    "Vance Dixon",
    "Russell Madden",
    "Lysandra Rogers",
    "Seth Daugherty"
]

  chartLineOption: EChartsOption = {
    title: {
      text: 'Linien Diagramm'
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      name: "Woche",
      type: 'category',
      //data: this.data.name
    },
    yAxis: {
      name: "Einnahmen",
      type: 'value',
    },
    series: [
      {
        data: this.data,
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
      name: "Mitarbeiter",
      type: 'category',
      data: this.category,
      axisLabel: {
        rotate: 30
      },
    },
    yAxis: {
      name: "Umsatz",
      type: 'value',
    },
    series: [
      {
        data: this.data,
        type: 'bar',
      },
    ],};

    chartPieOption: EChartsOption = {
      title: {
        text: 'Kuchen Diagramm'
      },
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          data: this.data,
          type: 'pie',
        },
      ],};
  
  constructor(
    private _myData: DataService
  ) { 

  }

  ngOnInit(): void {

  }






}
