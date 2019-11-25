import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef,MatIconModule } from '@angular/material';
import { CreateContactDialogComponent } from '../create-contact-dialog/create-contact-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  h1Style: boolean = false;
  users = [];

  constructor(public dialogRef: MatDialogRef<CreateContactDialogComponent>,
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: []) { }

  ngOnInit() {
    // this.getUserDetails();
  }

  openDialog(users?: any) {
    let dialogRef = this.matDialog.open(CreateContactDialogComponent, {
      height:'400px',
      width:'400px',
      data : {
        userDetails : users
      }
    });
    dialogRef.afterClosed().subscribe(value => {
      console.log("return json",value);

      if(value != false){
        // for(let userdata of this.users){
        //   if(value.id == userdata.id){
        //     let index = this.users.indexOf(value.id);
        //     console.log("inedex",index);
        //   }
        // }
        this.users.push(value);
      } 
    });
  }

  updateUserDetails(users){
    
    

  }

  delete(index){
    console.log("deklete",index);
    this.users.splice(index,1);
  }

  edit(index){
    console.log("edit",index);
    this.openDialog(this.users[index])
  }
}
