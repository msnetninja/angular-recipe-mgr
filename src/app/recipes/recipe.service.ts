import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Gallo Pinto',
      'Lorem ipsum dolor sit amet, consectetur.',
      'https://www.pcrm.org/sites/default/files/gallo-pinto-10.jpg',
      [
        new Ingredient('Rice', 1),
        new Ingredient('Beans', 1),
        new Ingredient('Eggs', 2)
      ]),
    new Recipe(
      'Fish & Chips',
      'Lorem ipsum dolor sit amet.',
      'https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2023/08/fish-and-chi-1200x675.jpg',
      [
        new Ingredient('Fish', 1),
        new Ingredient('Potatoes', 3),
        new Ingredient('Salt', 1)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); // this way we only get a copy of the array instead of returning the array itself
  }

  getReipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}