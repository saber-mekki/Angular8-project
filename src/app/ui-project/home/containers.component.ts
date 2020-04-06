import { Component, OnInit, } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

import * as CanvasJS from '../../../assets/canvasjs.min';
/* export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  mort:string;
  crit:string;
  
} */
/* 
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Tunis',position:1 , weight: 1.0079, symbol: 'H',mort:'10',crit:'50'},
  { name: 'Ben arous',position: 2, weight: 4.0026, symbol: 'He',mort:'10',crit:'50'},
  { name: 'Ariana', position: 3,weight: 6.941, symbol: 'Li',mort:'10',crit:'50'},
  {name: 'Manouba', position: 4, weight: 9.0122, symbol: 'Be',mort:'10',crit:'50'},
  { name: 'Nabeul',position: 5, weight: 10.811, symbol: 'B',mort:'10',crit:'50'},
  { name: 'Sousse',position: 6, weight: 12.0107, symbol: 'C',mort:'10',crit:'50'},
  {name: 'Monastir', position: 7, weight: 14.0067, symbol: 'N',mort:'10',crit:'50'},
  {name: 'Beja',position: 8,  weight: 15.9994, symbol: 'O',mort:'10',crit:'50'},
  { name: 'Gafsa', position: 9,weight: 18.9984, symbol: 'F',mort:'10',crit:'50'},
  { name: 'Kbili',position: 8, weight: 20.1797, symbol: 'Ne',mort:'10',crit:'50'},
  { name: 'Tozeur',position: 8, weight: 20.1797, symbol: 'Ne',mort:'10',crit:'50'},
  {name: 'Gabes',  position: 8,weight: 20.1797, symbol: 'Ne',mort:'10',crit:'50'},
  { name: 'Mednine', position: 8,weight: 20.1797, symbol: 'Ne',mort:'10',crit:'50'},
  { name: 'Tatawine',position: 8, weight: 20.1797, symbol: 'Ne',mort:'10',crit:'50'},
  { name: 'Selyana', position: 8,weight: 20.1797, symbol: 'Ne',mort:'10',crit:'50'},
  { name: 'SidiBouzid',position: 8, weight: 20.1797, symbol: 'Ne',mort:'10',crit:'50'},
  { name: 'Sfax',position: 8, weight: 20.1797, symbol: 'Ne',mort:'10',crit:'50'},
  { name: 'Benzart',position: 8, weight: 20.1797, symbol: 'Ne',mort:'10',crit:'50'},
  { name: 'Kasrine', position: 8,weight: 20.1797, symbol: 'Ne',mort:'10',crit:'50'},
  { name: 'Kef', position: 8,weight: 20.1797, symbol: 'Ne',mort:'10',crit:'50'},
  { name: 'Jandouba',position: 8, weight: 20.1797, symbol: 'Ne',mort:'10',crit:'50'},
  { name: 'Kairouan',position: 8, weight: 20.1797, symbol: 'Ne',mort:'10',crit:'50'},
  { name: 'Beja',position: 8, weight: 20.1797, symbol: 'Ne',mort:'10',crit:'50'},
  { name: 'Zagouan',position: 8, weight: 20.1797, symbol: 'Ne',mort:'10',crit:'50'},

];

 */
@Component({
  selector: 'app-containers',
 templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.scss']
})
export class ContainersComponent implements OnInit {
 /*  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','mort','crit'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
 */
 /*  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } */

  constructor() { }
  
  ngOnInit() {	
    
     let chart = new CanvasJS.Chart("chartContainer", {
        theme: "light2",
        animationEnabled: true,
        exportEnabled: true,
        title:{
          text: "الحالة الوبائية لفيروس كورونا بتونس"
        },
        data: [{
          type: "pie",
          showInLegend: true,
          toolTipContent: "<b>{name}</b>: {y} ",
          indexLabel: "{name} - {y}",
          dataPoints: [
            { y: 30, name: "اصابة" },
            { y: 15, name: "شفاء" },
            { y: 100, name: "وفايات" },
            { y:1, name: " تحليل" },
   
          ]
        }]
      });
        
      chart.render();
        
    
   

    
  }}


