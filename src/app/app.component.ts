import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, PostsComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angularApp';
  url =
    'https://raw.githubusercontent.com/maah0060/Data-json/refs/heads/main/data.json';
  apiData: any = [];

  async getAPIData(): Promise<[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
}
