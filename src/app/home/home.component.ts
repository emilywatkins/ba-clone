import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RecipeService, AuthenticationService]
})
export class HomeComponent implements OnInit {
  recipes: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  user;

  constructor(
    private router: Router,
    private recipeService: RecipeService,
    public authService: AuthenticationService
  ) {
    this.authService.user.subscribe(user =>  {
      console.log(user);
    });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  goToDetail(clickedRecipe) {
    this.router.navigate(['recipes', clickedRecipe.$key]);
  };

}
