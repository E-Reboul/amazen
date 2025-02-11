import { Component, Input } from '@angular/core';
import { HighlightDirective } from '../../directives/highlightDirective';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss'
})
export class ArticleCardComponent {
  @Input() article: any;
}
