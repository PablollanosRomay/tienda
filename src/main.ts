import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';

bootstrapApplication(AppComponent, {
	providers: [
		importProvidersFrom(HttpClientModule, FormsModule, ReactiveFormsModule, AppRoutingModule)
	]
}).catch(err => console.error(err));
