import { Component } from '@angular/core';
import { InfiniteScroll, NavController } from "ionic-angular";

import { DataTaskListProvider } from "./data";
import {TasksDescription} from "../tasksDescription/tasksDescription";

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html'
})
export class TasksPage {
  
  tasks: Array<{
    imgPath: string,
    title: string,
    subTitle: string,
    description: string
  }>;

  constructor(
    private dataProvider: DataTaskListProvider,
    public navCtrl: NavController
  ) {
    
    this.tasks = dataProvider.getData();
  }
  
  goToDetails(content) {
    this.navCtrl.push(TasksDescription, content);
  }
  
  doInfinite(infiniteScroll: InfiniteScroll) {
    this.dataProvider.getAsyncData().then((newData) => {
      for(let i = 0; i < newData.length; i++) {
        this.tasks.push(newData[i]);
      }
      
      infiniteScroll.complete();

      if (this.tasks.length > 50) {
        infiniteScroll.enable(false);
      }
    });
  }
}
