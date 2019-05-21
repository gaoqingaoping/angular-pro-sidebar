import { Component, Input }       from '@angular/core';

import { QuestionService } from './question.service';

@Component({
  selector: 'app-base-dyncmic-form',
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-dynamic-form [questions]="questions"></app-dynamic-form>
    </div>
  `,
  providers:  [QuestionService]
})
export class BaseComponent {
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}
