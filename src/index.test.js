

import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';


describe('Our first test', () => {
  it('should pass', () => {
    expect('123').to.equal('123');
  });
});

describe('index.html', () => {
  it('should have h1 that says Users', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, function(err, window){
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect("Users").to.equal(h1.innerHTML);
      done();
      window.close();
    });
  })
});
