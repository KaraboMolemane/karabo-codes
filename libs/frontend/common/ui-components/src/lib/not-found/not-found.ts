import { Component, Input, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-not-found',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})
export class NotFound implements OnInit {
  @Input() title?: string;
  @Input() message?: string;
  @Input() homeUrl = '/';
  // Optional: App-specific icon or illustration source
  @Input() iconUrl?: string;
  @Input() iconAlt = 'Broken plug';

  ngOnInit() {
    if (!this.title || this.title.trim() === '') {
      this.title = 'Page Not Found';
    }
    if (!this.message || this.message.trim() === '') {
      this.message = "The page you're looking for doesn't exist or was moved.";
    }
  }
}
