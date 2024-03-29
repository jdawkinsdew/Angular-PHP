import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import {APP_BASE_HREF} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {environment} from '../environments/environment';
import {CoreModule} from './core';
import {SharedModule} from './shared';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './front/auth/login.component';
import {RegisterComponent} from './front/auth/register.component';
import {AgGridModule} from 'ag-grid-angular/dist/aggrid.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import {
    MatButtonModule, MatCardModule,
    MatDividerModule, MatGridListModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatTooltipModule
} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {ModalComponent} from './pages/modal/modal.component';
import {GooglePlaceModule} from 'ngx-google-places-autocomplete/ngx-google-places-autocomplete.module';
import {SlickModule} from 'ngx-slick';
import {
    AuthService,
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider,
    FacebookLoginProvider,
    LinkedinLoginProvider
} from 'ng-social-login';
import {AuthenticationService} from './_services/authentication/authentication.service';
import {ImageCropperModule} from 'ngx-image-cropper';
import {AgmCoreModule} from '@agm/core';
import { MainComponent } from './front/main/main.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { ContactComponent } from './front/contact/contact.component';
import { AboutComponent } from './front/about/about.component';
import {GoogleChartsModule} from 'angular-google-charts';
import {SuccessComponent} from './payment/success/success.component';
import {NotificationComponent} from './payment/notificaion/notificaion.component';
import {CancelComponent} from './payment/cancel/cancel.component';

const config = new AuthServiceConfig(
    [
        {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('340033599539-8o42jmosgp5l7nionok72c7gppeknkgu.apps.googleusercontent.com')
        },
        {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('2455540498025956')
        },
        {
            id: LinkedinLoginProvider.PROVIDER_ID,
            provider: new LinkedinLoginProvider('77kex7ww11igvi')
        },
    ]);

export function provideConfig() {
    return config;
}
@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        ModalComponent,
        MainComponent,
        LoaderComponent,
        HeaderComponent,
        FooterComponent,
        ContactComponent,
        AboutComponent,
        SuccessComponent,
        NotificationComponent,
        CancelComponent
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'my-app'}),
        CoreModule,
        SharedModule,
        BrowserAnimationsModule,
        TransferHttpCacheModule,
        MatDialogModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        GooglePlaceModule,
        AgGridModule.withComponents(null),
        SlickModule.forRoot(),
        ChartsModule,
        ImageCropperModule,
        SocialLoginModule,
        MatDividerModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyA6L4RK2RH8CmfPnyV1VEfjrHj3BP66gmE'
        }),
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        MatListModule,
        GoogleChartsModule.forRoot('AIzaSyB_O_MOsbttHQ9gAXE1iO7gCa1Vgg-6AYo'),
        MatCardModule,
        MatGridListModule,
    ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: APP_BASE_HREF,
            useValue: `${environment.BASE_URL}`,
        },
        {
            provide: AuthServiceConfig,
            useFactory: provideConfig
        },
        AuthService,
        AuthenticationService,
    ]
})
export class AppModule {
}
