import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize form group with validation
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]], // Only 10 digit numbers allowed
      email: ['', [Validators.required, Validators.email]],
    });
  }

  // Submit form handler
  onSubmit() {
    if (this.contactForm.valid) {
      // If form is valid, print form data to console
      console.log(this.contactForm.value);
    } else {
      // If form is invalid, show popup
      alert('Please fill all fields with valid data!');
    }
  }
}
