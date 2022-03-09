import { Component, OnInit  } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Checked for template driven form
  defaultCourse: any = null;
  defaultAccountType: any = "Cash";
  courseList = [{ "name": "Select Course", "value": null }, { "name": "C#", "value": "0" }, { "name": "react", "value": "1" }, { "name": "html", "value": "2" }];
  accountTypes = [{ "name": "Token", "value": "Fun" }, { "name": "Real Money", "value": "Cash" }, { "name": "Credit", "value": "Card" }]
  title = 'angular-learn-app';
  isShow: boolean = true;
  nestedjson: any;
  stjson : any = [];
  myImagePath = "../assets/images/";
  url: any; 
	msg = "";

  selectFile(event: any) { 
    debugger;
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
    var mimeType = event.target.files[0].type;
		
		// if (mimeType.match(/image\/*/) == null) {
		// 	this.msg = "Only images are supported";
		// 	return;
		// }
    var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = () => {
      debugger;
			this.msg = "";
			this.url = reader.result; 
		}
    console.log(this.url);
  }
  GetUserValue(formvalues: any) {
    console.log(formvalues);
  }
  ngOnInit() {
    debugger;
    this.nestedjson = {
      "stloop":[
      {
        name: "parent1",
        value: ["child11", "child12"]
      },
      {
        name: "parent2",
        value: ["child2"]
      },
      {
        name: "parent3",
        value: ["child3"]
      }
    ]};
    
    // this.nestedjson = Array.of(this.nestedjson);

    this.stjson = this.nestedjson.stloop;
  }
  // Checked for Reactive form
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    selectedGender: new FormControl('Cash'),
    selectedCourse: new FormControl(null)
  });

  get email() {
    return this.loginForm.get('email');
  }

  getFormData(formvalues: any) {
    console.log(formvalues);
  }
  getHtmlString(){
    return '<strong>Just testing</strong>';
  }
}
