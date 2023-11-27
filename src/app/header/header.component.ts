import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgZone } from "@angular/core";

@Component({
  selector: "nishant-header",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements AfterViewInit {
  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          document
            .getElementById("headerSection")
            ?.classList.add("header-section-shadow");
        } else {
          document
            .getElementById("headerSection")
            ?.classList.remove("header-section-shadow");
        }
      });
    });
  }
}
