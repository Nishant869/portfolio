import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { AboutComponent } from "./about/about.component";
import { FooterComponent } from "./footer/footer.component";
import { CompaniesComponent } from "./companies/companies.component";
import { ProjectComponent } from "./project/project.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    CompaniesComponent,
    ProjectComponent,
  ],
})
export class AppComponent {
  title = "portfolio";
}
