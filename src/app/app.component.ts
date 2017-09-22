import { QuestionService } from './dymanic-forms/question.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [QuestionService]
})
export class AppComponent {
  title = 'Hero-Forms';
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}

