import { Component, NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { KnobModule } from '../index';

@Component({
    selector: 'my-app',
    styles: [`
    h3{
        color:red;
    }
    .container{
        width: 144px;
        overflow: hidden;
        border: 7px solid #FAFAFA;
        padding: 20px;
        box-shadow: 0px 0px 4px rgba(0,0,0,0.5);
        background: #272727;
        float:left;
        margin:40px;
    }
    .container.degree{
        background: #F0F0F0;
        width: 350px;
    }
    .container.freq{
        background: #F0F0F0;
        width: 248px;
    }
    .container.freq2{
        background: #e8ff98;
        width: 148px;
    }
    .container.cm{
        background: #444444;
    }
    .info.bpm{
        font-size: 2em;
        border: 1px solid #555555;
        width: 141px;
        margin-top: 22px;
        box-shadow: inset 0px 0px 11px rgba(0,0,0,1);
        background: #c3dac9;
        text-align: center;
        font-family: monospace;
        border-radius: 7px;
        color: #333333;
    }
    .info.cm{
        color: #AAAAAA;
        font-family: monospace;
        text-align: center;
        margin-top: 7px;
        font-weight: bold;
    }
    .info.degree{
        color: #888888;
        font-family: monospace;
        text-align: center;
        margin-top: 7px;
        font-size: 20px;
    }
    .info.freq{
        font-family: monospace;
        text-align: center;
        font-weight: bold;
        font-size: 36px;
        text-shadow: 0px 0px 2px rgba(0,0,0,0.5);
    }
    .info.freq2{
        font-family: monospace;
        text-align: center;
        font-weight: bold;
        font-size: 16px;
        text-shadow: 0px 0px 2px rgba(0,0,0,0.5);
    }
    knob{
        background-size:contain;
        margin-left: 20px;
        width:100px;
        height:100px;
        display:block;
    }
    knob.skin1{
        background:url('skins/skin1_back.svg');
       background-size: contain;    
    }
    knob.skin1 /deep/ .knob{
        background:url('skins/skin1_front.svg');
        background-size: contain;    
    }
    knob.skin2{
        background:url('skins/skin2_back.svg');
        background-size: contain;    
    }
    knob.skin2 /deep/ .knob{
        background:url('skins/skin2_front.svg');
        background-size: contain;    
    }
    knob.skin3{
        background:url('skins/skin3_back.svg');
        background-size: contain;    
        width:300px;
        height:300px;
    }
    knob.skin3 /deep/ .knob{
        background:url('skins/skin3_front.svg');
        background-size: contain;    
        width:300px;
        height:300px;
    }
    knob.skin4{
        background:url('skins/skin4_back.svg');
        background-size: contain;    
        width:200px;
        height:200px;
    }
    knob.skin4 /deep/ .knob{
        background:url('skins/skin4_front.svg');
        background-size: contain;    
        width:200px;
        height:200px;
    }
    knob.skin5{
        background:url('skins/skin4_back.svg');
        background-size: contain;    
        width:100px;
        height:100px;
    }
    knob.skin5 /deep/ .knob{
        background:url('skins/skin5_front.svg');
        background-size: contain;    
        width:100px;
        height:100px;
    }
        `],
    template: `
  <h3>Angular 2 Knob Component</h3>
    <div class="container">
        <knob class="skin1" #myknob1 [min]="10" [max]="200" [value]="80" [startDegree]="200"  [endDegree]="120"></knob>
        <div class="info bpm">{{myknob1.meterValue}} bpm</div>
    </div>
    <div class="container cm">
        <knob class="skin2" #myknob2 [min]="0" [max]="500" [value]="30" [startDegree]="0"  [endDegree]="360"></knob>
        <div class="info cm">{{myknob2.meterValue}} cm</div>
    </div>
    <div class="container degree">
        <knob class="skin3" #myknob3 [min]="0" [max]="100" [value]="45" [startDegree]="0"  [endDegree]="360"></knob>
        <div class="info degree">{{myknob3.meterValue}} º</div>
    </div>
    <div class="container freq">
        <knob class="skin4" #myknob4 [min]="-6" [max]="6" [value]="3" [startDegree]="228"  [endDegree]="130"></knob>
        <div class="info freq">{{myknob4.meterValue}} freq</div>
    </div>
    <div class="container freq2">
        <knob class="skin5" #myknob5 [min]="-6" [max]="6" [value]="-6" [startDegree]="228"  [endDegree]="130"></knob>
        <div class="info freq2">{{myknob5.meterValue}} freq</div>
    </div>
      `,
})
export class AppComponent {

}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        KnobModule,
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
