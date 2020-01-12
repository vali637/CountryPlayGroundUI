import { Component, OnInit } from '@angular/core';
import { CountryService } from '../service/country.service';
import { CountryResponse } from '../models/countryResponse.model';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  countryCode ='';
  countryCodeEvent = '';
  countryResp: CountryResponse;
  invalidCountryCode = false;
  errMsg = 'Invalid Country code';

  constructor(private service: CountryService) {}

  ngOnInit() {
    
  }

  

  onSubmitSearch(term: string): void {
    this.service.searchCountryDetails(term).subscribe((resp: CountryResponse)=> {
      this.invalidCountryCode = false;
      this.countryResp = resp; 
      if(resp == null) {
        this.invalidCountryCode = true;
      }
    });
  }

  onKey(event: any) { 
    this.countryCode = event.target.value;
  }


}
