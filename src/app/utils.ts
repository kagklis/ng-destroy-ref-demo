import { DestroyRef, assertInInjectionContext, inject } from "@angular/core";
import { Subscription } from "rxjs";

export function destroyScope() {
  assertInInjectionContext(destroyScope);
  const subscriptions = new Subscription();
  inject(DestroyRef).onDestroy(() => {
    console.log('DestroyRef.onDestroy');
    subscriptions.unsubscribe();
  })
  return subscriptions;
}
