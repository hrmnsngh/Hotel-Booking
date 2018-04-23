import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-vkey',
  templateUrl: './vkey.component.html',
  styleUrls: ['./vkey.component.scss']
})
export class VkeyComponent implements OnInit {

  typedText: any;
  vKeyForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.vKeyForm = this.fb.group({
      a: [],
      s: [],
      d: [],
      f: []
    });
   }
  ngOnInit() {
  }

  vKey(data) {
    this.typedText.push(data);

  }
}
