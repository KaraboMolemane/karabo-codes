import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ui-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-found.html',
  styleUrls: ['./not-found.scss'],
})
export class NotFound implements OnInit {
  @Input() title = '';
  @Input() message = '';
  @Input() homeUrl = '/';
  @Input() iconUrl?: string;
  @Input() iconAlt?: string;

  ngOnInit(): void {
    this.title = this.title?.trim() || 'Page not found';
    this.message =
      this.message?.trim() ||
      "Sorry, we couldn't find the page you're looking for.";
  }
}
