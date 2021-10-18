'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">SupperAppIonic documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-0ddfbc46ad1e33097719f11242b1d4be"' : 'data-target="#xs-components-links-module-AppModule-0ddfbc46ad1e33097719f11242b1d4be"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-0ddfbc46ad1e33097719f11242b1d4be"' :
                                            'id="xs-components-links-module-AppModule-0ddfbc46ad1e33097719f11242b1d4be"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-0ddfbc46ad1e33097719f11242b1d4be"' : 'data-target="#xs-injectables-links-module-AppModule-0ddfbc46ad1e33097719f11242b1d4be"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-0ddfbc46ad1e33097719f11242b1d4be"' :
                                        'id="xs-injectables-links-module-AppModule-0ddfbc46ad1e33097719f11242b1d4be"' }>
                                        <li class="link">
                                            <a href="injectables/DynamicTempleteService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DynamicTempleteService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BasicModeModule.html" data-type="entity-link" >BasicModeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BasicModeModule-e2db42146de6d98116c93de22db85e82"' : 'data-target="#xs-components-links-module-BasicModeModule-e2db42146de6d98116c93de22db85e82"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BasicModeModule-e2db42146de6d98116c93de22db85e82"' :
                                            'id="xs-components-links-module-BasicModeModule-e2db42146de6d98116c93de22db85e82"' }>
                                            <li class="link">
                                                <a href="components/BasicModeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BasicModeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BasicModeRoutingModule.html" data-type="entity-link" >BasicModeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardPageModule.html" data-type="entity-link" >DashboardPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardPageModule-1f5ff66cb283aa73ace162fb6f6e73e9"' : 'data-target="#xs-components-links-module-DashboardPageModule-1f5ff66cb283aa73ace162fb6f6e73e9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardPageModule-1f5ff66cb283aa73ace162fb6f6e73e9"' :
                                            'id="xs-components-links-module-DashboardPageModule-1f5ff66cb283aa73ace162fb6f6e73e9"' }>
                                            <li class="link">
                                                <a href="components/DashboardPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MfHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MfHeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardPageModule.html" data-type="entity-link" >DashboardPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardPageModule-1f5ff66cb283aa73ace162fb6f6e73e9-1"' : 'data-target="#xs-components-links-module-DashboardPageModule-1f5ff66cb283aa73ace162fb6f6e73e9-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardPageModule-1f5ff66cb283aa73ace162fb6f6e73e9-1"' :
                                            'id="xs-components-links-module-DashboardPageModule-1f5ff66cb283aa73ace162fb6f6e73e9-1"' }>
                                            <li class="link">
                                                <a href="components/DashboardPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MfHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MfHeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardPageRoutingModule.html" data-type="entity-link" >DashboardPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardPageRoutingModule.html" data-type="entity-link" >DashboardPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EducationComponentModule.html" data-type="entity-link" >EducationComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EducationComponentModule-6603bb944cc8b6731c3ac4d5b2dac3cd"' : 'data-target="#xs-components-links-module-EducationComponentModule-6603bb944cc8b6731c3ac4d5b2dac3cd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EducationComponentModule-6603bb944cc8b6731c3ac4d5b2dac3cd"' :
                                            'id="xs-components-links-module-EducationComponentModule-6603bb944cc8b6731c3ac4d5b2dac3cd"' }>
                                            <li class="link">
                                                <a href="components/EducationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EducationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EducationComponentRoutingModule.html" data-type="entity-link" >EducationComponentRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HealthComponentModule.html" data-type="entity-link" >HealthComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HealthComponentModule-3adcd8753ce9132cfb612cc256793ca8"' : 'data-target="#xs-components-links-module-HealthComponentModule-3adcd8753ce9132cfb612cc256793ca8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HealthComponentModule-3adcd8753ce9132cfb612cc256793ca8"' :
                                            'id="xs-components-links-module-HealthComponentModule-3adcd8753ce9132cfb612cc256793ca8"' }>
                                            <li class="link">
                                                <a href="components/HealthComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HealthComponentRoutingModule.html" data-type="entity-link" >HealthComponentRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-d84865d8ebad41fb3c81764d7dcd91c9"' : 'data-target="#xs-components-links-module-HomePageModule-d84865d8ebad41fb3c81764d7dcd91c9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-d84865d8ebad41fb3c81764d7dcd91c9"' :
                                            'id="xs-components-links-module-HomePageModule-d84865d8ebad41fb3c81764d7dcd91c9"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-4c467177f8463eb41f19e0a7ecff3625-1"' : 'data-target="#xs-components-links-module-HomePageModule-4c467177f8463eb41f19e0a7ecff3625-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-4c467177f8463eb41f19e0a7ecff3625-1"' :
                                            'id="xs-components-links-module-HomePageModule-4c467177f8463eb41f19e0a7ecff3625-1"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MfHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MfHeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-4c467177f8463eb41f19e0a7ecff3625-2"' : 'data-target="#xs-components-links-module-HomePageModule-4c467177f8463eb41f19e0a7ecff3625-2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-4c467177f8463eb41f19e0a7ecff3625-2"' :
                                            'id="xs-components-links-module-HomePageModule-4c467177f8463eb41f19e0a7ecff3625-2"' }>
                                            <li class="link">
                                                <a href="components/HomePage-1.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MfHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MfHeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link" >HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link" >HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link" >HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InvestPageModule.html" data-type="entity-link" >InvestPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InvestPageModule-fd97586d3c7c66e6edf3db9ed3f058bb"' : 'data-target="#xs-components-links-module-InvestPageModule-fd97586d3c7c66e6edf3db9ed3f058bb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InvestPageModule-fd97586d3c7c66e6edf3db9ed3f058bb"' :
                                            'id="xs-components-links-module-InvestPageModule-fd97586d3c7c66e6edf3db9ed3f058bb"' }>
                                            <li class="link">
                                                <a href="components/InvestPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InvestPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MfHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MfHeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InvestPageModule.html" data-type="entity-link" >InvestPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InvestPageModule-fd97586d3c7c66e6edf3db9ed3f058bb-1"' : 'data-target="#xs-components-links-module-InvestPageModule-fd97586d3c7c66e6edf3db9ed3f058bb-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InvestPageModule-fd97586d3c7c66e6edf3db9ed3f058bb-1"' :
                                            'id="xs-components-links-module-InvestPageModule-fd97586d3c7c66e6edf3db9ed3f058bb-1"' }>
                                            <li class="link">
                                                <a href="components/InvestPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InvestPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MfHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MfHeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InvestPageRoutingModule.html" data-type="entity-link" >InvestPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InvestPageRoutingModule.html" data-type="entity-link" >InvestPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LifestyleComponentModule.html" data-type="entity-link" >LifestyleComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LifestyleComponentModule-21eea2ac5019372db021cfd646dc2c70"' : 'data-target="#xs-components-links-module-LifestyleComponentModule-21eea2ac5019372db021cfd646dc2c70"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LifestyleComponentModule-21eea2ac5019372db021cfd646dc2c70"' :
                                            'id="xs-components-links-module-LifestyleComponentModule-21eea2ac5019372db021cfd646dc2c70"' }>
                                            <li class="link">
                                                <a href="components/LifestyleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LifestyleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LifestyleComponentRoutingModule.html" data-type="entity-link" >LifestyleComponentRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginWithPhonePageModule.html" data-type="entity-link" >LoginWithPhonePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginWithPhonePageModule-a3c51f5156634a6e6c7c1dc66396ab01"' : 'data-target="#xs-components-links-module-LoginWithPhonePageModule-a3c51f5156634a6e6c7c1dc66396ab01"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginWithPhonePageModule-a3c51f5156634a6e6c7c1dc66396ab01"' :
                                            'id="xs-components-links-module-LoginWithPhonePageModule-a3c51f5156634a6e6c7c1dc66396ab01"' }>
                                            <li class="link">
                                                <a href="components/LoginWithPhonePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginWithPhonePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginWithPhonePageRoutingModule.html" data-type="entity-link" >LoginWithPhonePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LumpsumTransactionModule.html" data-type="entity-link" >LumpsumTransactionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LumpsumTransactionModule-a58f521d91b872b351a7acfe23bd712e"' : 'data-target="#xs-components-links-module-LumpsumTransactionModule-a58f521d91b872b351a7acfe23bd712e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LumpsumTransactionModule-a58f521d91b872b351a7acfe23bd712e"' :
                                            'id="xs-components-links-module-LumpsumTransactionModule-a58f521d91b872b351a7acfe23bd712e"' }>
                                            <li class="link">
                                                <a href="components/LumpsumTransactionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LumpsumTransactionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LumpsumTransactionHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LumpsumTransactionHeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LumpsumTransactionRoutingModule.html" data-type="entity-link" >LumpsumTransactionRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MarketingScreenPageModule.html" data-type="entity-link" >MarketingScreenPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MarketingScreenPageModule-d89e34cc8bb4ffc4840fa1903156120b"' : 'data-target="#xs-components-links-module-MarketingScreenPageModule-d89e34cc8bb4ffc4840fa1903156120b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MarketingScreenPageModule-d89e34cc8bb4ffc4840fa1903156120b"' :
                                            'id="xs-components-links-module-MarketingScreenPageModule-d89e34cc8bb4ffc4840fa1903156120b"' }>
                                            <li class="link">
                                                <a href="components/MarketingScreenPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarketingScreenPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MarketingScreenPageRoutingModule.html" data-type="entity-link" >MarketingScreenPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MfFilterModule.html" data-type="entity-link" >MfFilterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MfFilterModule-aec914db53a62529f82ada16b55e1c2e"' : 'data-target="#xs-components-links-module-MfFilterModule-aec914db53a62529f82ada16b55e1c2e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MfFilterModule-aec914db53a62529f82ada16b55e1c2e"' :
                                            'id="xs-components-links-module-MfFilterModule-aec914db53a62529f82ada16b55e1c2e"' }>
                                            <li class="link">
                                                <a href="components/MfFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MfFilterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MfFilterRoutingModule.html" data-type="entity-link" >MfFilterRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MfLandingWithKYCNotTransactionModule.html" data-type="entity-link" >MfLandingWithKYCNotTransactionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MfLandingWithKYCNotTransactionModule-06f107b60640f99e0906ecec2181a13b"' : 'data-target="#xs-components-links-module-MfLandingWithKYCNotTransactionModule-06f107b60640f99e0906ecec2181a13b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MfLandingWithKYCNotTransactionModule-06f107b60640f99e0906ecec2181a13b"' :
                                            'id="xs-components-links-module-MfLandingWithKYCNotTransactionModule-06f107b60640f99e0906ecec2181a13b"' }>
                                            <li class="link">
                                                <a href="components/MfLandingWithKYCNotTransactionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MfLandingWithKYCNotTransactionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MfLandingWithKYCNotTransactionRoutingModule.html" data-type="entity-link" >MfLandingWithKYCNotTransactionRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MfPageDetailsModule.html" data-type="entity-link" >MfPageDetailsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MfPageDetailsModule-f74aedc2259ce748afc7f9a59e201de7"' : 'data-target="#xs-components-links-module-MfPageDetailsModule-f74aedc2259ce748afc7f9a59e201de7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MfPageDetailsModule-f74aedc2259ce748afc7f9a59e201de7"' :
                                            'id="xs-components-links-module-MfPageDetailsModule-f74aedc2259ce748afc7f9a59e201de7"' }>
                                            <li class="link">
                                                <a href="components/MfPageDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MfPageDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MfPageHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MfPageHeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MfPageDetailsRoutingModule.html" data-type="entity-link" >MfPageDetailsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductListModule.html" data-type="entity-link" >ProductListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProductListModule-9745c85b746c7b210919600c7829a012"' : 'data-target="#xs-components-links-module-ProductListModule-9745c85b746c7b210919600c7829a012"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductListModule-9745c85b746c7b210919600c7829a012"' :
                                            'id="xs-components-links-module-ProductListModule-9745c85b746c7b210919600c7829a012"' }>
                                            <li class="link">
                                                <a href="components/ProductListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductListRoutingModule.html" data-type="entity-link" >ProductListRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProfilePageModule.html" data-type="entity-link" >ProfilePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfilePageModule-573dd0c667b2fd250f18fe997bee40f4"' : 'data-target="#xs-components-links-module-ProfilePageModule-573dd0c667b2fd250f18fe997bee40f4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfilePageModule-573dd0c667b2fd250f18fe997bee40f4"' :
                                            'id="xs-components-links-module-ProfilePageModule-573dd0c667b2fd250f18fe997bee40f4"' }>
                                            <li class="link">
                                                <a href="components/MfHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MfHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfilePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfilePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfilePageModule.html" data-type="entity-link" >ProfilePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfilePageModule-573dd0c667b2fd250f18fe997bee40f4-1"' : 'data-target="#xs-components-links-module-ProfilePageModule-573dd0c667b2fd250f18fe997bee40f4-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfilePageModule-573dd0c667b2fd250f18fe997bee40f4-1"' :
                                            'id="xs-components-links-module-ProfilePageModule-573dd0c667b2fd250f18fe997bee40f4-1"' }>
                                            <li class="link">
                                                <a href="components/MfHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MfHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfilePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfilePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfilePageRoutingModule.html" data-type="entity-link" >ProfilePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProfilePageRoutingModule.html" data-type="entity-link" >ProfilePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SignUpPageModule.html" data-type="entity-link" >SignUpPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SignUpPageModule-2bd124174f92560f9e057a4a15bb86d3"' : 'data-target="#xs-components-links-module-SignUpPageModule-2bd124174f92560f9e057a4a15bb86d3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SignUpPageModule-2bd124174f92560f9e057a4a15bb86d3"' :
                                            'id="xs-components-links-module-SignUpPageModule-2bd124174f92560f9e057a4a15bb86d3"' }>
                                            <li class="link">
                                                <a href="components/SignUpPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignUpPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SignUpPageRoutingModule.html" data-type="entity-link" >SignUpPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SplashScreenPageModule.html" data-type="entity-link" >SplashScreenPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SplashScreenPageModule-695fc60676693e5966ffa972bc76dd5c"' : 'data-target="#xs-components-links-module-SplashScreenPageModule-695fc60676693e5966ffa972bc76dd5c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SplashScreenPageModule-695fc60676693e5966ffa972bc76dd5c"' :
                                            'id="xs-components-links-module-SplashScreenPageModule-695fc60676693e5966ffa972bc76dd5c"' }>
                                            <li class="link">
                                                <a href="components/SplashScreenPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SplashScreenPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SplashScreenPageRoutingModule.html" data-type="entity-link" >SplashScreenPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SupperAppLandingPageModule.html" data-type="entity-link" >SupperAppLandingPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SupperAppLandingPageModule-b628b8aa80f1221b5e757e85840f52d6"' : 'data-target="#xs-components-links-module-SupperAppLandingPageModule-b628b8aa80f1221b5e757e85840f52d6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SupperAppLandingPageModule-b628b8aa80f1221b5e757e85840f52d6"' :
                                            'id="xs-components-links-module-SupperAppLandingPageModule-b628b8aa80f1221b5e757e85840f52d6"' }>
                                            <li class="link">
                                                <a href="components/AllWellnessComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AllWellnessComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HealthWellnessComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthWellnessComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SupperAppLandingPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SupperAppLandingPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WealthWellnessComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WealthWellnessComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SupperAppLandingPageRoutingModule.html" data-type="entity-link" >SupperAppLandingPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WatchlistPageModule.html" data-type="entity-link" >WatchlistPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WatchlistPageModule-877f8bcb1a4db7d23edc039df05ec4b8"' : 'data-target="#xs-components-links-module-WatchlistPageModule-877f8bcb1a4db7d23edc039df05ec4b8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WatchlistPageModule-877f8bcb1a4db7d23edc039df05ec4b8"' :
                                            'id="xs-components-links-module-WatchlistPageModule-877f8bcb1a4db7d23edc039df05ec4b8"' }>
                                            <li class="link">
                                                <a href="components/MfHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MfHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WatchlistPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WatchlistPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WatchlistPageModule.html" data-type="entity-link" >WatchlistPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WatchlistPageModule-877f8bcb1a4db7d23edc039df05ec4b8-1"' : 'data-target="#xs-components-links-module-WatchlistPageModule-877f8bcb1a4db7d23edc039df05ec4b8-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WatchlistPageModule-877f8bcb1a4db7d23edc039df05ec4b8-1"' :
                                            'id="xs-components-links-module-WatchlistPageModule-877f8bcb1a4db7d23edc039df05ec4b8-1"' }>
                                            <li class="link">
                                                <a href="components/MfHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MfHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WatchlistPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WatchlistPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WatchlistPageRoutingModule.html" data-type="entity-link" >WatchlistPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WatchlistPageRoutingModule.html" data-type="entity-link" >WatchlistPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WealthComponentModule.html" data-type="entity-link" >WealthComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WealthComponentModule-c728adfe2cf96c02e4dc9f0356e3d5f6"' : 'data-target="#xs-components-links-module-WealthComponentModule-c728adfe2cf96c02e4dc9f0356e3d5f6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WealthComponentModule-c728adfe2cf96c02e4dc9f0356e3d5f6"' :
                                            'id="xs-components-links-module-WealthComponentModule-c728adfe2cf96c02e4dc9f0356e3d5f6"' }>
                                            <li class="link">
                                                <a href="components/WealthComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WealthComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WealthComponentRoutingModule.html" data-type="entity-link" >WealthComponentRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/DashboardPage-1.html" data-type="entity-link" >DashboardPage</a>
                            </li>
                            <li class="link">
                                <a href="components/HomePage-2.html" data-type="entity-link" >HomePage</a>
                            </li>
                            <li class="link">
                                <a href="components/InvestPage-1.html" data-type="entity-link" >InvestPage</a>
                            </li>
                            <li class="link">
                                <a href="components/ProfilePage-1.html" data-type="entity-link" >ProfilePage</a>
                            </li>
                            <li class="link">
                                <a href="components/WatchlistPage-1.html" data-type="entity-link" >WatchlistPage</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link" >AppPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/DynamicTempleteService.html" data-type="entity-link" >DynamicTempleteService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});