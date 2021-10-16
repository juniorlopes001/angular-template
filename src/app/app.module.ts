import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppFooterComponent } from './structure/app-footer/app-footer.component';
import { AppHeaderComponent } from './structure/app-header/app-header.component';
import { PageHeaderComponent } from './structure/page-header/page-header.component';
import { SideMenuComponent } from './structure/side-menu/side-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { PageLoaderComponent } from './page-elements/loaders/page-loader/page-loader.component';
import { DefaultMessageComponent } from './page-elements/default-message/default-message.component';
import { AlertService } from './_services/alert.service';
import { GlobalValuesService } from './_services/global-values.service';
import { QuickSearchComponent } from './shared-components/quick-search/quick-search.component';
import { TableLoaderComponent } from './page-elements/loaders/table-loader/table-loader.component';
import { GridPaginationComponent } from './shared-components/grid-pagination/grid-pagination.component';
import { HelpersService } from './_services/helpers.service';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { FilterMenuComponent } from './shared-components/filter-menu/filter-menu.component';
import { GenericModalComponent } from './shared-components/generic-modal/generic-modal.component';
import { ConfirmCancelDialogComponent } from './shared-components/confirm-cancel-dialog/confirm-cancel-dialog.component';
import { AuthenticationService } from './_services/authentication.service';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { routing } from './app-routing';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ApplicationErrorsHandler } from './classes/application-errors-handler';
import { HeadersInterceptorProvider } from './_helpers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatDialogModule } from '@angular/material/dialog';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMaskModule } from 'ngx-mask';
import { ConfirmComponent } from './shared-components/confirm/confirm.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { LoginComponent } from './pages/login/login.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CircleLoaderComponent } from './shared-components/circle-loader/circle-loader.component';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [
    AppComponent,
    AppFooterComponent,
    AppHeaderComponent,
    PageHeaderComponent,
    SideMenuComponent,
    HomeComponent,
    PageLoaderComponent,
    DefaultMessageComponent,
    QuickSearchComponent,
    TableLoaderComponent,
    GridPaginationComponent,
    FilterMenuComponent,
    GenericModalComponent,
    ConfirmCancelDialogComponent,
    ConfirmComponent,
    LoginComponent,
    CircleLoaderComponent,
  ],
  entryComponents: [
    ConfirmComponent,
  ],
  imports: [
    MatDialogModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatInputModule,
    routing,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    MatIconModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    BrowserAnimationsModule,
    MatChipsModule,
    MatDatepickerModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      preventDuplicates: true,
      progressBar: true,
      positionClass: 'toast-top-right'
    }),
    NgxMaskModule.forRoot(),
    NgxDropzoneModule,
  ],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    GlobalValuesService,
    AlertService,
    HelpersService,
    AuthenticationService,
    HeadersInterceptorProvider,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: ErrorHandler, useClass: ApplicationErrorsHandler },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
