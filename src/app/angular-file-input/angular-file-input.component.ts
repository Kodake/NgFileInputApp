import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ngfModule, ngf } from "angular-file"

@Component({
  selector: 'app-angular-file-input',
  templateUrl: './angular-file-input.component.html',
  styleUrls: ['./angular-file-input.component.css']
})
export class AngularFileInputComponent implements OnInit {
  
  @ViewChild('myFileInput') myFileInput: ElementRef;
  file: File[] = [];
  fileSize: number;
  maxFileSize: number = 5;
  fileSizeInvalid: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  validateMaxLength(e): void {
    this.fileSize = e.target.files[0].size / 1000 / 1000;
    if (this.fileSize > this.maxFileSize) {
      console.log(e.target.files);
      this.reset();
      this.fileSizeInvalid = true;
    } else {
      console.log(e.target.files);
      this.fileSizeInvalid = false;
    }
  }

  reset() {
    this.myFileInput.nativeElement.value = null;
  }

}
