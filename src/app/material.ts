import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';







@NgModule({
    imports: [MatToolbarModule, MatCardModule, MatListModule, MatIconModule, MatBadgeModule],
    exports: [MatToolbarModule, MatCardModule, MatListModule, MatIconModule, MatBadgeModule],
})

export class MaterialModule { }