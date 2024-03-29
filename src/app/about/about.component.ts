import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'nishant-about',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [],
})
export class AboutComponent {}
