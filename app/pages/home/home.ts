import {Page, NavController, NavParams, Tab, Tabs} from 'ionic-angular';

@Page({
    templateUrl: 'build/pages/details/details.html'
})
export class HomePage {
    public readme = '';
 
    constructor(private nav: NavController) {
        this.nav.setRoot(HomePage);
        // this.repo = navParams.get('repo');
        
        // this.github.getDetails(this.repo).subscribe(
        //     data => this.readme = data.text(),
        //     err => {
        //         if (err.status == 404) {
        //             this.readme = 'This repo does not have a README. :(';
        //         } else {
        //             console.error(err);
        //         }
        //     },
        //     () => console.log('getDetails completed')
        // );
    }
}