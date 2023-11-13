import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Category } from 'src/app/Application/enum/category';
import { ProductService } from 'src/app/Application/services/product.service';
import { EmployeService } from '../../services/employe.service';
import { Affiliation } from '../../classes/affiliation';
import { Departement, Fonction } from '../../enum/types';
import { Employe } from '../../classes/employe';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit{
  constructor(private employeService:EmployeService,private fb:FormBuilder){}
  lesfonctions=Object.values(Fonction);

  employesForm!:FormGroup 

  ngOnInit(){
    //version 1 avec FormBuilder
    this.employesForm=this.fb.nonNullable.group({
      id:[Math.round(100*Math.random())],
      matricule:['M589'],
      nom:['Manel Mhamdi'],
      affiliation:this.fb.group({
        fonction:[Fonction.Tec],
        departement:[Departement.TI]
      }),

      // erreur
      // affiliation:new Affiliation({
      //   departement:['TI'],
      //   fonction:[Fonction.Tec]
      // })

      //erreur
      // affiliation:new Affiliation(Fonction.Tec,Departement.TI)

      //autre version modifié
      // departement:[Departement.TI],
      // fonction:[Fonction.Tec],
      // lesfonctions:this.fb.array([]),
      // lesdepart:this.fb.array([])
    })

      

  }
  //version 2 : avec FormGroup() FormControl()
  // lesEmployes=new FormGroup({
  //   matricule:new FormControl('M589',{nonNullable:true}),
  //   nom:new FormControl('Manel Mhamdi',{nonNullable:true}),
  //   affiliation:new FormGroup({
  //     departement:new FormControl(Departement.TI,{nonNullable:true}),
  //     fonction:new FormControl(Fonction.Tec,{nonNullable:true})
  //   }),
  // })
  lesEmpoyes!:Employe[]


  ajouter(){
    this.employeService.addEmploye(this.employesForm.value as Employe).subscribe(
      ()=>{}
    )
  }
  // ,departement:Departement.TI,fonction:Fonction.Sec
  oneffacer(){
    this.employesForm.reset({matricule:'',nom:'',affiliation:{departement:Departement.TI,fonction:Fonction.Sec}})
  }
}
