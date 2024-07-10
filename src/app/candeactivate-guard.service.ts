import { ActivatedRoute, ActivatedRouteSnapshot, CanDeactivate, RouterState, RouterStateSnapshot } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { Observable } from "rxjs";


export interface IDeactivateComponent{

    canExit:()=>Observable<boolean> | Promise<boolean> | boolean;
}
export class CanDeactivateGuardService implements CanDeactivate<ContactComponent>{
    canDeactivate(component : ContactComponent, currentRoute:ActivatedRouteSnapshot,
        currentState:RouterStateSnapshot,nextState:RouterStateSnapshot)
    {
        return component.canExit();
    }
}