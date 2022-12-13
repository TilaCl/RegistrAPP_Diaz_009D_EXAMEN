import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tutorial-docente',
  templateUrl: './tutorial-docente.page.html',
  styleUrls: ['./tutorial-docente.page.scss'],
})
export class TutorialDocentePage implements OnInit {

  constructor(private menuController : MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.enable(true, 'second')
    this.menuController.open('second');
  }


}
