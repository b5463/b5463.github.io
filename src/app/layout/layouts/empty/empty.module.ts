import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { amosLoadingBarModule } from '@amos/components/loading-bar';
import { SharedModule } from 'app/shared/shared.module';
import { EmptyLayoutComponent } from 'app/layout/layouts/empty/empty.component';

@NgModule({
    declarations: [EmptyLayoutComponent],
    imports: [RouterModule, amosLoadingBarModule, SharedModule],
    exports: [EmptyLayoutComponent],
})
export class EmptyLayoutModule {}
