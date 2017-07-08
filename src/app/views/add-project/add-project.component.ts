// Basic Angular Components
import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';

// Project Form Model
import {ProjectForm, technologies} from '../../add-project-model';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent implements OnInit {

  public uploader:FileUploader = new FileUploader({url:'http://localhost:3000/uploads'});
  projectForm: FormGroup;
  technologies = technologies;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {

    this.projectForm = this.fb.group({
      role: ['', Validators.required],
      frontContent: '',
      summary: ['', Validators.required],
      projectName: ['', Validators.required],
      dateCompleted: ['', Validators.required],
      Technology: this.fb.group({
        tv: false,
        android: false,
        public: false,
        watch: false,
      })
    });
  }

  submitProjectData(projectForm) {
    projectForm.frontContent = (<HTMLInputElement>document.getElementById("myFile")).value;
    projectForm.frontContent = projectForm.frontContent.match(/[^\\]+$/g);
    projectForm.frontContent = `./server/uploads/'${ projectForm.frontContent }`;
    console.log(projectForm);
  }


}
