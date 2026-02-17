import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputText } from 'primeng/inputtext';
import { Textarea } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contact',
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    InputText,
    Textarea,
    ButtonModule,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    alert('Thank you for your message! I will get back to you soon.');
    this.formData = { name: '', email: '', subject: '', message: '' };
  }
}
