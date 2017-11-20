import { Component } from '@angular/core';
import { NavParams } from "ionic-angular";

@Component({
  selector: 'page-tasksDescription',
  templateUrl: 'tasksDescription.html'
})

export class TasksDescription {
  imgPath: string;
  title: string;
  subTitle: string;
  description: string;
  text: string;

  constructor(
    public navParam: NavParams
  ) {
    this.imgPath = this.navParam.get('imgPath');
    this.title = this.navParam.get('title');
    this.subTitle = this.navParam.get('subTitle');
    this.description = this.navParam.get('description');
    this.text = this.navParam.get('text');
  }
  
}
