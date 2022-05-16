import { Component, OnInit } from '@angular/core';
import { PickerController } from "@ionic/angular";
import { PickerOptions } from "@ionic/core";

@Component({
  selector: 'app-completeprofile',
  templateUrl: './completeprofile.page.html',
  styleUrls: ['./completeprofile.page.scss'],
})
export class CompleteprofilePage implements OnInit {

  gadgets: any[] = [
    [
      "10",
      "20",
      "30",
      "40",
      "50"
    ],
    [
      "1",
      "2",
      "3",
      "4",
      "5"
    ]
  ];
  numColumns:number = 2; // number of columns to display on picker over lay
  numOptions:number =5  // number of items (or rows) to display on picker over lay
  constructor(private pickerController: PickerController) {}

  ngOnInit() {
  }

  async showPicker() {
    let options: PickerOptions = {
        buttons: [
            {
              text: "Cancel",
              role: 'cancel'
            },
            {
              text: "Done",
              handler:(value:any) => {
                console.log(value);
              }
            },
          ],
          columns:this.getColumns()
    };
    let picker = await this.pickerController.create(options);
    picker.present()
  }

  getColumns(){
      let columns=[];
      for(let i =0 ;i < this.numColumns;i++){
          columns.push({
              name:`col -${i}`,
              options: this.getColumnOptions(i)
          })
      }
      return columns;
  }
  getColumnOptions(columIndex:number){
    let options = [];
    for(let i=0;i < this.numOptions;i++){
        options.push({
            text: this.gadgets[columIndex][i % this.numOptions],
            value:i
        })
    }
    return options;
  }

}
