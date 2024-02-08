import React from "react";

export default function Matomo() {
  return (
    <div>
      <img
        referrerPolicy="no-referrer-when-downgrade"
        src="http://matomo.zbyneksvoboda.cz/matomo.php?idsite=8&amp;rec=1"
        className="border-0"
        alt=""
      />
    </div>
  );
}

// "use client";
// import React, { useEffect } from "react";

// export default function Matomo() {
//   useEffect(() => {
//     var _paq = (window._paq = window._paq || []);
//     _paq.push(["trackPageView"]);
//     _paq.push(["enableLinkTracking"]);
//     (function () {
//       var u = "//matomo.zbyneksvoboda.cz/";
//       _paq.push(["setTrackerUrl", u + "matomo.php"]);
//       _paq.push(["setSiteId", "8"]);
//       var d = document,
//         g = d.createElement("script"),
//         s = d.getElementsByTagName("script")[0];
//       g.async = true;
//       g.src = u + "matomo.js";
//       s.parentNode.insertBefore(g, s);
//     })();
//   });
// }
