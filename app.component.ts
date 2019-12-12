import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

    public numbers = [{ id: 0, name: 'One' }, 
    { id: 1, name: 'Two' }, 
    { id: 3, name: 'Three' }, 
    { id: 4, name: 'Four' },  
    { id: 5, name: 'Five' }, 
    { id: 6, name: 'Six' }, 
    { id: 7, name: 'Seven' },
    { id: 8, name: 'Eight' }, 
    { id: 9, name: 'Nine' }, 
    { id: 10, name: 'Ten' }];

    public filteredNUmbers = this.numbers.slice();
    
}
