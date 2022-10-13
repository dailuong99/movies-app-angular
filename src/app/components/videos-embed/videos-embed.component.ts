import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos-embed',
  templateUrl: './videos-embed.component.html',
  styleUrls: ['./videos-embed.component.scss']
})
export class VideosEmbedComponent implements OnInit {
  @Input() site: string = 'Youtube';
  @Input() key: string | null = null;

  videoUrl: SafeResourceUrl = "";

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.videoUrl = this.getSafeUrl('https://www.youtube.com/embed/' + this.key)
  }

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
