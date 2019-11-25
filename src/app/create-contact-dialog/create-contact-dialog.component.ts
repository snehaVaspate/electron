import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-create-contact-dialog',
  templateUrl: './create-contact-dialog.component.html',
  styleUrls: ['./create-contact-dialog.component.scss']
})
export class CreateContactDialogComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required],
      id : ['', Validators.required]
    });

    if(this.data["userDetails"]){
      this.setUserDetails(this.data["userDetails"]);
    }
  }
  setUserDetails(arg0: any) {
    this.messageForm.controls["id"].setValue(arg0.id);
    this.messageForm.controls["name"].setValue(arg0.first_name);
    this.messageForm.controls["message"].setValue(arg0.last_name);

  }

  onSubmit() {
    let jsonFile = {};
    jsonFile["id"] = this.messageForm.controls["id"].value;
  jsonFile["first_name"] = this.messageForm.controls["name"].value;
  jsonFile["last_name"] = this.messageForm.controls["message"].value;
    console.log("json",jsonFile);

  this.dialogRef.close(jsonFile);
}

closeDialog() {
  this.dialogRef.close(false);
}
}
