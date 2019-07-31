/* eslint-disable max-len */
/* eslint-disable react/no-danger */
import React from 'react';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `</script>
            <link rel="preload" href="https://fonts.googleapis.com/css?family=Roboto&display=swap" as="style" onLoad="this.onload=null;this.rel='stylesheet'" crossOrigin="anonymous"/>
            <script>`,
            }}
          />
          <script
            dangerouslySetInnerHTML={
              {
                __html: `
              (function(a){a.loadCSS||(a.loadCSS=function(){});var c=loadCSS.relpreload={};c.support=function(){try{var b=a.document.createElement("link").relList.supports("preload")}catch(e){b=!1}return function(){return b}}();c.bindMediaToggle=function(b){function a(){b.media=c}var c=b.media||"all";b.addEventListener?b.addEventListener("load",a):b.attachEvent&&b.attachEvent("onload",a);setTimeout(function(){b.rel="stylesheet";b.media="only x"});setTimeout(a,3E3)};c.poly=function(){if(!c.support())for(var b=a.document.getElementsByTagName("link"),
              e=0;e<b.length;e++){var d=b[e];"preload"!==d.rel||"style"!==d.getAttribute("as")||d.getAttribute("data-loadcss")||(d.setAttribute("data-loadcss",!0),c.bindMediaToggle(d))}};if(!c.support()){c.poly();var f=a.setInterval(c.poly,500);a.addEventListener?a.addEventListener("load",function(){c.poly();a.clearInterval(f)}):a.attachEvent&&a.attachEvent("onload",function(){c.poly();a.clearInterval(f)})}"undefined"!==typeof exports?exports.loadCSS=loadCSS:a.loadCSS=loadCSS})("undefined"!==typeof global?global:
              this);`,
              }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
