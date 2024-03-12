import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clip-item',
  templateUrl: './clip-item.component.html',
  styleUrls: ['./clip-item.component.css']
})
export class ClipItemComponent implements OnInit {

  @Input() videoName: string;
  @Input() videoThumbnail: string;

  constructor() {}

  ngOnInit(): void {
  }
}