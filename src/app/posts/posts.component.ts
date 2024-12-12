import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  httpClient = inject(HttpClient);
  public data: Array<any> = [];
  ngOnInit() {
    this.httpClient
      .get(
        'https://raw.githubusercontent.com/maah0060/Data-json/refs/heads/main/data.json'
      )
      .subscribe({
        next: (data: any) => {
          console.log(data);
          this.data = data;
        },
        error: (err) => console.log(err),
      });
  }
}
