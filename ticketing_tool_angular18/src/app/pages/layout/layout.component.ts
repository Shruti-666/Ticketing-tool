import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  currentTheme: 'dark' | 'light' = 'dark';

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
      document.body.classList.add('light-theme');
      this.currentTheme = 'light';
    } else {
      document.body.classList.remove('light-theme');
      this.currentTheme = 'dark';
    }
  }

  toggleTheme() {
    document.body.classList.toggle('light-theme');

    const isLight = document.body.classList.contains('light-theme');

    this.currentTheme = isLight ? 'light' : 'dark';

    localStorage.setItem('theme', this.currentTheme);
  }
  router = inject(Router);
  onLogout() {
    localStorage.removeItem('ticketUser');
    this.router.navigateByUrl('login');
  }
}
