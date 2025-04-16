import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  category: string = '9'; 
  difficulty: string = 'easy'; 

  constructor(private router: Router) {}

  startQuiz() {

    this.router.navigate(['/quiz'], {
      queryParams: { category: this.category, difficulty: this.difficulty }
    });
  }

}
