import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { SearchResultsComponent } from './search-results/search-results';
import { RepositoriesComponent } from './repositories/repositories';
import { FollowingComponent } from './following/following';

@NgModule({
    declarations: [
        SearchResultsComponent,
        RepositoriesComponent,
        FollowingComponent
    ],
    imports: [
        IonicModule
    ],
    exports: [
        SearchResultsComponent,
        RepositoriesComponent,
        FollowingComponent
    ]
}) 
export class ComponentsModule { } 