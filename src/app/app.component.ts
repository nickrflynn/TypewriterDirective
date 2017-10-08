import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: 
        `<h1 typewriter [toType]="codeNames" startDelay="1000" delay="2500" includePipe="true" fastDelete="true"></h1>`
  ,
    styles: []
})
export class AppComponent {
    codeNames = [
        'interdimensional-cable',
        'toffee-salinization',
        'phenomenal-footnote',
        'scriptalicious-bootstrapping',
        'llamacorn-lovehug',
        'princely-quest',
        'promise-rectification',
        'asynchronous-synchronization',
        'rainbow-tsunami',
        'pathological-kerning',
        'overlyexplosive-poprocks',
        'cookie-liberation',
        'rocket-zambonimation',
        'permanent-internship',
        'accidental-haiku',
        'emotional-waffles',
        'emoji-clairvoyance',
        'monochromatic-rainbow',
        'debilitating-awesomeness',
        'tesseract-giftwrapping',
        'bubblewrap-cape',
        'jiggling-armfat',
        'vegetable-reanimation',
        'lethal-stutter',
        'radioactive-gargle',
        'badger-enumeration',
        'finnish-disembarkation',
        'instantaneous-browserification',
        'meticulous-riffleshuffle',
        'pylon-requirement',
    ]
}
