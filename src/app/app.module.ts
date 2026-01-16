import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { WorkationTableComponent } from './components/workation-table/workation-table.component';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,        // ✅ REQUIRED for ngClass, ngIf, ngFor
    MatTableModule,
    MatSortModule,
    MatChipsModule,
    MatIconModule
  ],
  bootstrap: [AppComponent, WorkationTableComponent]
})
export class AppModule {}
