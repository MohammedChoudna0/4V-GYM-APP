import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  activeLink!: string;
  indicatorWidth = '50%';
  indicatorTransform = '';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeLink = event.urlAfterRedirects;
        this.updateIndicator();
      }
    });
  }

  isLinkActive(route: string): boolean {
    return this.activeLink === route;
  }

  navigate(path: string) {
    this.router.navigateByUrl(path);
  }

  // Actualiza la posición de la barrita basándote en la ruta activa
  updateIndicator() {
    if (this.activeLink.includes('activities')) {
      this.indicatorTransform = 'translateX(0%)';
    } else if (this.activeLink.includes('monitors')) {
      this.indicatorTransform = 'translateX(100%)';
    }
  }
}
