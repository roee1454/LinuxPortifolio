import { Component, input, computed } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-skeleton",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./skeleton.html",
})
export class SkeletonComponent {
  /**
   * Width of the skeleton. Can be any CSS value (e.g., '100%', '200px', '1rem').
   * Defaults to '100%'.
   */
  readonly width = input<string>("100%");

  /**
   * Height of the skeleton. Can be any CSS value.
   * Defaults to '1rem'.
   */
  readonly height = input<string>("1rem");

  /**
   * Shape of the skeleton.
   * - 'text': slightly rounded corners, typical for text lines.
   * - 'circular': 50% border radius.
   * - 'rectangular': hard corners or default theme radius.
   */
  readonly variant = input<"text" | "circular" | "rectangular">("text");

  /**
   * Additional CSS classes.
   */
  readonly className = input<string>("");

  /**
   * Computed styles for the skeleton element.
   */
  protected readonly styles = computed(() => ({
    width: this.width(),
    height: this.height(),
  }));

  /**
   * Computed classes for the skeleton element.
   */
  protected readonly classes = computed(() => {
    const baseClasses = "animate-pulse bg-text-muted/10";
    const variantClasses = {
      text: "rounded",
      circular: "rounded-full",
      rectangular: "rounded-md",
    }[this.variant()];

    return `${baseClasses} ${variantClasses} ${this.className()}`;
  });
}
