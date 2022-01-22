import { LightningElement, wire } from 'lwc';
import getFilteredSpecies from "@salesforce/apex/SpeciesService.getFilteredSpecies";

export default class SpeciesList extends LightningElement {
    searchText = "";

    @wire(getFilteredSpecies, { searchText: "$searchText" })
    species;
  
    handleInputChange(event) {
      const searchText = event.target.value;
      if (searchText.length >= 3 || searchText === "") {
        this.searchText = searchText;
      }
    }
}
