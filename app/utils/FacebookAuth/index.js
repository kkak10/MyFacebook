import { FACEBOOK_APP_ID } from 'constants.js';

export default class FacebookAuth {
  static FacebookLoginStatus = {
    CONNECTED: "connected",
    NOT_AUTHORIZED: "not_authorized",
    UNKNOWN: "unknown"
  };

  static init() {
    this.addScriptLoadEvent();
    this.loadAsyncScript();
  }

  static login() {
    const loginPromise = new Promise((resolve) => {
      window.FB.login((res) => {
        resolve(res)
      });
    });

    loginPromise.then(this.redirectByStatus.bind(this));
  }

  static addScriptLoadEvent() {
    window.fbAsyncInit = _ => {
      window.FB.init({
        appId: FACEBOOK_APP_ID,
        cookie: true,
        version: 'v2.3'
      });

      this.redirectByStatus();
    };
  }

  static loadAsyncScript() {
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if(d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  /**
   * Facebook Login 상태를
   * @returns {promise}
   */
  static getLoginStatus() {
    return new Promise(function(resolve) {
      FB.getLoginStatus(function(res) {
        resolve(res);
      })
    });
  }

  /**
   * 로그인 상태에 따라서 Redirect를 해주는 메서드
   */
  static redirectByStatus() {
    this.getLoginStatus().then((res) => {
      const status = res.status;
      console.log(status);

      if(status === this.FacebookLoginStatus.CONNECTED) {
        console.log("go to timeline Page");
      } else {
        // TODO: go to login page
        console.log("go to login page");
      }
    });
  };
}