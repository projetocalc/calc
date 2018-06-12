import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  numberA;
  numberB;
  typeOfAction;
  result;
  constructor(public navCtrl: NavController) {
  }
  performFunction(type){
    var a = parseInt(this.numberA);
    var b = parseInt(this.numberB);
    if( type == 'a'){
      this.typeOfAction = "adição"
      this.result = a+b
    }else if(type == 's'){
      this.typeOfAction = "subtração"
      this.result = a - b;
    }else if(type == 'm'){
      this.typeOfAction = "multiplicação"
      this.result = a *b
    }else if(type == 'd'){
      this.typeOfAction = "divisão"
      this.result = a/b
    }

  }

}
