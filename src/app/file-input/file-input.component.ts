import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.css']
})
export class FileInputComponent implements OnInit {

  @ViewChild('myFileInput') myFileInput: ElementRef;
  fileSize: number;
  maxFileSize: number = 5;
  fileSizeInvalid: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  validateMaxLength(e): void {
    this.fileSize = e.target.files[0].size / 1000 / 1000;
    if (this.fileSize > this.maxFileSize) {
      this.reset();
      this.fileSizeInvalid = true;
    } else {
      this.fileSizeInvalid = false;
    }
  }

  reset() {
    this.myFileInput.nativeElement.value = null;
  }

}
