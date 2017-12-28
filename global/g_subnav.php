<?php
/* Vars */

    $glossary_path = '/tools/glossary/';
    $faqs_path = '/tools/faqs/';

    $locale = isset($locale) ? $locale : "" ;
    $tab = isset($_GET["tab"]) ? htmlspecialchars($_GET["tab"]) : "" ;
    $vst = isset($_GET["vst"]) ? htmlspecialchars($_GET["vst"]) : "" ;


/* Tab controls */
/* /global/g_subnav.php?vst=ng&tab=d */

    switch ($tab) {
        case 'd':
            $locale = "data";
            break;
        case 'o':
            $locale = "overview";
            break;
        case 'a':
            $locale = "ap";
            break;
        default:
            break;
    }


    /* Petroleum */
    if ($vst === 'pet') {
      include("petroleum/includes/subnav_petroleum.inc");
    }
    /* Natural Gas */
    if ($vst === 'ng') {
      include("naturalgas/includes/subnav_naturalgas.inc");
    }
    /* Coal */
    if ($vst === 'coal') {
      include("coal/includes/subnav_coal.inc");
    }
    /* Electricity */
    if ($vst === 'elec') {
      include("electricity/includes/subnav_electricity.inc");
    }
    /* Consumption & Efficiency */
    if ($vst === 'ce') {
      include("consumption/includes/subnav_consumption.inc");
    }
    /* RECs */
    if ($vst === 'recs') {
      include("consumption/includes/subnav_consumption_recs.inc");
    }
    /* Renewable */
    if ($vst === 'renew') {
      include("renewable/includes/subnav_renewable.inc");
    }
    /* Nuclear */
    if ($vst === 'nuclear') {
      include("nuclear/includes/subnav_nuclear.inc");
    }
    /* Total Energy */
    if ($vst === 'te') {
      include("totalenergy/includes/subnav_allsources.inc");
    }
    /* Analysis & Projections */
    if ($vst === 'ap') {
      include("analysis/includes/subnav_analysis.inc");
    }
    /* Markets & Finance */
    if ($vst === 'mf') {
      include("finance/includes/subnav_finance.inc");
    }
    /* Environment */
    if ($vst === 'envir') {
      include("environment/includes/subnav_environment.inc");
    }
    /* States */
    if ($vst === 'states') {
      include("state/includes/subnav_states.inc");
    }
    /* Countries */
    if ($vst === 'country') {
      include("countries/includes/subnav_countries.inc");
    }
?>