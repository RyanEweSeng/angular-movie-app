import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.scss']
})
export class TrailerComponent implements OnInit {
  @Input() key!: string;
  @Output() closeTrailerEvent: EventEmitter<void> = new EventEmitter<void>();

  safeUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    const videoUrl = 'https://www.youtube.com/embed/';
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl + this.key);
  }

  emitCloseTrailer() {
    this.closeTrailerEvent.emit();
  }
}
