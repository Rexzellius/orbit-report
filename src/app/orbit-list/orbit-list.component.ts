import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
   selector: 'app-orbit-list',
   templateUrl: './orbit-list.component.html',
   styleUrls: ['./orbit-list.component.css']
})

export class OrbitListComponent implements OnInit {

   highlight: boolean = true

   @Input() satellites: Satellite[];

   constructor() { }

   ngOnInit() {
   }

   sort(column: string): void {
      this.satellites.sort(function (a: Satellite, b: Satellite): number {
         if (a[column] < b[column]) {
            return -1;
         } else if (a[column] > b[column]) {
            return 1;
         }
         return 0;
      });
   }

   alternateHighlight(): boolean {
      this.highlight = !this.highlight;
      return this.highlight;
   }

}