import {Component, ElementRef, OnInit} from '@angular/core';


@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.sass']
})
export class ApproveComponent implements OnInit {
  title: string;
  desctext: string;
  number: number;
  time: number[];
  constructor(private elementRef: ElementRef) {
    this.title = 'شارژ اعتباری ایرانسل';
    this.desctext = 'توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات';
    this.time = [2, 3, 4, 5];
    this.number = 1;
  }
    ngOnInit() {
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#f5f5f9';
  }
  additem() {
    this.number++;
}
  removeitem() {
    if (this.number === 0 ) {
      this.number = 0;
    } else {
      this.number--;
    }
  }
  approve() {
    // approve
  }
}
