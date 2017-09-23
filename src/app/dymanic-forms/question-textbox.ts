import { QuestionBase } from './question-base';

export class TextboxQuestion extends QuestionBase<string> {
    controlType = 'textbox';
    type: string;

    placeholder: string;
    checked: boolean;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';

        this.placeholder = options['placeholder'] || '';
        this.checked = !!options['checked'];

    }
}
