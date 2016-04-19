export class Config {

    /**
     * Config options for site
     *
     * @type {{mame: string, description: string, version: string, devMode: boolean, liveAPIUrl: string, devAPIUrl: string}}
     */
    public static properties : any = {
        mame: 'Follically Feral Front End',
        description: 'Angular 2 management frontend for Follically Feral website.',
        version: '0.0.2',
        devMode: true,
        liveAPIUrl: 'https://api.follicallyferal.co.uk/api/',
        devAPIUrl: 'https://christopher.local.loc/follicalyferal/api/public/index.php/api/'
    };

}