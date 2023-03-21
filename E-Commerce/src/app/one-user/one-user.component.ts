import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Parcel } from '../customer-service.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-one-user',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './one-user.component.html',
  styleUrls: ['./one-user.component.css']
})
export class OneUSerComponent implements OnInit{
  @Input() parcel!: Parcel
  @Input() index!:Number

  ngOnInit():void{

  }

}
