import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public genres: string[] = ['Komedi', 'Aksiyon', 'Aile', 'Animasyon', 'Bilim Kurgu', 'Dram', 'Fantastik', 'Korku', 'Macera', 'Müzikal', 'Polisiye', 'Romantik'];
  public selectedGenre: string | null = null;
  public isDropdownOpen = false;

  public toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  public selectGenre(genre: string): void {
    this.selectedGenre = genre;
    this.toggleDropdown();
  }


}
