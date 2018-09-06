import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";

import { articlesReducer } from "./reducers/articles.reducer";

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({ articles: articlesReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ]
})
export class AppStateModule {}
