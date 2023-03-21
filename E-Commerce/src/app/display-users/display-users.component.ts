import { CustomerServiceService } from './../customer-service.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneUSerComponent } from '../one-user/one-user.component';

@Component({
  selector: 'app-display-users',
  standalone: true,
  imports: [CommonModule, OneUSerComponent],
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit{
  constructor(readonly customerServiceService: CustomerServiceService){

  }

  ngOnInit(): void {
  }

}
