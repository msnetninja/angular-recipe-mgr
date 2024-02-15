import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple test', 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1id6na.img'),
    new Recipe('Another recipe', 'copy/paste the same image', 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1id6na.img')
  ];

  constructor() {}

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
