import { StrengthPipe } from "./strength.pipe";

describe('StrenghtPipe', ()=>{
    it('should display weak if stength is 5', ()=>{
        let pipe = new StrengthPipe();
        expect(pipe.transform(5)).toEqual('5 (weak)');
    })

    it('should display strong if stength is 10', ()=>{
        let pipe = new StrengthPipe();
        expect(pipe.transform(10)).toEqual('10 (strong)');
    })

})