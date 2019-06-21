import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <link rel='dns-prefetch' href='//code.jquery.com' />
        <link rel='dns-prefetch' href='//s.w.org' />  
        <link rel="alternate" type="application/rss+xml" title="White Lodging &raquo; Home Comments Feed" href="https://www.whitelodging.com/home/feed/" />
        
        <script 
          dangerouslySetInnerHTML={{
              __html: `    var template_url = 'https://www.whitelodging.com/wp-content/themes/white-lodging';
              var pageid = 2;
    
              var MyAjax = {
                  ajaxurl: 'https://www.whitelodging.com/wp-admin/admin-ajax.php'
              }`
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
                    window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/12.0.0-1\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/12.0.0-1\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/www.whitelodging.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=5.2.1"}};
                    !function(a,b,c){function d(a,b){var c=String.fromCharCode;l.clearRect(0,0,k.width,k.height),l.fillText(c.apply(this,a),0,0);var d=k.toDataURL();l.clearRect(0,0,k.width,k.height),l.fillText(c.apply(this,b),0,0);var e=k.toDataURL();return d===e}function e(a){var b;if(!l||!l.fillText)return!1;switch(l.textBaseline="top",l.font="600 32px Arial",a){case"flag":return!(b=d([55356,56826,55356,56819],[55356,56826,8203,55356,56819]))&&(b=d([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]),!b);case"emoji":return b=d([55357,56424,55356,57342,8205,55358,56605,8205,55357,56424,55356,57340],[55357,56424,55356,57342,8203,55358,56605,8203,55357,56424,55356,57340]),!b}return!1}function f(a){var c=b.createElement("script");c.src=a,c.defer=c.type="text/javascript",b.getElementsByTagName("head")[0].appendChild(c)}var g,h,i,j,k=b.createElement("canvas"),l=k.getContext&&k.getContext("2d");for(j=Array("flag","emoji"),c.supports={everything:!0,everythingExceptFlag:!0},i=0;i<j.length;i++)c.supports[j[i]]=e(j[i]),c.supports.everything=c.supports.everything&&c.supports[j[i]],"flag"!==j[i]&&(c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&c.supports[j[i]]);c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&!c.supports.flag,c.DOMReady=!1,c.readyCallback=function(){c.DOMReady=!0},c.supports.everything||(h=function(){c.readyCallback()},b.addEventListener?(b.addEventListener("DOMContentLoaded",h,!1),a.addEventListener("load",h,!1)):(a.attachEvent("onload",h),b.attachEvent("onreadystatechange",function(){"complete"===b.readyState&&c.readyCallback()})),g=c.source||{},g.concatemoji?f(g.concatemoji):g.wpemoji&&g.twemoji&&(f(g.twemoji),f(g.wpemoji)))}(window,document,window._wpemojiSettings);
                `,
          }}
        />     
        
        <link rel='https://api.w.org/' href='https://www.whitelodging.com/wp-json/' />
        <link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://www.whitelodging.com/xmlrpc.php?rsd" />
        <link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://www.whitelodging.com/wp-includes/wlwmanifest.xml" />
        <link rel='shortlink' href='https://www.whitelodging.com/' />
        <link rel="alternate" type="application/json+oembed" href="https://www.whitelodging.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.whitelodging.com%2F" />
        <link rel="alternate" type="text/xml+oembed" href="https://www.whitelodging.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.whitelodging.com%2F&#038;format=xml" />
        <script type='text/javascript' src='https://code.jquery.com/jquery-2.2.4.min.js?ver=2.2.4'></script>

        <script src="https://kit.fontawesome.com/87131fda1b.js"></script>

        {props.headComponents}
      </head>
      {/* <body id="site-body" className="home page-template-default page page-id-2" {...props.bodyAttributes}> */}
      <body id="site-body" {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                  var _wpcf7 = {"recaptcha":{"messages":{"empty":"Please verify that you are not a robot."}},"cached":"1"};
                `,
          }}
        />

        {props.postBodyComponents}               
      </body>      
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
