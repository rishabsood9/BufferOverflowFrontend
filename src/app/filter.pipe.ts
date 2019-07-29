import { PipeTransform, Pipe } from '@angular/core';

import { Question } from './Models/question.model';

@Pipe({
    name:'Filter',
    pure:true
})
export class FilterPipe implements PipeTransform{
    transform(questions:Question[],searchTeram:string):Question[]{
        if(!questions||!searchTeram){
            return questions;
        }
        return questions.filter(question=>question.Title.toLowerCase()
        .indexOf(searchTeram.toLowerCase())!== -1);
    }
}