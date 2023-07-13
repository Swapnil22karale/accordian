import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-accord',
  templateUrl: './accord.component.html',
  styleUrls: ['./accord.component.css']
})
export class AccordComponent {
  @Input() recieveData: any;
  @Input() recieveData2: any;
}
