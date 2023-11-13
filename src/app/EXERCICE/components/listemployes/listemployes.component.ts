import { Component, OnInit } from '@angular/core';
import { Employe } from '../../classes/employe';
import { EmployeService } from '../../services/employe.service';

@Component({
  selector: 'app-listemployes',
  templateUrl: './listemployes.component.html',
  styleUrls: ['./listemployes.component.css']
})
export class ListemployesComponent implements OnInit{

  lesEmpoyes!:Employe[]
  constructor(private employeService:EmployeService){}

  ngOnInit(){
    this.employeService.getEmployes().subscribe(
      data=>{
        this.lesEmpoyes=data
      }
    )
  }


}
