import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Category } from '../../enum/category';
import { ProductService } from '../../services/product.service';
import { Product } from '../../classes/product';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit{
  lescategories = Object.values(Category);
  lesproduits:Product[]=[]
  produitsForm!:FormGroup

  constructor(private prduitService:ProductService,private formBuilder:FormBuilder){}

  productForm=new FormGroup(
    {
      id:new FormControl(1, {nonNullable:true}),
      libelle:new FormControl('', {nonNullable:true}),
      prix:new FormControl(0, {nonNullable:true}),
      madeIn:new FormControl('Tunisie', {nonNullable:true}),
      categorie:new FormControl(Category.Accessoires),
      nouveau:new FormControl(true),
    }
  )


  onSubmitForm(){
    // console.log(this.productForm.value)
    // console.log(this.productForm.get("id")?.value)
    // console.log(this.productForm.controls["libelle"].value)
    // console.log(this.productForm.value["madeIn"])

    // this.prduitService.getProduits().subscribe(
    //   (data)=>{
    //     this.lesproduits=data
    //   }
    // )

    this.prduitService.addProduits(this.produitsForm.value as Product).subscribe(
      (data)=>{
        console.log(data)
      }
    )

  }

  onResetForm(){
    this.productForm.reset();
    this.productForm.get('madeIn')?.setValue('Autre');
    this.productForm.get('categorie')?.setValue(Category.Fourniture);
  }


  
  

  ngOnInit(){
    this.produitsForm=this.formBuilder.nonNullable.group({
      id:[0],
      libelle:[''],
      prix:[0],
      madeIn:['Tunisie'],
      categorie:[Category.Accessoires],
      nouveau:[true],
      pointsVente:this.formBuilder.array([])
    })
    this.productForm.get('nouveau')?.setValue(false);
    this.productForm.get('libelle')?.valueChanges.subscribe(
      data=>console.log(data)
    );
        // this.produitsForm=this.formBuilder.nonNullable.group({
    //   id:[0],
    //   libelle:[''],
    //   prix:[0],
    //   madeIn:['Tunisie'],
    //   categorie:[Category.Accessoires],
    //   nouveau:[true],
    //   pointsVente:this.formBuilder.array([])
    // })

  }

  public get lesPointsVente(){
    return this.produitsForm.get('pointsVente') as FormArray
  }

  onAjouter(){
    this.lesPointsVente.push(this.formBuilder.control(''))
  }

}
