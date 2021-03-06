import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { WaveformComponent } from "../waveform/waveform.component";
import { PlayerService } from "../services/player.service";
import { CommonModule, APP_BASE_HREF } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent, WaveformComponent],
  bootstrap: [AppComponent],
  providers: [PlayerService, { provide: APP_BASE_HREF, useValue: "/" }],
})
export class AppModule {}
