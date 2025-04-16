import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  category: string = '9'; // Default category (General Knowledge)
  difficulty: string = 'easy'; // Default difficulty

  constructor(private router: Router) {}

  startQuiz() {
    // Navigate to the quiz page with selected category and difficulty
    this.router.navigate(['/quiz'], {
      queryParams: { category: this.category, difficulty: this.difficulty }
    });
  }

}
