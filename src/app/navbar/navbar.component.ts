import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() componentSelected = new EventEmitter<string>();

  showComponent(component: string): void {
    this.componentSelected.emit(component);
  }
}
