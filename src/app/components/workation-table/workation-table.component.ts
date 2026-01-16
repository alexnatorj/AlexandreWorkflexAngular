import { Component, OnInit, ViewChild } from '@angular/core';
import { Workation } from '../../model/workation.model';
import { WorkationService } from '../../services/workation.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-workation-table',
  imports: [
    CommonModule,        // ✅ REQUIRED for ngClass, ngIf, ngFor
    MatTableModule,
    MatSortModule,
    MatChipsModule
  ],
  templateUrl: './workation-table.component.html',
  styleUrl: './workation-table.component.scss',
})
export class WorkationTableComponent implements OnInit {

  displayedColumns = [
    'employee',
    'origin',
    'destination',
    'start',
    'end',
    'workingDays',
    'risk'
  ];

  dataSource = new MatTableDataSource<Workation>();

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: WorkationService) {}

  ngOnInit(): void {
    this.service.getWorkations().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.sort = this.sort;
    }, error => {
      console.log(error);
    });
  }

  riskClass(risk: string): string {
    return risk === 'HIGH' ? 'risk-high' : 'risk-low';
  }

  riskLabel(risk: string): string {
    switch(risk) {
      case 'HIGH':
        return 'High risk';
        case 'LOW':
          return 'Low risk';
      case 'NO':
        return 'No risk';
    }
    return '';
  }

  
  riskIcon(risk: string): string {
    switch(risk) {
      case 'HIGH':
        return 'assets/icons/red-risk.svg';
      case 'LOW':
        return 'assets/icons/yellow-risk.svg';
      case 'NO':
        return 'assets/icons/green-risk.svg';
    }
    return '';
  }

}

