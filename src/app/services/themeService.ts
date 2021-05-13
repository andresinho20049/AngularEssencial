import { ApplicationRef, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  themes = ["dark-theme", "light-theme"];
  theme = new BehaviorSubject("light-theme");

  constructor(private ref: ApplicationRef) {
    const darkModeOn =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches;

    if (darkModeOn) {
      this.theme.next("dark-theme");
    }

    // watch for changes of the preference
    window.matchMedia("(prefers-color-scheme: light)").addListener(e => {
      const turnOn = e.matches;
      this.theme.next(turnOn ? "dark-theme" : "light-theme");

      // trigger refresh of UI
      this.ref.tick();
    });
  }
}
