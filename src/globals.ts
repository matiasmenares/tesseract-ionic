import {Injectable} from '@angular/core';
import * as Tesseract from 'tesseract.js';

@Injectable()
export class Globals {
    static tesseract = Tesseract.create({
        corePath: 'https://cdn.jsdelivr.net/gh/naptha/tesseract.js-core@0.1.0/index.js',
        langPath: 'https://tessdata.projectnaptha.com/3.02/',
        workerPath: 'https://cdn.jsdelivr.net/gh/naptha/tesseract.js@1.0.14/dist/worker.js'
    });
}
