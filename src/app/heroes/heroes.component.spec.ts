import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component"

describe('HeroesComponent',()=>{
    let component: HeroesComponent;
    let HEROES;
    let mockHeroService;

    beforeEach(()=>{
        HEROES = [
            {id:1,name:'Spider Man', strength:8},
            {id:2,name:'Wolverin', strength:20},
            {id:3,name:'Super Man', strength:99},
        ]

        mockHeroService = jasmine.createSpyObj(['getHeroes','addHero','deleteHero']);

        component = new HeroesComponent(mockHeroService);
    })

    describe('delete',()=>{
        it('should remove hero from list',()=>{
            mockHeroService.deleteHero.and.returnValue(of(true))
            component.heroes = HEROES;

            component.delete(HEROES[2]);

            expect(component.heroes.length).toBe(2);
        })

        xit('should call delteHero method',()=>{
            mockHeroService.deleteHero.and.returnValue(of(true))
            component.heroes = HEROES;

            component.delete(HEROES[2]);

            expect(mockHeroService.deleteHero).toHaveBeenCalled();
        })        
    })
})