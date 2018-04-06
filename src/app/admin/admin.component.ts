import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [RecipeService]
})
export class AdminComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  submitForm(title: string, description: string, body: string, image: string) {
    let newRecipe: Recipe = new Recipe(title, description, body, image);
    this.recipeService.addRecipe(newRecipe);
  }

}
