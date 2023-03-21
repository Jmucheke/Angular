import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { Parcel, CustomerServiceService } from '../customer-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './one-view.component.html',
  styleUrls: ['./one-view.component.css']
})
export class OneViewComponent implements OnInit{

  parcel$!: Observable<Parcel | undefined>;

  constructor(private customerServiceService: CustomerServiceService, private route:ActivatedRoute){

  }

  ngOnInit():void{
    this.parcel$ = this.route.paramMap.pipe(map(params =>{
      return this.customerServiceService.parcels[Number(params.get('index'))]
    }))

  }

}
