import { Component } from '@angular/core';
import { Clip } from '../clip.model';

@Component({
  selector: 'app-clip-list',
  templateUrl: './clip-list.component.html',
  styleUrl: './clip-list.component.css'
})
export class ClipListComponent {

  clipList: Clip[] = [];

}
