import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupModule } from '@progress/kendo-angular-popup';
import { YouTubePlayerModule } from '@angular/youtube-player';



// material ui
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTooltipModule} from '@angular/material/tooltip';

// Services
import { AuthService } from './services/Authentication/auth.service'
import { ProductService } from './services/product.service'
import { LocalStorageService } from './services/storageLocalStorage.service'
import { WindowRef } from './services/windowRef.service'
import { AuthGuardService } from './services/Authentication/auth-guard.service'
import { ContactService } from './services/contact.service'
import { TehilimsService } from './services/tehilim.service'
import { httpClientCrudService } from './services/Authentication/httpService.service'
import { OrderService  } from './services/order.service'

// Components
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AccountComponent } from './account/account.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { ProductCardsComponent } from './product/product-cards/product-cards.component';
import { CardViewComponent } from './product/product-cards/card-view/card-view.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ModalImageComponent } from './product/product-cards/modal-image/modal-image.component';
import { TableViewScComponent } from './shopping-cart/table-view-sc/table-view-sc.component';
import { ModalConfirmationComponent } from './modal-confirmation/modal-confirmation.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { TehilimsComponent } from './tehilims/tehilims.component';
import { ProductHomeComponent } from './product/product-home/product-home.component';
import { HomeViewProductComponent } from './product/product-home/home-view-product/home-view-product.component';
import { ProductSearchComponent } from './product/product-search/product-search.component';
import { ProductSearchViewComponent } from './product/product-search/product-search-view/product-search-view.component';
import { VideoComponent } from './video/video.component';
import { YoutubePlayerComponent } from './video/youtube-player/youtube-player.component';
import { ImageModalComponent } from './product/product-view/image-modal/image-modal.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { ViewHeaderComponent } from './view-header/view-header.component';
import { OrderComponent } from './shopping-cart/order/order.component';
import { FormViewComponent } from './shopping-cart/order/form-view/form-view.component';

const snackBarOption = {
  duration: 2000,
  horizontalPosition: 'right',
  verticalPosition : 'bottom',
  panelClass: ['snackbar']
}


const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'account', canActivate: [AuthGuardService] ,component: AccountComponent },
  { path: 'product', redirectTo: 'product/home/', pathMatch: 'full' },
  { path: 'product/:categorie', redirectTo: 'product/:categorie/', pathMatch: 'full' },
  { path: 'product/:categorie/:id', component: ProductComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactMeComponent },
  { path: 'home', redirectTo: 'product/home/', pathMatch: 'full' },
  { path: '', redirectTo: 'product/home/', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];


const MAtModule = [
  MatBadgeModule,
  MatSelectModule,
  MatTabsModule,
  MatIconModule,
  MatButtonModule,
  MatGridListModule,
  MatTableModule,
  MatPaginatorModule,
  MatChipsModule,
  MatDialogModule,
  MatSidenavModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatProgressBarModule,
  MatSnackBarModule,
  DragDropModule,
  MatMenuModule,
  MatAutocompleteModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatStepperModule,
  CdkStepperModule,
  MatTooltipModule
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    HomeComponent,
    ShoppingCartComponent,
    ProductComponent,
    SigninComponent,
    SignupComponent,
    AccountComponent,
    ProductCardsComponent,
    CardViewComponent,
    ContactMeComponent,
    ModalImageComponent,
    TableViewScComponent,
    ModalConfirmationComponent,
    ProductViewComponent,
    TehilimsComponent,
    ProductHomeComponent,
    HomeViewProductComponent,
    ProductSearchComponent,
    ProductSearchViewComponent,
    VideoComponent,
    YoutubePlayerComponent,
    ImageModalComponent,
    AboutComponent,
    AboutComponentComponent,
    ViewHeaderComponent,
    OrderComponent,
    FormViewComponent,
  ],
  imports: [
    ...MAtModule,
    CommonModule,
    BrowserModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    StorageServiceModule,
    BrowserAnimationsModule,
    PopupModule,
    YouTubePlayerModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AuthService,
    ProductService,
    LocalStorageService,
    WindowRef,
    AuthGuardService,
    ContactService,
    TehilimsService,
    httpClientCrudService,
    OrderService,
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: snackBarOption }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
