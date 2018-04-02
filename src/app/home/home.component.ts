import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  recipes: Recipe[] = [
    new Recipe("Title: Pigs in a blanket", "Description: The only meat + bread you'll ever need", "Body: put a hotdog in some dough and bake it.", "Image url: some great shot.jpg", 1),
    new Recipe("Title2", "Description2", "Body2", "Image2", 2)
  ];

  goToDetail(clickedRecipe: Recipe) {
    this.router.navigate(['recipes', clickedRecipe.id]);
  };

}
