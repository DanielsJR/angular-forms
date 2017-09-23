import { CheckboxQuestion } from './question-checkbox';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';

@Injectable()
export class QuestionService {

    // Todo: get from a remote source of question metadata
    // Todo: make asynchronous
    getQuestions() {

        const questions: QuestionBase<any>[] = [

            new DropdownQuestion({
                key: 'brave',
                label: 'Bravery Rating',
                placeholder: 'select..',
                options: [
                    { key: 'solid', value: 'Solid' },
                    { key: 'great', value: 'Great' },
                    { key: 'good', value: 'Good' },
                    { key: 'unproven', value: 'Unproven' }
                ],
                required: true,
                class: 'form-control',
                order: 3
            }),

            new TextboxQuestion({
                key: 'firstName',
                label: 'First name',
                value: 'Bombasto',
                required: true,
                class: 'form-control',
                order: 1
            }),

            new TextboxQuestion({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                required: true,
                placeholder: 'Email',
                class: 'form-control',
                order: 2
            }),
            new TextboxQuestion({
                key: 'url',
                label: 'Url',
                type: 'url',
                required: false,
                class: 'form-control',
                order: 4
            }),
            new TextboxQuestion({
                key: 'password',
                label: 'Password',
                type: 'password',
                placeholder: 'Password',
                required: true,
                class: 'form-control',
                order: 5
            }),
            new TextboxQuestion({
                key: 'checkbox2',
                label: 'Checkbox2',
                type: 'checkbox',
                value: 'checkbox2',
                checked: 'true',
                order: 7
            }),
        ];

        return questions.sort((a, b) => a.order - b.order);
    }
}
