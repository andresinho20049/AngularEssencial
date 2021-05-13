import { Component, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService } from './services/themeService';
import { Subscription } from 'rxjs';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  nome = 'André Carlos';

  @HostBinding('class') componentCssClass: any;
  themingSubscription: Subscription | undefined;

  constructor(private overlayContainer: OverlayContainer, private themeService: ThemeService) {

  }

  ngOnInit() {
    this.themingSubscription = this.themeService.theme.subscribe((theme: string) => {
      this.componentCssClass = theme;
      this.onSetTheme();
    });
  }

  onSetTheme() {
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(this.themeService.themes);
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }
    overlayContainerClasses.add(this.componentCssClass);
  }
}
