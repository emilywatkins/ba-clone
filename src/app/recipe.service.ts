import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class RecipeService {

  recipes;

  constructor(private database: AngularFireDatabase) {
    this.recipes = database.list('recipes');
  }

  getRecipes() {
    return this.recipes;
  }

  getRecipeById(recipeId: string) {
    return this.database.object('recipes/' + recipeId);
  }

}
