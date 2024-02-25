var cbCookieName="cookieConsent",bsCookieName="bs",cbCookieBannerStateName="cookieBannerState";const customHash=window.location.hash;var CookieDate,cbExpiration=0,nonEssentialLocalStorageKeys=(isLoggedInUser,isLoggedInUser&&((CookieDate=new Date).setFullYear(CookieDate.getFullYear()+1),cbExpiration=CookieDate.toUTCString()),["tasteCategories","_mpcehash","covidPageViewCount","playlistRated","gifRated","photoRated","search","searches","ISP_INFO_SEND","newTermSearched","recentSearch","currentTimeStamp","watchedVideoStorage"]),essentialLocalStorageKeys=["puTargetURL","loggedInFromJoinUviuCTA","LsAccessSuccess","watchedVideoIds","enableStorage","phLivePlayerQuality","commentsReported","dataProductID","guestWatchToken","trialBottomNotificationHidden","notLoggedIn","savedData","videoOffset","promoBannerPersistant","favoritesRedirect","mgp_player","hornhub_overlay","storage_test","__storage_test__"],cbCookie=document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)"+cbCookieName+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"),cbCookieBannerState=document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)"+cbCookieBannerStateName+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"),linkToPrivacyPolicy="https://www.pornhub.com/information/privacy#cookies",cbTexts={primaryCTA:"Accept all cookies",secondaryCTA:"Accept only essential cookies",thirdCTA:"Customize Cookies",shortBannerText:"Some features may not be available with your selection. For a better browsing experience, you may select"};let shouldLogGTMImpression=!1;var CookieHelper={listCookiesArrayFromString:e=>e.split("; ").map(e=>e.split("=")[0]),deleteCookie:e=>{document.cookie=e+"=0;expires=Thu, 01 Jan 1970 00:00:01 GMT"},deleteNonEssentialCookies:e=>{allowedCookies&&e.filter(e=>!(allowedCookies.includes(e)||e.startsWith("fg_")||e.startsWith("emailConfirmCookie_")||e.startsWith("title_translation_")||e.startsWith("notified_sponsor_")||e.startsWith("playlistShuffle_"))),[].forEach(e=>{"undefined"!=typeof cookieStore&&void 0!==cookieStore.delete&&cookieStore.delete(e),document.cookie=e+"=0;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/"})},deleteNonEssentialsLocalStorageKeys:()=>{"undefined"!=typeof localStorage&&nonEssentialLocalStorageKeys.forEach(e=>{localStorage.removeItem(e)}),"undefined"!=typeof sessionStorage&&nonEssentialLocalStorageKeys.forEach(e=>{sessionStorage.removeItem(e)})},isEssentialLSKey:e=>{var o=e.includes("playlist_shuffle_"),t=e.includes("premiumPromoBanner");return essentialLocalStorageKeys.includes(e)||o||t},isNonEssentialLSKey:e=>nonEssentialLocalStorageKeys.includes(e),isInEssentialList:e=>essentialCookiesList.includes(e),canAdd:e=>0==allowedCookies.length||allowedCookies.includes(e)||e.startsWith("fg_")||e.startsWith("emailConfirmCookie_")||e.startsWith("title_translation_")||e.startsWith("notified_sponsor_")||e.startsWith("playlistShuffle_"),getCurrentConsent:()=>document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)"+cbCookieName+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"),isAllowedCategory:o=>{var e;return!("undefined"!=typeof shouldShowBannerP2&&!shouldShowBannerP2)&&((e=document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)"+cbCookieName+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))==cookieConsentValues.all||Object.values(Object.keys(cookieConsentValues).filter(function(e){return-1!=e.indexOf(o)}).reduce(function(e,o){return e[o]=cookieConsentValues[o],e},{})).includes(Number(e)))}};function showFullCookieBanner(){var n=document.getElementById("cookieBanner"),i=(n&&n.classList.contains("cbShort")&&(n.classList.remove("cbShort"),n.innerHTML=""),n||((e=document.createElement("div")).id="cookieBanner",document.body&&document.body.appendChild(e)),n&&n.classList.add("withOverlay"),document.createElement("div")),e=(i.id="cookieBannerWrapper",document.createElement("div")),o=(e.id="cookieBannerContent","undefined"!=typeof biggerCookieBannerTemplate&&(e.innerHTML=biggerCookieBannerTemplate,shouldShowBannerP2||"undefined"==typeof isPlatformMobile||isPlatformMobile||e.classList.add("cookieBannerV1")),document.createElement("button")),a=(o.classList.add("cbPrimaryCTA","cbButton","gtm-event-cookie-banner"),o.textContent=("undefined"!=typeof Banner_Text&&Banner_Text.primaryCTA?Banner_Text:cbTexts).primaryCTA,o.dataset.event="cookie_banner",o.dataset.label="accept_all",o.addEventListener("click",function(){document.cookie=cbCookieName+"=3; expires="+cbExpiration+";domain="+cbDomainName+";secure;path=/",cookieConsentUserChoice("granted"),"undefined"!=typeof bsId&&(document.cookie=bsCookieName+"="+bsId+"; expires="+new Date(bsExpiry).toUTCString()+"; domain="+cbDomainName+";secure;SameSite=None;path=/"),n.className="",n.innerHTML="",shouldShowBannerP2?addClogCookieBanner(currentDomain,"accept-all",originPart,originUrl):addClogCookieBanner(currentDomain,"consent-modal-accept-all",originPart,originUrl,"button-accept-all"),"undefined"!=typeof isLoggedInUser&&isLoggedInUser&&logUserConsentCookie(3)}),document.createElement("button"));a.classList.add("cbSecondaryCTA","cbButton","gtm-event-cookie-banner"),a.textContent=("undefined"!=typeof Banner_Text&&Banner_Text.secondaryCTA?Banner_Text:cbTexts).secondaryCTA,a.dataset.event="cookie_banner",a.dataset.label="accept_essential",a.addEventListener("click",function(){var e=!1;void 0!==CookieHelper&&"3"===CookieHelper.getCurrentConsent()&&(e=!0),document.cookie=cbCookieName+"=2; expires="+cbExpiration+";domain="+cbDomainName+";secure;path=/",cookieConsentUserChoice("denied"),n.classList.contains("withOverlay")&&n.classList.remove("withOverlay"),i.remove(),showShortCookieBanner(),e&&(clearNonEssentialCookies(),CookieHelper.deleteNonEssentialsLocalStorageKeys(),location.reload()),shouldShowBannerP2?addClogCookieBanner(currentDomain,"accept-essential",originPart,originUrl):addClogCookieBanner(currentDomain,"consent-modal-accept-essential",originPart,originUrl,"button-accept-essential"),"undefined"!=typeof isLoggedInUser&&isLoggedInUser&&logUserConsentCookie(2)});let s=null;function r(e,o,t){let n=document.getElementById("cookieBannerContent");e.classList.add("saveChangesBtn"),o.classList.add("rightAlignBtn"),t.classList.add("rightAlignBtn"),e.textContent=("undefined"!=typeof Banner_Text&&Banner_Text.thirdCTASaveText?Banner_Text:cbTexts).thirdCTASaveText,"undefined"!=typeof customizeCookiesTemplate&&(n&&(n.innerHTML=customizeCookiesTemplate),e=document.querySelector(".backToscrollableContent"))&&e.addEventListener("click",function(){this&&this.classList.contains("backToscrollableContent")&&(s.textContent=("undefined"!=typeof Banner_Text&&Banner_Text.thirdCTA?Banner_Text:cbTexts).thirdCTA,s.classList.remove("saveChangesBtn"),s.dataset.event="cookie_banner",s.dataset.label="customize",s.classList.add("gtm-event-cookie-banner"),o.classList.remove("rightAlignBtn"),t.classList.remove("rightAlignBtn"),"undefined"!=typeof biggerCookieBannerTemplate&&(n.innerHTML=biggerCookieBannerTemplate),addClogCookieBanner(currentDomain,"customize-back",originPart,originUrl))});let i=document.getElementById("functionalCookies"),a=document.getElementById("analyticsCookies"),r=document.getElementById("advertisingCookies");i&&(i.checked=!![3,10,26,42].includes(Number(CookieHelper.getCurrentConsent()))),a&&(a.checked=!![3,18,26,50].includes(Number(CookieHelper.getCurrentConsent()))),r&&(r.checked=!![3,34,42,50].includes(Number(CookieHelper.getCurrentConsent()))),i&&i.addEventListener("change",()=>{var e=i.checked?"functional-cookies-enabled":"functional-cookies-disabled";addClogCookieBanner(currentDomain,e,originPart,originUrl)}),a&&a.addEventListener("change",()=>{var e=a.checked?"analytics-cookies-enabled":"analytics-cookies-disabled";addClogCookieBanner(currentDomain,e,originPart,originUrl)}),r&&r.addEventListener("change",()=>{var e=r.checked?"target-adv-cookies-enabled":"target-adv-cookies-disabled";addClogCookieBanner(currentDomain,e,originPart,originUrl)}),addClogCookieBanner(currentDomain,"customize-cookies",originPart,originUrl)}shouldShowBannerP2&&((s=document.createElement("button")).classList.add("cbThirdCTA","cbButton","gtm-event-cookie-banner"),s.textContent=("undefined"!=typeof Banner_Text&&Banner_Text.thirdCTA?Banner_Text:cbTexts).thirdCTA,s.dataset.event="cookie_banner",s.dataset.label="customize",s.addEventListener("click",function(t){var e=this,t=t?t.target:null;if(t&&t.classList.contains("saveChangesBtn")){t={functional:document.getElementById("functionalCookies"),analytics:document.getElementById("analyticsCookies"),advertising:document.getElementById("advertisingCookies")},t={functional:t.functional.checked?Number(t.functional.value):0,analytics:t.analytics.checked?Number(t.analytics.value):0,advertising:t.advertising.checked?Number(t.advertising.value):0};let e=!1,o=(void 0!==CookieHelper&&"3"===CookieHelper.getCurrentConsent()&&(e=!0),2+t.functional+t.analytics+t.advertising);t.functional&&t.analytics&&t.advertising&&(o=3),document.cookie=cbCookieName+"="+o+"; expires="+cbExpiration+";domain="+cbDomainName+";secure;path=/",t.analytics&&cookieConsentUserChoice("granted"),logGTMEvent(t),2===o?(n.classList.contains("withOverlay")&&n.classList.remove("withOverlay"),i.remove(),showShortCookieBanner(),e&&(clearNonEssentialCookies(),CookieHelper.deleteNonEssentialsLocalStorageKeys(),location.reload())):(t=document.getElementById("cookieBanner"))&&(t.className="",t.replaceChildren()),"undefined"!=typeof isLoggedInUser&&isLoggedInUser&&logUserConsentCookie(o),void addClogCookieBanner(currentDomain,"save-cookie-pref",originPart,originUrl)}else e.removeAttribute("data-event"),e.removeAttribute("data-label"),MG_Utils.removeClass(e,"gtm-event-cookie-banner"),r(e,o,a)}),i.appendChild(e),i.appendChild(o),i.appendChild(a),s&&i.appendChild(s),n&&n.appendChild(i),addStyling(),n&&n.appendChild(i),document.body?(addStyling(),n&&n.appendChild(i)):window.addEventListener("DOMContentLoaded",e=>{addStyling(),n&&n.appendChild(i)}),document.addEventListener("click",function(e){e=e?e.target:null;if(e&&MG_Utils.hasClass(e,"showPrivacyPolicy"))showPrivacyPolicy();else if(e&&"cookieBanner"===e.id){let e=document.querySelector(".cbPrimaryCTA"),o=document.querySelector(".cbSecondaryCTA"),t=document.querySelector(".cbThirdCTA ");e&&MG_Utils.addClass(e,"focus"),o&&MG_Utils.addClass(o,"focus"),t&&MG_Utils.addClass(t,"focus"),setTimeout(function(){e&&MG_Utils.removeClass(e,"focus"),o&&MG_Utils.removeClass(o,"focus"),t&&MG_Utils.removeClass(t,"focus")},100)}}),""===CookieHelper.getCurrentConsent()&&(document.cookie=cbCookieName+"=1; expires="+cbExpiration+"; domain="+cbDomainName+"; secure;path=/"),document.cookie=cbCookieBannerStateName+"=0;expires=Thu, 01 Jan 1970 00:00:01 GMT",clearNonEssentialCookies(),CookieHelper.deleteNonEssentialsLocalStorageKeys(),setTimeout(()=>{"#cookie-banner-expand"===customHash&&n&&r(s,o,a)},0))}function showPrivacyPolicy(){var e=document.querySelector(".scrollableBannerContent"),o=document.getElementById("privacyPolicyContent");e&&(e.style.height=e.clientHeight+"px",MG_Utils.addClass(e,"scrollEnabled")),o&&(MG_Utils.removeClass(o,"displayNone"),o.scrollIntoView({behavior:"smooth"}))}function showShortCookieBanner(){var o=document.getElementById("cookieBanner"),t=(o&&o.classList.add("cbShort"),document.createElement("p")),e=(t.innerHTML=("undefined"!=typeof Banner_Text&&Banner_Text.shortBannerText?Banner_Text:cbTexts).shortBannerText,document.createElement("span")),n=("undefined"!=typeof Banner_Text&&Banner_Text.primaryCTA?Banner_Text:cbTexts).primaryCTA,i="undefined"!=typeof isPlatformMobile&&isPlatformMobile,a=(e.classList.add("cbPrimaryCTA","cbSpan","gtm-event-cookie-banner"),i&&e.classList.add("cbPrimaryCTA","mobileLink"),e.textContent=" '"+n+"' ",e.dataset.event="cookie_banner",e.dataset.label="essential_accept_all",e.addEventListener("click",function(){document.cookie=cbCookieName+"=3; expires="+cbExpiration+"; domain="+cbDomainName+";secure;path=/",document.cookie=cbCookieBannerStateName+"=0;expires=Thu, 01 Jan 1970 00:00:01 GMT","undefined"!=typeof bsId&&(document.cookie=bsCookieName+"="+bsId+"; expires="+new Date(bsExpiry).toUTCString()+"; domain="+cbDomainName+";secure;SameSite=None;path=/"),cookieConsentUserChoice("granted"),o.className="",o.replaceChildren(),shouldShowBannerP2?addClogCookieBanner(currentDomain,"accept-all",originPart,originUrl):addClogCookieBanner(currentDomain,"consent-modal-accept-all",originPart,originUrl,"button-accept-all"),"undefined"!=typeof isLoggedInUser&&isLoggedInUser&&logUserConsentCookie(3)}),document.createElement("button"));a.classList.add("cbCloseButton","ph-icon-cross"),a.setAttribute("title","close"),a.addEventListener("click",function(){addClogCookieBanner(currentDomain,"consent-modal-close",originPart,originUrl,"button-close"),document.cookie=cbCookieBannerStateName+"=1; expires="+cbExpiration+"; domain="+cbDomainName+";secure;path=/",cookieConsentUserChoice("denied"),o.className="",o.replaceChildren()}),t.appendChild(e),document.body?(addStyling(),o&&o.appendChild(t),o&&o.appendChild(a)):window.addEventListener("DOMContentLoaded",e=>{addStyling(),o&&o.appendChild(t),o&&o.appendChild(a)}),"undefined"!=typeof isPremiumDomainBanner&&isPremiumDomainBanner&&"undefined"!=typeof isPlatformMobile&&isPlatformMobile&&adjustShortBannerPosition(),clearNonEssentialCookies(),CookieHelper.deleteNonEssentialsLocalStorageKeys()}function adjustShortBannerPosition(){let o=0,t=document.getElementById("cookieBanner");"undefined"!=typeof MG_Utils&&document.addEventListener("scroll",MG_Utils.debounce(function(){var e=window.pageYOffset||document.documentElement.scrollTop;e>o?t&&(t.style.bottom="0"):t&&(t.style.bottom="70px"),o=e<=0?0:e},!1))}function logGTMEvent(e){let o="";e&&(o=e.analytics&&e.advertising&&e.functional?"customize_func_an_ad":e.analytics&&e.advertising?"customize_an_ad":e.analytics&&e.functional?"customize_func_an":e.advertising&&e.functional?"customize_func_ad":e.analytics?"customize_an":e.advertising?"customize_ad":e.functional?"customize_func":"customize_none",window.dataLayer.push({event:"cookie_banner",event_label:o}))}function logUserConsentCookie(e){"undefined"!=typeof MG_Utils&&"undefined"!=typeof logCookieConsentUrl&&"undefined"!=typeof token&&MG_Utils.ajaxCall({url:logCookieConsentUrl,type:"GET",data:{token:token,cookie_selection:e,site_id:1}})}function cookieConsentUserChoice(e="denied"){return"undefined"!=typeof gtag&&gtag("consent","update",{ad_storage:e,analytics_storage:e}),e}function addClogCookieBanner(e,o,t,n,i){var a=i?"&origin_item_id="+i:"",r=1<n.length?"&origin_url="+encodeURIComponent(n):"",s=1<n.length?"&origin="+t:"",c=setInterval(function(){"undefined"!=typeof MG_Utils&&(MG_Utils.ajaxCall({url:e+"/_i?type=event&event="+o+s+r+a,type:"POST"}),clearInterval(c))},200)}function addStyling(){var o;document.getElementById("cookieBannerStyle")||((o=document.createElement("style")).id="cookieBannerStyle",o.innerHTML=`
        #cookieBanner.cbShort {
            background-color: rgba(15, 15, 15, 0.95);
            border-radius: 5px;
            padding: 1em;
            width: 90%;
            position: fixed;
            bottom: 0;
            margin: 5px auto;
            color: #c6c6c6;
            z-index: 100;
            text-align: center;
            left: 50%;
            transform: translate(-50%, 0);
            font-size: 14px;
        }
        #cookieBanner.withOverlay {
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(21, 21, 21, 0.5);
            z-index: 200;
        }
        #cookieBannerWrapper {
            background-color: rgba(15, 15, 15, 0.95);
            border-radius: 10px 10px 0 0;
            padding: 1.5em;
            width: 100%;
            position: fixed;
            bottom: 0;
            margin: 5px auto 0;
            color: #c6c6c6;
            z-index: 100;
            text-align: center;
            left: 50%;
            transform: translate(-50%, 0);
            font-size: 14px;
            box-sizing: border-box;
        }
        
        #cookieBannerContent {
            width: 770px;
            margin: auto;
        }
        
        #cookieBannerContent.cookieBannerV1 {
            width: 668px;
        }
        
        .scrollableBannerContent {
            margin-bottom: 20px;
        }
        
        .scrollEnabled {
            overflow-y: scroll;
        }
        
        .scrollEnabled::-webkit-scrollbar {
            width: 6px;
        }
         
        .scrollEnabled::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px #222; 
            border-radius: 10px;
        }
         
        .scrollEnabled::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background: #2F2F2F; 
        }
        
        .phLogo {
            width: 106px;
            margin: 0 auto 15px;
        }
        
        #cookieBanner h1,
        #cookieBanner .heading1 {
            font-size: 26px;
            line-height: 32px;
            font-weight: bold;
            color: #fff;
            margin-bottom: 10px;
        }

        #cookieBanner .heading1 {
            background-color: initial;
            line-height: initial;
            padding: 0;
            text-transform: capitalize;
        }
        
        #cookieBanner h2 {
            color: #fff;
            margin-bottom: 15px;
        }
        
        #cookieBanner p, #cookieBanner ul {
            color: #fff;
            font-size: 14px;
            line-height: 20px;
            text-align: left;
        }
        
        #cookieBanner .policyItalic {
            font-style: italic;
        }
        
        #cookieBanner .policyBold {
            font-weight: bold;
        }
        
        #cookieBanner ul li {
            list-style-position: inside;
            list-style-type: disc;
        }
        
        #cookieBanner a {
            color: #FF9000;
            cursor: pointer;
        }
        
        .showPrivacyPolicy {
            font-weight: bold;
            font-size: 16px;
            line-height: 22px;
            text-align: left;
            display: grid;
            grid-template-columns: 1fr auto;
            padding-right: 6px;
        }
        
        .showPrivacyPolicy:hover {
            text-decoration: none;
        }

        span.ph-icon-chevron-down {
            font-size: 12px;
            line-height: 22px;
            pointer-events: none;
        }
        
        #privacyPolicyContent {
            margin-top: 15px;
            text-align: left;
        }
        
        .cbButton {
            margin: 5px;
            min-width: 250px;
            cursor: pointer;
            background-color: black;
            color: white;
            border: 2px solid #FF9000;
            border-radius: 5px;
            padding: 0.72em 1em;
            box-sizing: border-box;
            text-transform: capitalize;
            font-size: 14px;
            font-weight: bold;
        }
        
        .cbButton:hover, 
        .cbButton.focus,
        .cbButton.saveChangesBtn {
            color: black;
            background-color: #FF9000;
        }

        #cookieBanner.cbShort p {
            font-size: 13px;
            margin: 0;
            text-align: center;
            color: #c6c6c6;
        }

        .cbShort .cbSpan {
            cursor: pointer;
            white-space: nowrap;
            text-transform: capitalize;
            margin-left: 4px;
        }

        .cbShort .cbSpan:hover, .cbShort .cbSpan.mobileLink {
            color: #FF9000;
        }
        
        .cbCloseButton {
            position: absolute;
            top: -10px;
            right: -9px;
            color: #969696;
            cursor: pointer;
            border: none;
            font-size: 12px;
            width: 26px;
            height: 26px;
            background: #333;
            border-radius: 13px;
            padding: 0;
        }

        @media screen and (min-width: 401px) and (max-width: 800px) {
            .cbShort cbButton {
                display: block;
                clear: both;
            }
        }
        
        @media screen and (max-width: 800px) {
            #cookieBannerContent {
                width: 100%;
            }
        }

        .customizeCookiesWrapper {
            text-align: left;
        }

        .backToscrollableContent {
            display: flex;
            cursor: pointer;
            color: #FF9000;
            font-weight: bold;
            margin-bottom: 40px;
            align-items: center;
        }

        .backToscrollableContent .ph-icon-chevron-left {
            position: relative;
            margin-right: 10px;
            margin-left: 10px;
            font-size: 0.7em;
            pointer-events: none;
        }

        .customizeMainContent {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            align-items: center;
        }
        
        .customizeMainContent .column {
            width: 100%;
        }

        .customizeMainContent .title {
            font-size: 16px;
            font-weight: bold;
            color: #fff;
        }

        .customizeMainContent p {
            margin-top: 12px;
            margin-bottom: 40px;
            width: 100%;
        }

        .customizeMainContent span {
            color: #fff;
        }

        .customizeToggleSwitch {
            position: relative;
            display: inline-block;
            width: 46px;
            height: 28px;
        }

        .customizeToggleSwitch input { 
            opacity: 0;
            width: 0;
            height: 0;
        }

        .customizeToggleSwitch .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #c6c6c6;
            -webkit-transition: .4s;
            transition: .4s;
        }

        .customizeToggleSwitch .slider:before {
            position: absolute;
            content: "";
            height: 24px;
            width: 24px;
            left: 3px;
            bottom: 2px;
            background-color: #fff;
            -webkit-transition: .4s;
            transition: .4s;
        }

        .customizeToggleSwitch  input:checked + .slider {
            background-color: #FF9000;
        }

        .customizeToggleSwitch input:focus + .slider {
            box-shadow: 0 0 1px #FF9000;
        }

        .customizeToggleSwitch input:checked + .slider:before {
            -webkit-transform: translateX(16px);
            -ms-transform: translateX(16px);
            transform: translateX(16px);
        }

        .customizeToggleSwitch .slider.round {
            border-radius: 34px;
        }

        .customizeToggleSwitch .slider.round:before {
            border-radius: 50%;
        }

        .customizeToggleSwitch span {
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .customizeToggleSwitch span::before,
        .customizeToggleSwitch span::after {
            position: absolute;
            content: '';
            width: 17px;
            height: 2px;
            top: 13px;
            left: 6px;
            background: #C6C6C6;
            -webkit-transition: left .5s;
            transition: left .5s;
        }

        .customizeToggleSwitch span::before {
            transform: rotate(45deg);
        }

        .customizeToggleSwitch span::after {
            transform: rotate(-45deg);
        }

        .customizeToggleSwitch input[type="checkbox"]:checked ~ div span {
            -webkit-transform: translateX(16px);
            -ms-transform: translateX(16px);
            transform: translateX(16px);
        }

        .customizeToggleSwitch input[type="checkbox"]:checked~ div span::before {
            content: "";
            background-color: transparent;
            position: relative;
            top: 4px;
            left: 11px;
            width: 6px;
            height: 15px;
            border-bottom: 2px solid #FF9000;
            border-right: 2px solid #FF9000;
            transform: rotate(45deg);
        }
        
        .customizeToggleSwitch input[type="checkbox"]:checked~ div.mobileBtn span::before {
            width: 7px;
            height: 16px;
        }

        .customizeToggleSwitch input[type="checkbox"]:checked ~ div span::after {
            content: "";
            background-color: transparent;
        }

        .customizeFirstColumn,
        .customizeSecondColumn  {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        @media (any-pointer: coarse) {
            .customizeCookiesContent .phLogo {
                display: none;
            }

            .customizeCookiesContent .backToscrollableContent {
                margin-bottom: 12px;
            }

            .customizeMainContent p {
                margin-top: 12px;
                margin-bottom: 12px;
            }
        }

        @media (any-pointer: coarse) and (orientation: portrait) {
            .cbButton {
                width: 100%;
                margin-left: 0;
                margin-right: 0;
            }
            #cookieBannerContent {
                width: 100%;
            }
        }

        @media (any-pointer: coarse) and (max-width: 900px) and (orientation: landscape) {
            .customizeMainContent {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                width: 100%;
            }

            .customizeMainContent .column {
                display: flex;
                flex-direction: column;
                flex-basis: 100%;
                flex: 1;
                height: 35vh;
            }

            .customizeFirstColumn,
            .customizeSecondColumn {
                width: 100%;
            }

            .customizeFirstColumn {
                border-right: 1px solid #767676;
                padding-right: 8px;
            }

            .customizeSecondColumn  {
                padding-left: 16px;
            }

            .rightAlignBtn,
            .saveChangesBtn {
                display: flex;
                margin-left: auto;
                justify-content: center;
                margin-right: 0;
                width: 48%;
            }

            .customizeCookiesContent .backToscrollableContent {
                position: absolute;
                top: 25px;
            }

            #cookieBanner .heading1:not(.center) {
                position: relative;
                text-align: left;
                left: 90px;
            }
        }
    `,document.head?document.head.appendChild(o):window.addEventListener("DOMContentLoaded",e=>{document.head.appendChild(o)}))}""==cbCookie||"1"==cbCookie||"#cookie-banner"===customHash||"#cookie-banner-expand"===customHash?(showFullCookieBanner(),shouldLogGTMImpression=!0):"2"==cbCookie&&"1"!==cbCookieBannerState&&showShortCookieBanner(),document.addEventListener("DOMContentLoaded",function(){shouldLogGTMImpression&&(window.dataLayer.push({event:"cookie_banner",event_label:"impression"}),shouldLogGTMImpression=!1)}),window.addEventListener("DOMContentLoaded",e=>{var o=document.querySelector(".manageCookiesBtn");o&&o.addEventListener("click",function(){addClogCookieBanner(currentDomain,"consent-modal-open",originPart,originUrl)})});var pollingInterval=1e3;function listenCookieChange(t,e=pollingInterval){if("3"!=cbCookie){let o=document.cookie;setInterval(()=>{var e=document.cookie;if(e!==o)try{t({oldValue:o,newValue:e})}finally{o=e}},e)}}function clearNonEssentialCookies(){CookieHelper.deleteNonEssentialCookies(document.cookie.split("; ").map(e=>e.split("=")[0]))}listenCookieChange(({oldValue:e,newValue:o})=>{o=CookieHelper.listCookiesArrayFromString(o);let t=CookieHelper.listCookiesArrayFromString(e);o.filter(e=>!t.includes(e));CookieHelper.deleteNonEssentialCookies(o)},pollingInterval);