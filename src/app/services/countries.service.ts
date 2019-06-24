import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from '../models/country';
import { HttpClient } from '@angular/common/http';
import { Rss } from '../models/rss';
import { COUNTRIES } from '../data/countries';
import { Rate } from '../models/rate';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  rootUrl: string = 'https://api.rss2json.com/v1/api.json?rss_url=';

  countries: Country[] = COUNTRIES;

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return of(this.countries).pipe(
      map(res => {
        res.forEach(c => {
          this.getFeed(c.rss).subscribe(rss => {
            c.rate = this.getRate(rss);
          });
        })
        return res;
      })
    );
  }

  getFeed(rss: string): Observable<Rss> {
    return this.http.get<Rss>(this.rootUrl + rss);
  }

  private getRate(rss: Rss): Rate {
    if (!rss || rss.items.length == 0) {
      return null;
    }

    const rate = new Rate();
    rate.lastUpdated = rss.items[0].pubDate.toLocaleString();
    rate.value = rss.items[0].title.split('=')[0].trim();

    return rate;
  }
}
