import { Component } from "@angular/core";
import { SkeletonComponent } from "../skeleton/skeleton";

@Component({
  selector: "app-card-skeleton",
  standalone: true,
  imports: [SkeletonComponent],
  templateUrl: "./card-skeleton.html",
})
export class CardSkeletonComponent {}
