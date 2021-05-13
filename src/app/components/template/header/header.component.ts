import { HostBinding } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/themeService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  hasToggledTheme = true;
  currentTheme = '';
  @HostBinding('class') componentCssClass: any;

  constructor(private themeService: ThemeService) { 
  }

  ngOnInit(): void {
  }

  toggle() {
    this.hasToggledTheme = !this.hasToggledTheme;

    this.currentTheme = this.hasToggledTheme?'light-theme':'dark-theme';
    this.themeService.theme.next(this.currentTheme);

    console.log(this.currentTheme);
  }


}
