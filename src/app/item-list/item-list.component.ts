import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ItemMo } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent  {
  itemModel = new ItemMo(
    "",
    "",
    ""
  )

  constructor(private itemService: ItemService) { }
  onSubmit(){
    this.itemService.createItem(this.itemModel)
       .subscribe(
        
          data=>alert("Thank You!! you Registered Sucessfully "),
          error=>console.error("Error!",error)
          
       )
  
   
     
  }

  
 
}
