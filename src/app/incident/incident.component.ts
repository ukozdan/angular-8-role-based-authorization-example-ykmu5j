import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from "../_helpers/must-match.validator";

@Component({
  selector: "app-incident",
  templateUrl: "./incident.component.html",
  styleUrls: ["./incident.component.css"]
})
export class IncidentComponent implements OnInit {
  incidentForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.incidentForm = this.formBuilder.group(
      {
        /*title: ["", Validators.required],
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", Validators.required],
        acceptTerms: [false, Validators.requiredTrue]*/
        incidentDescription: ["", Validators.required],
        incidentLocation: ["", Validators.required],
        peopleInvolved: ["", Validators.required],
        peopleAware: ["", Validators.required],
        incidentOccurenceDateTime: ["", Validators.required],
        incidentIdentifiedDateTime: ["", Validators.required],
        additionalInformation: ["", Validators.required],
        ivantiReferenceNumber: ["", Validators.required],


      },
      {
        //validator: MustMatch("password", "confirmPassword")
      }
    );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.incidentForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.incidentForm.invalid) {
      return;
    }

    // display form values on success
    alert(
      "SUCCESS!! :-)\n\n" + JSON.stringify(this.incidentForm.value, null, 4)
    );
  }

  onReset() {
    this.submitted = false;
    this.incidentForm.reset();
  }
}
