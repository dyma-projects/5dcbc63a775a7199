import { Directive, HostListener, HostBinding,} from '@angular/core';

export enum DIRECTION_CLE{
  CLE_DROIT = 39,
  CLE_GAUCHE = 37,
  CLE_HAUT = 38,
  CLE_BAS = 40
}

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @HostBinding('style.color') color:string;
  constructor() { }

  // Ce Hostlistener permet d'écouter un événement sur l'objet window global;
  // Peut-être que cela vous sera utile pour votre directive ;)
  // (Il vous faudra bien sûr le déplacer dans celle-ci)

   @HostListener('window:keyup', ['$event']) windowClick(event:KeyboardEvent) {
     if(DIRECTION_CLE.CLE_DROIT === event.keyCode ){
       this.color = 'orange'
     }
     if(DIRECTION_CLE.CLE_GAUCHE === event.keyCode ){
      this.color = 'red'
    }

    if(DIRECTION_CLE.CLE_HAUT === event.keyCode ){
      this.color = 'blue'
    }

    if(DIRECTION_CLE.CLE_BAS === event.keyCode ){
      this.color = 'green'
    }
     console.log(event);
   }

}
