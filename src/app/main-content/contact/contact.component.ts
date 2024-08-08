import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [FormsModule, NgIf, TranslateModule],
  standalone: true,
})
export class ContactComponent {

  constructor(private router: Router) {

  }

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
    checkbox: false
  }

  openPrivacy() {
    this.router.navigateByUrl('privacy');
  }

  showCheckboxError = false;

  onCheckboxChange(checkbox: boolean) {
    if (!checkbox) {
      this.showCheckboxError = true;
    } else {
      this.showCheckboxError = false;
    }
  }

  messageSent() {
    this.router.navigateByUrl('messageSent');
  }

  mailTest = false;

  post = {
    endPoint: 'https://bilalalac.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }
}
