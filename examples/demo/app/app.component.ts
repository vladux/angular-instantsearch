import { Component } from "@angular/core";
import { NgISInstance } from "angular-instantsearch";

@Component({
  selector: "ngis-app",
  template: `
    <ngis-instantsearch [config]="config">
      <h1>Angular InstantSearch demo</h1>
      <ngis-hits-per-page-selector [items]="items"></ngis-hits-per-page-selector>
      <ngis-search-box></ngis-search-box>
      <ngis-clear-all></ngis-clear-all>
      <ngis-hits></ngis-hits>
      <ngis-pagination></ngis-pagination>
      <ngis-menu
        attributeName="categories"
        limit="{{5}}"
        showMoreLimit="{{10}}"
      ></ngis-menu>
      <ngis-refinement-list attributeName="brand" limit="10"></ngis-refinement-list>
    </ngis-instantsearch>
  `
})
export class AppComponent {
  public config = {
    apiKey: "6be0576ff61c053d5f9a3225e2a90f76",
    appId: "latency",
    indexName: "instant_search",
    urlSync: true
  };

  public items = [
    { value: 10, label: "10 hits per page", default: true },
    { value: 20, label: "20 hits per page" },
    { value: 30, label: "30 hits per page" }
  ];
}
