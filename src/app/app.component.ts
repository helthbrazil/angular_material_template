import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/Observable';
throwError('hello');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(translate: TranslateService) {
    translate.setDefaultLang('pt');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('pt');
  }

}
