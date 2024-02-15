import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple test', 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1id6na.img'),
    new Recipe('Another recipe', 'copy/paste the same image', 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1id6na.img')
  ];

  getRecipes() {
    return this.recipes.slice(); // this way we only get a copy of the array instead of returning the array itself
  }
}