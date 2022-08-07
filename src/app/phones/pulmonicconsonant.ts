import { Phone } from './phone';
import { MannerOfArticulation } from './mannerofarticulation';
import { Voicing } from './voicing';
import { PlaceOfArticulation } from './placeofarticulation';

export class PulmonicConsonant extends Phone {

    constructor(symbol: string, voicing: Voicing, place: PlaceOfArticulation, manner: MannerOfArticulation, clickable: boolean) {
      super();
        this.symbol = symbol;
        this.voicing = voicing;
        this.place = place;
        this.manner = manner;
        this.desc = "";
        switch(voicing) {
          case Voicing.Voiceless: this.desc += "voiceless "; break;
          case Voicing.Voiced: this.desc += "voiced "; break;
          default: this.desc += "(unknown voicing) "; console.log("voicing error");
        }
        switch(place) {
          case PlaceOfArticulation.Bilabial: this.desc += "bilabial "; break;
          case PlaceOfArticulation.Alveolar: this.desc += "alveolar "; break;
          case PlaceOfArticulation.Palatal: this.desc += "palatal "; break;
          case PlaceOfArticulation.Velar: this.desc += "velar "; break;
          case PlaceOfArticulation.Uvular: this.desc += "uvular "; break;
          default: this.desc += "(unknown place of articulation) "; console.log("place of articulation error")
        }
        switch(manner) {
          case MannerOfArticulation.Stop: this.desc += "stop (plosive)"; break;
          case MannerOfArticulation.Nasal: this.desc += "nasal"; break;
          case MannerOfArticulation.Trill: this.desc += "trill"; break;
          case MannerOfArticulation.Fricative: this.desc += "fricative"; break;
          case MannerOfArticulation.Approximant: this.desc += "approximant"; break;
          case MannerOfArticulation.LateralApproximant: this.desc += "lateral approximant"; break;
          default: this.desc += "(unknown manner of articulation) "; console.log("manner of articulation error");
        }
        this.clickable = clickable;
    }
    voicing: Voicing;
    place: PlaceOfArticulation;
    manner: MannerOfArticulation;
    static NullConsonant = new PulmonicConsonant("", -1, -1, -1, false)
}