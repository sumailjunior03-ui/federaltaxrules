/**
 * network.js — Related Tools Network
 * FederalTaxRules.com
 * Single source of truth for the Related Tools cluster.
 * Renders live tools only into the footer.
 * This site is NOT listed here (no self-referencing).
 */

(function () {
  "use strict";

  var NETWORK_TOOLS = [
    {
      name: "Take Home Salary Calculator",
      url: "https://takehomesalarycalc.com",
      description: "Estimate your net pay after federal and state taxes.",
      live: true
    },
    {
      name: "After Tax Salary Calculator",
      url: "https://aftertaxsalarycalc.com",
      description: "See your after-tax income based on gross salary inputs.",
      live: true
    },
    {
      name: "1099 vs W-2 Calculator",
      url: "https://1099vsw2calc.com",
      description: "Compare contractor and employee compensation after taxes.",
      live: true
    },
    {
      name: "Quarterly Tax Calculator",
      url: "https://quarterlytaxcalc.com",
      description: "Estimate federal estimated quarterly tax payment amounts.",
      live: true
    },
    {
      name: "Bonus Tax Calculator",
      url: "https://bonustaxcalc.com",
      description: "Estimate federal withholding on bonus and supplemental wages.",
      live: true
    },
    {
      name: "Total Compensation Calculator",
      url: "https://totalcompcalc.com",
      description: "Calculate the full value of a compensation package.",
      live: true
    }
  ];

  function renderRelatedTools() {
    var container = document.getElementById("footer-related-tools-list");
    if (!container) return;

    var liveTools = NETWORK_TOOLS.filter(function (t) { return t.live === true; });

    if (liveTools.length === 0) {
      container.innerHTML = "<li><span style='color:rgba(255,255,255,0.35)'>No tools available</span></li>";
      return;
    }

    var html = "";
    liveTools.forEach(function (tool) {
      html += "<li><a href=\"" + tool.url + "\" target=\"_blank\" rel=\"noopener noreferrer\">" + tool.name + "</a></li>";
    });

    container.innerHTML = html;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderRelatedTools);
  } else {
    renderRelatedTools();
  }

})();
