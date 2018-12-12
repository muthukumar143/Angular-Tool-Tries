import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TableTestComponent } from "./Table Test/table-test/table-test.component";
import { ColorpickerTestComponent } from "./viewchild-test/colorpicker-test/colorpicker-test.component";
import { CdkTableModule } from "@angular/cdk/table";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { FileUploadModule } from "primeng/fileupload";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DataSource } from "@angular/cdk/table";
import { HttpClientModule } from "@angular/common/http";
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from "@angular/material";
import { MatMenuTryComponent } from "./Mat-Menu/mat-menu-try/mat-menu-try.component";
import { TablePaginationComponent } from "./table-pagination/table-pagination.component";
import { FileUploadComponentComponent } from "./file-upload-component/file-upload-component.component";
import { ProgrammaticKeyPressComponent } from "./programmatic-key-press/programmatic-key-press.component";
import { SortingNKComponent } from "./sorting-nk/sorting-nk.component";
import { ExcelFomatComponent } from "./excel-fomat/excel-fomat.component";
import { TableGroupingComponent } from "./table-grouping/table-grouping.component";
import { MatTableColumnFreezingComponent } from "./mat-table-column-freezing/mat-table-column-freezing.component";
import { CdkTreeModule } from "../../node_modules/@angular/cdk/tree";
import { CommonModule } from "../../node_modules/@angular/common";
import { VariableDeclerationsComponent } from "./variable-declerations/variable-declerations/variable-declerations.component";
import { PlunkrTableRowNavigationComponent } from "./plunkr-table-row-navigation/plunkr-table-row-navigation.component";
import { NavBarTestComponent } from "./nav-bar-test/nav-bar-test.component";
import { AngularMaterialTreeComponent } from "./angular-material-tree/angular-material-tree.component";
import { AngularMaterialTreeStackblitzComponent } from "./angular-material-tree-stackblitz/angular-material-tree-stackblitz.component";
import { ChillTheLionComponent } from "./chill-the-lion/chill-the-lion.component";
import { DateTestComponent } from "./date-test/date-test.component";
import { JqueryTestComponent } from "./jquery-test/jquery-test.component";
import { HeaderComponent } from "./header/header.component";
import { ChildMenuItemsComponent } from "./child-menu-items/child-menu-items.component";
import { RouterModule } from "@angular/router";
import { paginations } from "./global_Paginator";
import { MonthPickerComponent } from "./month-picker/month-picker.component";
import { ChilltheLionComponent } from './chillthe-lion/chillthe-lion.component';

@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatMenuModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    CdkTreeModule
  ],
  declarations: [ChilltheLionComponent]
})
export class DemoMaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    TableTestComponent,
    ColorpickerTestComponent,
    MatMenuTryComponent,
    TablePaginationComponent,
    ProgrammaticKeyPressComponent,
    FileUploadComponentComponent,
    SortingNKComponent,
    ExcelFomatComponent,
    TableGroupingComponent,
    MatTableColumnFreezingComponent,
    VariableDeclerationsComponent,
    PlunkrTableRowNavigationComponent,
    NavBarTestComponent,
    ChillTheLionComponent,
    AngularMaterialTreeComponent,
    AngularMaterialTreeStackblitzComponent,
    DateTestComponent,
    JqueryTestComponent,
    HeaderComponent,
    ChildMenuItemsComponent,
    MonthPickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    HttpModule,
    FileUploadModule,
    CommonModule,
    RouterModule
  ],
  providers: [paginations],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
