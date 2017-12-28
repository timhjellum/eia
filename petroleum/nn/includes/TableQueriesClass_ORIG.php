<?phprequire"TableDataClass.php";
class TableQueries extends TableData
{
public $table_array = array( // NOTE contains table specific data used to construct sql and thead
// table 2 data -----------------------------------------------------
"2" => array(
"tablekeys" => array(
"W" => array(
array("PET_SUM_SNDW_DCUS_NUS_W",   "indent0", "U.S."), //PET_SUM
array("PET_SUM_SNDW_DCUS_R48_W",   "indent1", "Lower 48 (crude oil production)"),
array("PET_SUM_SNDW_DCUS_R10_W",   "indent0", "PADD 1"),
array("PET_SUM_SNDW_DCUS_R1X_W",   "indent1", "New England"),
array("PET_SUM_SNDW_DCUS_R1Y_W",   "indent1", "Central Atlantic"),
array("PET_SUM_SNDW_DCUS_R1Z_W",   "indent1", "Lower Atlantic"),
array("PET_SUM_SNDW_DCUS_R20_W",   "indent0", "PADD 2"),
array("PET_SUM_SNDW_DCUS_YCUOK_W", "indent1", "Cushing, Okalhoma (crude oil stocks)"),
array("PET_SUM_SNDW_DCUS_R30_W",   "indent0", "PADD 3"),
array("PET_SUM_SNDW_DCUS_R40_W",   "indent0", "PADD 4"),
array("PET_SUM_SNDW_DCUS_R50_W",   "indent0", "PADD 5"),
array("PET_SUM_SNDW_DCUS_SAK_W",   "indent1", "Alaska (crude oil production)"),
array("PET_SUM_SNDW_DCUS_R4N5_W",  "indent0", "PADD's 4 &amp; 5")
),
"4" => array(
array("PET_SUM_SNDW_DCUS_NUS_4",   "indent0", "U.S."),
array("PET_SUM_SNDW_DCUS_R48_4",   "indent1", "Lower 48 (crude oil production)"),
array("PET_SUM_SNDW_DCUS_R10_4",   "indent0", "PADD 1"),
array("PET_SUM_SNDW_DCUS_R1X_4",   "indent1", "New England"),
array("PET_SUM_SNDW_DCUS_R1Y_4",   "indent1", "Central Atlantic"),
array("PET_SUM_SNDW_DCUS_R1Z_4",   "indent1", "Lower Atlantic"),
array("PET_SUM_SNDW_DCUS_R20_4",   "indent0", "PADD 2"),
array("PET_SUM_SNDW_DCUS_YCUOK_4", "indent1", "Cushing, Okalhoma (crude oil stocks)"),
array("PET_SUM_SNDW_DCUS_R30_4",   "indent0", "PADD 3"),
array("PET_SUM_SNDW_DCUS_R40_4",   "indent0", "PADD 4"),
array("PET_SUM_SNDW_DCUS_R50_4",   "indent0", "PADD 5"),
array("PET_SUM_SNDW_DCUS_SAK_4",   "indent1", "Alaska (crude oil production)"),
array("PET_SUM_SNDW_DCUS_R4N5_4",  "indent0", "PADD's 4 &amp; 5")
)
),
"table_head_data" => array(
array(array("Country", "API key"), array(), array("History"))
)
),
// table 2 area -----------------------------------------------------------
"2area" => array(
"tablekeys" => array(
"W" => array(
array("PET_SUM_SNDW_A_EPC0_FPF_MBBLPD_W",       "indent0", "PET_SUM_SNDW_A_EPC0_FPF_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPC0_YIY_MBBLPD_W",       "indent0", "PET_SUM_SNDW_A_EPC0_YIY_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPXXX2_YIY_MBBLPD_W",     "indent0", "PET_SUM_SNDW_A_EPXXX2_YIY_MBBLPD_W"),
array("PET_SUM_SNDW_A_(NA)_YRL_MBBLPD_W",       "indent0", "PET_SUM_SNDW_A_(NA)_YRL_MBBLPD_W"),
array("PET_SUM_SNDW_A_(NA)_YUP_PCT_W",          "indent0", "PET_SUM_SNDW_A_(NA)_YUP_PCT_W"),
array("PET_SUM_SNDW_A_EPOBG_YIR_MBBLPD_W",      "indent0", "PET_SUM_SNDW_A_EPOBG_YIR_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPOBGRR_YIR_MBBLPD_W",    "indent0", "PET_SUM_SNDW_A_EPOBGRR_YIR_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPOBGCC_YIR_MBBLPD_W",    "indent0", "PET_SUM_SNDW_A_EPOBGCC_YIR_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPOBGCG_YIR_MBBLPD_W",    "indent0", "PET_SUM_SNDW_A_EPOBGCG_YIR_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPOBGCO_YIR_MBBLPD_W",    "indent0", "PET_SUM_SNDW_A_EPOBGCO_YIR_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPOOXE_YIR_MBBLPD_W",     "indent0", "PET_SUM_SNDW_A_EPOOXE_YIR_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPM0F_YPT_MBBLPD_W",      "indent0", "PET_SUM_SNDW_A_EPM0F_YPT_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPM0F_YPR_MBBLPD_W",      "indent0", "PET_SUM_SNDW_A_EPM0F_YPR_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPM0R_YPR_MBBLPD_W",      "indent0", "PET_SUM_SNDW_A_EPM0R_YPR_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPM0RA_YPR_MBBLPD_W",     "indent0", "PET_SUM_SNDW_A_EPM0RA_YPR_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPM0RO_YPR_MBBLPD_W",     "indent0", "PET_SUM_SNDW_A_EPM0RO_YPR_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPM0C_YPR_MBBLPD_W",      "indent0", "PET_SUM_SNDW_A_EPM0C_YPR_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPM0CA_YPR_MBBLPD_W",     "indent0", "PET_SUM_SNDW_A_EPM0CA_YPR_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPM0CAL55_YPR_MBBLPD_W",  "indent0", "PET_SUM_SNDW_A_EPM0CAL55_YPR_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPM0CAG55_YPR_MBBLPD_W",  "indent0", "PET_SUM_SNDW_A_EPM0CAG55_YPR_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPM0CO_YPR_MBBLPD_W",     "indent0", "PET_SUM_SNDW_A_EPM0CO_YPR_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPM0F_VUA_MBBLPD_W",      "indent0", "PET_SUM_SNDW_A_EPM0F_VUA_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPJK_YPR_MBBLPD_W",       "indent0", "PET_SUM_SNDW_A_EPJK_YPR_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPJKC_YPR_MBBLPD_W",      "indent0", "PET_SUM_SNDW_A_EPJKC_YPR_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPJKM_YPR_MBBLPD_W",      "indent0", "PET_SUM_SNDW_A_EPJKM_YPR_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPD0_YPR_MBBLPD_W",       "indent0", "PET_SUM_SNDW_A_EPD0_YPR_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPDXL0_YPR_MBBLPD_W",     "indent0", "PET_SUM_SNDW_A_EPDXL0_YPR_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPDM10_YPR_MBBLPD_W",     "indent0", "PET_SUM_SNDW_A_EPDM10_YPR_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPD00H_YPR_MBBLPD_W",     "indent0", "PET_SUM_SNDW_A_EPD00H_YPR_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPPR_YPR_MBBLPD_W",       "indent0", "PET_SUM_SNDW_A_EPPR_YPR_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPLLPZ_YPA_MBBLPD_W",     "indent0", "PET_SUM_SNDW_A_EPLLPZ_YPA_MBBLPD_W"),
array("PET_SUM_SNDW_A_EP00_SAE_MBBL_W",         "indent0", "PET_SUM_SNDW_A_EP00_SAE_MBBL_W"),
array("PET_SUM_SNDW_A_EPOOXE_YOP_MBBLPD_W",     "indent0", "PET_SUM_SNDW_A_EPOOXE_YOP_MBBLPD_W"),
array("PET_SUM_SNDW_A_EP00_SAX_MBBL_W",         "indent0", "PET_SUM_SNDW_A_EP00_SAX_MBBL_W"),
array("PET_SUM_SNDW_A_EPC0_SAE_MBBL_W",         "indent0", "PET_SUM_SNDW_A_EPC0_SAE_MBBL_W"),
array("PET_SUM_SNDW_A_EPC0_SAXL_MBBL_W",        "indent0", "PET_SUM_SNDW_A_EPC0_SAXL_MBBL_W"),
array("PET_SUM_SNDW_A_EPC0_SAX_MBBL_W",         "indent0", "PET_SUM_SNDW_A_EPC0_SAX_MBBL_W"),
array("PET_SUM_SNDW_A_EPC0_SKA_MBBL_W",         "indent0", "PET_SUM_SNDW_A_EPC0_SKA_MBBL_W"),
array("PET_SUM_SNDW_A_EPC0_SAS_MBBL_W",         "indent0", "PET_SUM_SNDW_A_EPC0_SAS_MBBL_W"),
array("PET_SUM_SNDW_A_EPM0_SAE_MBBL_W",         "indent0", "PET_SUM_SNDW_A_EPM0_SAE_MBBL_W"),
array("PET_SUM_SNDW_A_EPM0F_SAE_MBBL_W",        "indent0", "PET_SUM_SNDW_A_EPM0F_SAE_MBBL_W"),
array("PET_SUM_SNDW_A_EPM0R_SAE_MBBL_W",        "indent0", "PET_SUM_SNDW_A_EPM0R_SAE_MBBL_W"),
array("PET_SUM_SNDW_A_EPM0RA_SAE_MBBL_W",       "indent0", "PET_SUM_SNDW_A_EPM0RA_SAE_MBBL_W"),
array("PET_SUM_SNDW_A_EPM0RN_SAE_MBBL_W",       "indent0", "PET_SUM_SNDW_A_EPM0RN_SAE_MBBL_W"),
array("PET_SUM_SNDW_A_EPM0C_SAE_MBBL_W",        "indent0", "PET_SUM_SNDW_A_EPM0C_SAE_MBBL_W"),
array("PET_SUM_SNDW_A_EPM0CA_SAE_MBBL_W",       "indent0", "PET_SUM_SNDW_A_EPM0CA_SAE_MBBL_W"),
array("PET_SUM_SNDW_A_EPM0CAL55_SAE_MBBL_W",    "indent0", "PET_SUM_SNDW_A_EPM0CAL55_SAE_MBBL_W"),
array("PET_SUM_SNDW_A_EPM0CAG55_SAE_MBBL_W",    "indent0", "PET_SUM_SNDW_A_EPM0CAG55_SAE_MBBL_W"),
array("PET_SUM_SNDW_A_EPM0CO_SAE_MBBL_W",       "indent0", "PET_SUM_SNDW_A_EPM0CO_SAE_MBBL_W"),
array("PET_SUM_SNDW_A_EPOBG_SAE_MBBL_W",        "indent0", "PET_SUM_SNDW_A_EPOBG_SAE_MBBL_W"),
array("PET_SUM_SNDW_A_EPOBGRR_SAE_MBBL_W",      "indent0", "PET_SUM_SNDW_A_EPOBGRR_SAE_MBBL_W"),
array("PET_SUM_SNDW_A_EPOBGRRE_SAE_MBBL_W",     "indent0", "PET_SUM_SNDW_A_EPOBGRRE_SAE_MBBL_W"),
array("PET_SUM_SNDW_A_EPOBGRRA_SAE_MBBL_W",     "indent0", "PET_SUM_SNDW_A_EPOBGRRA_SAE_MBBL_W"),
array("PET_SUM_SNDW_A_EPOBGCC_SAE_MBBL_W",      "indent0", "PET_SUM_SNDW_A_EPOBGCC_SAE_MBBL_W"),
array("PET_SUM_SNDW_A_EPOBGCG_SAE_MBBL_W",      "indent0", "PET_SUM_SNDW_A_EPOBGCG_SAE_MBBL_W"),
array("PET_SUM_SNDW_A_EPOBGCO_SAE_MBBL_W",      "indent0", "PET_SUM_SNDW_A_EPOBGCO_SAE_MBBL_W"),
array("PET_SUM_SNDW_A_EPOOXE_SAE_MBBL_W",       "indent0", "PET_SUM_SNDW_A_EPOOXE_SAE_MBBL_W"),
array("PET_SUM_SNDW_A_EPJK_SAE_MBBL_W",         "indent0", "PET_SUM_SNDW_A_EPJK_SAE_MBBL_W"),
array("PET_SUM_SNDW_A_EPD0_SAE_MBBL_W",         "indent0", "PET_SUM_SNDW_A_EPD0_SAE_MBBL_W"),
array("PET_SUM_SNDW_A_EPDXL0_SAE_MBBL_W",       "indent0", "PET_SUM_SNDW_A_EPDXL0_SAE_MBBL_W"),
array("PET_SUM_SNDW_A_EPDM10_SAE_MBBL_W",       "indent0", "PET_SUM_SNDW_A_EPDM10_SAE_MBBL_W"),
array("PET_SUM_SNDW_A_EPD00H_SAE_MBBL_W",       "indent0", "PET_SUM_SNDW_A_EPD00H_SAE_MBBL_W"),
array("PET_SUM_SNDW_A_EPPR_SAE_MBBL_W",         "indent0", "PET_SUM_SNDW_A_EPPR_SAE_MBBL_W"),
array("PET_SUM_SNDW_A_EPLLPZ_SAE_MBBL_W",       "indent0", "PET_SUM_SNDW_A_EPLLPZ_SAE_MBBL_W"),
array("PET_SUM_SNDW_A_EPLLPYN_SKB_MBBL_W",      "indent0", "PET_SUM_SNDW_A_EPLLPYN_SKB_MBBL_W"),
array("PET_SUM_SNDW_A_EPPO6_SAE_MBBL_W",        "indent0", "PET_SUM_SNDW_A_EPPO6_SAE_MBBL_W"),
array("PET_SUM_SNDW_A_EPPU_SAE_MBBL_W",         "indent0", "PET_SUM_SNDW_A_EPPU_SAE_MBBL_W"),
array("PET_SUM_SNDW_A_EPPK_SAE_MBBL_W",         "indent0", "PET_SUM_SNDW_A_EPPK_SAE_MBBL_W"),
array("PET_SUM_SNDW_A_EPPA_SAE_MBBL_W",         "indent0", "PET_SUM_SNDW_A_EPPA_SAE_MBBL_W"),
array("PET_SUM_SNDW_A_EPL0XP_SAE_MBBL_W",       "indent0", "PET_SUM_SNDW_A_EPL0XP_SAE_MBBL_W"),
array("PET_SUM_SNDW_A_EPC0_VSD_DAYS_W",         "indent0", "PET_SUM_SNDW_A_EPC0_VSD_DAYS_W"),
array("PET_SUM_SNDW_A_EPM0_VSD_DAYS_W",         "indent0", "PET_SUM_SNDW_A_EPM0_VSD_DAYS_W"),
array("PET_SUM_SNDW_A_EPJK_VSD_DAYS_W",         "indent0", "PET_SUM_SNDW_A_EPJK_VSD_DAYS_W"),
array("PET_SUM_SNDW_A_EPD0_VSD_DAYS_W",         "indent0", "PET_SUM_SNDW_A_EPD0_VSD_DAYS_W"),
array("PET_SUM_SNDW_A_EPLLPZ_VSD_DAYS_W",       "indent0", "PET_SUM_SNDW_A_EPLLPZ_VSD_DAYS_W"),
array("PET_SUM_SNDW_A_EP00_IM0_MBBLPD_W",       "indent0", "PET_SUM_SNDW_A_EP00_IM0_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPDM10_VUA_MBBLPD_W",     "indent0", "PET_SUM_SNDW_A_EPDM10_VUA_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPC0_IM0_MBBLPD_W",       "indent0", "PET_SUM_SNDW_A_EPC0_IM0_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPC0_IMX_MBBLPD_W",       "indent0", "PET_SUM_SNDW_A_EPC0_IMX_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPC0_IMS_MBBLPD_W",       "indent0", "PET_SUM_SNDW_A_EPC0_IMS_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPC0_IMU_MBBLPD_W",       "indent0", "PET_SUM_SNDW_A_EPC0_IMU_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPP0_IM0_MBBLPD_W",       "indent0", "PET_SUM_SNDW_A_EPP0_IM0_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPM0_IM0_MBBLPD_W",       "indent0", "PET_SUM_SNDW_A_EPM0_IM0_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPM0F_IM0_MBBLPD_W",      "indent0", "PET_SUM_SNDW_A_EPM0F_IM0_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPM0R_IM0_MBBLPD_W",      "indent0", "PET_SUM_SNDW_A_EPM0R_IM0_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPM0RA_IM0_MBBLPD_W",     "indent0", "PET_SUM_SNDW_A_EPM0RA_IM0_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPM0RO_IM0_MBBLPD_W",     "indent0", "PET_SUM_SNDW_A_EPM0RO_IM0_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPM0C_IM0_MBBLPD_W",      "indent0", "PET_SUM_SNDW_A_EPM0C_IM0_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPM0CA_IM0_MBBLPD_W",     "indent0", "PET_SUM_SNDW_A_EPM0CA_IM0_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPM0CAL55_IM0_MBBLPD_W",  "indent0", "PET_SUM_SNDW_A_EPM0CAL55_IM0_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPM0CAG55_IM0_MBBLPD_W",  "indent0", "PET_SUM_SNDW_A_EPM0CAG55_IM0_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPM0CO_IM0_MBBLPD_W",     "indent0", "PET_SUM_SNDW_A_EPM0CO_IM0_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPOBG_IM0_MBBLPD_W",      "indent0", "PET_SUM_SNDW_A_EPOBG_IM0_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPOBGRR_IM0_MBBLPD_W",    "indent0", "PET_SUM_SNDW_A_EPOBGRR_IM0_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPOBGRRE_IM0_MBBLPD_W",   "indent0", "PET_SUM_SNDW_A_EPOBGRRE_IM0_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPOBGRRA_IM0_MBBLPD_W",   "indent0", "PET_SUM_SNDW_A_EPOBGRRA_IM0_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPOBGCC_IM0_MBBLPD_W",    "indent0", "PET_SUM_SNDW_A_EPOBGCC_IM0_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPOBGCG_IM0_MBBLPD_W",    "indent0", "PET_SUM_SNDW_A_EPOBGCG_IM0_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPOBGCO_IM0_MBBLPD_W",    "indent0", "PET_SUM_SNDW_A_EPOBGCO_IM0_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPOOXE_IM0_MBBLPD_W",     "indent0", "PET_SUM_SNDW_A_EPOOXE_IM0_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPJK_IM0_MBBLPD_W",       "indent0", "PET_SUM_SNDW_A_EPJK_IM0_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPD0_IM0_MBBLPD_W",       "indent0", "PET_SUM_SNDW_A_EPD0_IM0_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPDXL0_IM0_MBBLPD_W",     "indent0", "PET_SUM_SNDW_A_EPDXL0_IM0_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPDM10_IM0_MBBLPD_W",     "indent0", "PET_SUM_SNDW_A_EPDM10_IM0_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPDM20_IM0_MBBLPD_W",     "indent0", "PET_SUM_SNDW_A_EPDM20_IM0_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPDXH0_IM0_MBBLPD_W",     "indent0", "PET_SUM_SNDW_A_EPDXH0_IM0_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPPR_IM0_MBBLPD_W",       "indent0", "PET_SUM_SNDW_A_EPPR_IM0_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPLLPZ_IM0_MBBLPD_W",     "indent0", "PET_SUM_SNDW_A_EPLLPZ_IM0_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPPO6_IM0_MBBLPD_W",      "indent0", "PET_SUM_SNDW_A_EPPO6_IM0_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPPK_IM0_MBBLPD_W",       "indent0", "PET_SUM_SNDW_A_EPPK_IM0_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPL0XP_IM0_MBBLPD_W",     "indent0", "PET_SUM_SNDW_A_EPL0XP_IM0_MBBLPD_W"),
array("PET_SUM_SNDW_A_EP00_EEX_MBBLPD_W",       "indent0", "PET_SUM_SNDW_A_EP00_EEX_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPC0_EEX_MBBLPD_W",       "indent0", "PET_SUM_SNDW_A_EPC0_EEX_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPP0_EEX_MBBLPD_W",       "indent0", "PET_SUM_SNDW_A_EPP0_EEX_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPM0F_EEX_MBBLPD_W",      "indent0", "PET_SUM_SNDW_A_EPM0F_EEX_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPJK_EEX_MBBLPD_W",       "indent0", "PET_SUM_SNDW_A_EPJK_EEX_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPD0_EEX_MBBLPD_W",       "indent0", "PET_SUM_SNDW_A_EPD0_EEX_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPPR_EEX_MBBLPD_W",       "indent0", "PET_SUM_SNDW_A_EPPR_EEX_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPLLPZ_EEX_MBBLPD_W",     "indent0", "PET_SUM_SNDW_A_EPLLPZ_EEX_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPPO4_EEX_MBBLPD_W",      "indent0", "PET_SUM_SNDW_A_EPPO4_EEX_MBBLPD_W"),
array("PET_SUM_SNDW_A_EP00_IMN_MBBLPD_W",       "indent0", "PET_SUM_SNDW_A_EP00_IMN_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPC0_IMN_MBBLPD_WL",      "indent0", "PET_SUM_SNDW_A_EPC0_IMN_MBBLPD_WL"),
array("PET_SUM_SNDW_A_EPP0_IMN_MBBLPD_W",       "indent0", "PET_SUM_SNDW_A_EPP0_IMN_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPP0_VPP_MBBLPD_W",       "indent0", "PET_SUM_SNDW_A_EPP0_VPP_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPM0F_VPP_MBBLPD_W",      "indent0", "PET_SUM_SNDW_A_EPM0F_VPP_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPJK_VPP_MBBLPD_W",       "indent0", "PET_SUM_SNDW_A_EPJK_VPP_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPD0_VPP_MBBLPD_W",       "indent0", "PET_SUM_SNDW_A_EPD0_VPP_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPPR_VPP_MBBLPD_W",       "indent0", "PET_SUM_SNDW_A_EPPR_VPP_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPLLPZ_VPP_MBBLPD_W",     "indent0", "PET_SUM_SNDW_A_EPLLPZ_VPP_MBBLPD_W"),
array("PET_SUM_SNDW_A_EPPO4_VPP_MBBLPD_W",      "indent0", "PET_SUM_SNDW_A_EPPO4_VPP_MBBLPD_W")
),
"4" => array(
array("PET_SUM_SNDW_A_EPC0_FPF_MBBLPD_4",      "indent0", "PET_SUM_SNDW_A_EPC0_FPF_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPC0_YIY_MBBLPD_4",      "indent0", "PET_SUM_SNDW_A_EPC0_YIY_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPXXX2_YIY_MBBLPD_4",    "indent0", "PET_SUM_SNDW_A_EPXXX2_YIY_MBBLPD_4"),
array("PET_SUM_SNDW_A_(NA)_YRL_MBBLPD_4",      "indent0", "PET_SUM_SNDW_A_(NA)_YRL_MBBLPD_4"),
array("PET_SUM_SNDW_A_(NA)_YUP_PCT_4",         "indent0", "PET_SUM_SNDW_A_(NA)_YUP_PCT_4"),
array("PET_SUM_SNDW_A_EPOBG_YIR_MBBLPD_4",     "indent0", "PET_SUM_SNDW_A_EPOBG_YIR_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPOBGRR_YIR_MBBLPD_4",   "indent0", "PET_SUM_SNDW_A_EPOBGRR_YIR_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPOBGCC_YIR_MBBLPD_4",   "indent0", "PET_SUM_SNDW_A_EPOBGCC_YIR_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPOBGCG_YIR_MBBLPD_4",   "indent0", "PET_SUM_SNDW_A_EPOBGCG_YIR_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPOBGCO_YIR_MBBLPD_4",   "indent0", "PET_SUM_SNDW_A_EPOBGCO_YIR_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPOOXE_YIR_MBBLPD_4",    "indent0", "PET_SUM_SNDW_A_EPOOXE_YIR_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPM0F_YPT_MBBLPD_4",     "indent0", "PET_SUM_SNDW_A_EPM0F_YPT_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPM0F_YPR_MBBLPD_4",     "indent0", "PET_SUM_SNDW_A_EPM0F_YPR_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPM0R_YPR_MBBLPD_4",     "indent0", "PET_SUM_SNDW_A_EPM0R_YPR_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPM0RA_YPR_MBBLPD_4",    "indent0", "PET_SUM_SNDW_A_EPM0RA_YPR_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPM0RO_YPR_MBBLPD_4",    "indent0", "PET_SUM_SNDW_A_EPM0RO_YPR_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPM0C_YPR_MBBLPD_4",     "indent0", "PET_SUM_SNDW_A_EPM0C_YPR_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPM0CA_YPR_MBBLPD_4",    "indent0", "PET_SUM_SNDW_A_EPM0CA_YPR_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPM0CAL55_YPR_MBBLPD_4", "indent0", "PET_SUM_SNDW_A_EPM0CAL55_YPR_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPM0CAG55_YPR_MBBLPD_4", "indent0", "PET_SUM_SNDW_A_EPM0CAG55_YPR_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPM0CO_YPR_MBBLPD_4",    "indent0", "PET_SUM_SNDW_A_EPM0CO_YPR_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPM0F_VUA_MBBLPD_4",     "indent0", "PET_SUM_SNDW_A_EPM0F_VUA_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPJK_YPR_MBBLPD_4",      "indent0", "PET_SUM_SNDW_A_EPJK_YPR_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPJKC_YPR_MBBLPD_4",     "indent0", "PET_SUM_SNDW_A_EPJKC_YPR_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPJKM_YPR_MBBLPD_4",     "indent0", "PET_SUM_SNDW_A_EPJKM_YPR_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPD0_YPR_MBBLPD_4",      "indent0", "PET_SUM_SNDW_A_EPD0_YPR_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPDXL0_YPR_MBBLPD_4",    "indent0", "PET_SUM_SNDW_A_EPDXL0_YPR_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPDM10_YPR_MBBLPD_4",    "indent0", "PET_SUM_SNDW_A_EPDM10_YPR_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPD00H_YPR_MBBLPD_4",    "indent0", "PET_SUM_SNDW_A_EPD00H_YPR_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPPR_YPR_MBBLPD_4",      "indent0", "PET_SUM_SNDW_A_EPPR_YPR_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPLLPZ_YPA_MBBLPD_4",    "indent0", "PET_SUM_SNDW_A_EPLLPZ_YPA_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPOOXE_YOP_MBBLPD_4",    "indent0", "PET_SUM_SNDW_A_EPOOXE_YOP_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPDM10_VUA_MBBLPD_4",    "indent0", "PET_SUM_SNDW_A_EPDM10_VUA_MBBLPD_4"),
array("PET_SUM_SNDW_A_EP00_IM0_MBBLPD_4",      "indent0", "PET_SUM_SNDW_A_EP00_IM0_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPC0_IM0_MBBLPD_4",      "indent0", "PET_SUM_SNDW_A_EPC0_IM0_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPC0_IMX_MBBLPD_4",      "indent0", "PET_SUM_SNDW_A_EPC0_IMX_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPC0_IMS_MBBLPD_4",      "indent0", "PET_SUM_SNDW_A_EPC0_IMS_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPC0_IMU_MBBLPD_4",      "indent0", "PET_SUM_SNDW_A_EPC0_IMU_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPP0_IM0_MBBLPD_4",      "indent0", "PET_SUM_SNDW_A_EPP0_IM0_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPM0_IM0_MBBLPD_4",      "indent0", "PET_SUM_SNDW_A_EPM0_IM0_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPM0F_IM0_MBBLPD_4",     "indent0", "PET_SUM_SNDW_A_EPM0F_IM0_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPM0R_IM0_MBBLPD_4",     "indent0", "PET_SUM_SNDW_A_EPM0R_IM0_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPM0RA_IM0_MBBLPD_4",    "indent0", "PET_SUM_SNDW_A_EPM0RA_IM0_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPM0RO_IM0_MBBLPD_4",    "indent0", "PET_SUM_SNDW_A_EPM0RO_IM0_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPM0C_IM0_MBBLPD_4",     "indent0", "PET_SUM_SNDW_A_EPM0C_IM0_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPM0CA_IM0_MBBLPD_4",    "indent0", "PET_SUM_SNDW_A_EPM0CA_IM0_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPM0CAL55_IM0_MBBLPD_4", "indent0", "PET_SUM_SNDW_A_EPM0CAL55_IM0_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPM0CAG55_IM0_MBBLPD_4", "indent0", "PET_SUM_SNDW_A_EPM0CAG55_IM0_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPM0CO_IM0_MBBLPD_4",    "indent0", "PET_SUM_SNDW_A_EPM0CO_IM0_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPOBG_IM0_MBBLPD_4",     "indent0", "PET_SUM_SNDW_A_EPOBG_IM0_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPOBGRR_IM0_MBBLPD_4",   "indent0", "PET_SUM_SNDW_A_EPOBGRR_IM0_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPOBGCC_IM0_MBBLPD_4",   "indent0", "PET_SUM_SNDW_A_EPOBGCC_IM0_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPOBGCG_IM0_MBBLPD_4",   "indent0", "PET_SUM_SNDW_A_EPOBGCG_IM0_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPOBGCO_IM0_MBBLPD_4",   "indent0", "PET_SUM_SNDW_A_EPOBGCO_IM0_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPOOXE_IM0_MBBLPD_4",    "indent0", "PET_SUM_SNDW_A_EPOOXE_IM0_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPJK_IM0_MBBLPD_4",      "indent0", "PET_SUM_SNDW_A_EPJK_IM0_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPD0_IM0_MBBLPD_4",      "indent0", "PET_SUM_SNDW_A_EPD0_IM0_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPDXL0_IM0_MBBLPD_4",    "indent0", "PET_SUM_SNDW_A_EPDXL0_IM0_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPDM10_IM0_MBBLPD_4",    "indent0", "PET_SUM_SNDW_A_EPDM10_IM0_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPDM20_IM0_MBBLPD_4",    "indent0", "PET_SUM_SNDW_A_EPDM20_IM0_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPDXH0_IM0_MBBLPD_4",    "indent0", "PET_SUM_SNDW_A_EPDXH0_IM0_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPPR_IM0_MBBLPD_4",      "indent0", "PET_SUM_SNDW_A_EPPR_IM0_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPLLPZ_IM0_MBBLPD_4",    "indent0", "PET_SUM_SNDW_A_EPLLPZ_IM0_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPPO6_IM0_MBBLPD_4",     "indent0", "PET_SUM_SNDW_A_EPPO6_IM0_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPPK_IM0_MBBLPD_4",      "indent0", "PET_SUM_SNDW_A_EPPK_IM0_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPL0XP_IM0_MBBLPD_4",    "indent0", "PET_SUM_SNDW_A_EPL0XP_IM0_MBBLPD_4"),
array("PET_SUM_SNDW_A_EP00_EEX_MBBLPD_4",      "indent0", "PET_SUM_SNDW_A_EP00_EEX_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPC0_EEX_MBBLPD_4",      "indent0", "PET_SUM_SNDW_A_EPC0_EEX_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPP0_EEX_MBBLPD_4",      "indent0", "PET_SUM_SNDW_A_EPP0_EEX_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPM0F_EEX_MBBLPD_4",     "indent0", "PET_SUM_SNDW_A_EPM0F_EEX_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPJK_EEX_MBBLPD_4",      "indent0", "PET_SUM_SNDW_A_EPJK_EEX_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPD0_EEX_MBBLPD_4",      "indent0", "PET_SUM_SNDW_A_EPD0_EEX_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPPR_EEX_MBBLPD_4",      "indent0", "PET_SUM_SNDW_A_EPPR_EEX_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPLLPZ_EEX_MBBLPD_4",    "indent0", "PET_SUM_SNDW_A_EPLLPZ_EEX_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPPO4_EEX_MBBLPD_4",     "indent0", "PET_SUM_SNDW_A_EPPO4_EEX_MBBLPD_4"),
array("PET_SUM_SNDW_A_EP00_IMN_MBBLPD_4",      "indent0", "PET_SUM_SNDW_A_EP00_IMN_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPC0_IMN_MBBLPD_4",      "indent0", "PET_SUM_SNDW_A_EPC0_IMN_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPP0_IMN_MBBLPD_4",      "indent0", "PET_SUM_SNDW_A_EPP0_IMN_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPP0_VPP_MBBLPD_4",      "indent0", "PET_SUM_SNDW_A_EPP0_VPP_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPM0F_VPP_MBBLPD_4",     "indent0", "PET_SUM_SNDW_A_EPM0F_VPP_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPJK_VPP_MBBLPD_4",      "indent0", "PET_SUM_SNDW_A_EPJK_VPP_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPD0_VPP_MBBLPD_4",      "indent0", "PET_SUM_SNDW_A_EPD0_VPP_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPPR_VPP_MBBLPD_4",      "indent0", "PET_SUM_SNDW_A_EPPR_VPP_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPLLPZ_VPP_MBBLPD_4",    "indent0", "PET_SUM_SNDW_A_EPLLPZ_VPP_MBBLPD_4"),
array("PET_SUM_SNDW_A_EPPO4_VPP_MBBLPD_4",     "indent0", "PET_SUM_SNDW_A_EPPO4_VPP_MBBLPD_4")
)
),
"table_head_data" => array(
array(array("Country", "API key"), array(), array("History"))
)
),
// table 3 refiner ---------------------------------------------------------
"3refiner" => array(
"tablekeys" => array(
"W" => array(
array("PET_PNP_WPRODR_S1_W",   "indent0", "U.S.")
),
"4" => array(
array("PET_PNP_WPRODR_S1_4",   "indent0", "U.S.")
)
),
"table_head_data" => array(
array(array("Country", "API key"), array(), array("History"))
)
),
// table 3 blender ---------------------------------------------------------
"3blender" => array(
"tablekeys" => array(
"W" => array(
array("PET_PNP_WPRODB_S1_W",   "indent0", "U.S.")
),
"4" => array(
array("PET_PNP_WPRODB_S1_4",   "indent0", "U.S.")
)
),
"table_head_data" => array(
array(array("Country", "API key"), array(), array("History"))
)
),
// table 4 ----------------------------------------------------------------
"4" => array(
"tablekeys" => array(
"W" => array(
array("PET_STOC_WSTK_DCU_NUS_W",   "indent0", "U.S."),
array("PET_STOC_WSTK_DCU_R10_W",   "indent0", "PADD 1"),
array("PET_STOC_WSTK_DCU_R1X_W",   "indent1", "New England"),
array("PET_STOC_WSTK_DCU_R1Y_W",   "indent1", "Central Atlantic"),
array("PET_STOC_WSTK_DCU_R1Z_W",   "indent1", "Lower Atlantic"),
array("PET_STOC_WSTK_DCU_R20_W",   "indent0", "PADD 2"),
array("PET_STOC_WSTK_DCU_YCUOK_W", "indent1", "Cushing, Oklahoma"),
array("PET_STOC_WSTK_DCU_R30_W",   "indent0", "PADD 3"),
array("PET_STOC_WSTK_DCU_R40_W",   "indent0", "PADD 4"),
array("PET_STOC_WSTK_DCU_R50_W",   "indent0", "PADD 5"),
array("PET_STOC_WSTK_DCU_R4N5_W",  "indent0", "PADD's 4 &amp; 5")
),
"M" => array(
array("PET_STOC_WSTK_DCU_NUS_M",   "indent0", "U.S."),
array("PET_STOC_WSTK_DCU_R10_M",   "indent0", "PADD 1"),
array("PET_STOC_WSTK_DCU_R1X_M",   "indent1", "New England"),
array("PET_STOC_WSTK_DCU_R1Y_M",   "indent1", "Central Atlantic"),
array("PET_STOC_WSTK_DCU_R1Z_M",   "indent1", "Lower Atlantic"),
array("PET_STOC_WSTK_DCU_R20_M",   "indent0", "PADD 2"),
array("PET_STOC_WSTK_DCU_YCUOK_M", "indent1", "Cushing, Oklahoma"),
array("PET_STOC_WSTK_DCU_R30_M",   "indent0", "PADD 3"),
array("PET_STOC_WSTK_DCU_R40_M",   "indent0", "PADD 4"),
array("PET_STOC_WSTK_DCU_R50_M",   "indent0", "PADD 5"),
array("PET_STOC_WSTK_DCU_R4N5_M",  "indent0", "PADD's 4 &amp; 5")
),
"A" => array(
array("PET_STOC_WSTK_DCU_NUS_A",   "indent0", "U.S."),
array("PET_STOC_WSTK_DCU_R10_A",   "indent0", "PADD 1"),
array("PET_STOC_WSTK_DCU_R1X_A",   "indent1", "New England"),
array("PET_STOC_WSTK_DCU_R1Y_A",   "indent1", "Central Atlantic"),
array("PET_STOC_WSTK_DCU_R1Z_A",   "indent1", "Lower Atlantic"),
array("PET_STOC_WSTK_DCU_R20_A",   "indent0", "PADD 2"),
array("PET_STOC_WSTK_DCU_YCUOK_A", "indent1", "Cushing, Oklahoma"),
array("PET_STOC_WSTK_DCU_R30_A",   "indent0", "PADD 3"),
array("PET_STOC_WSTK_DCU_R40_A",   "indent0", "PADD 4"),
array("PET_STOC_WSTK_DCU_R50_A",   "indent0", "PADD 5"),
array("PET_STOC_WSTK_DCU_R4N5_A",  "indent0", "PADD's 4 &amp; 5")
)
),
"table_head_data" => array(
array(array("Country", "API key"), array(), array("History"))
)
),
// table 4 area -----------------------------------------------------------
"4area" => array(
"tablekeys" => array(
"W" => array(
array("PET_STOC_WSTK_A_EP00_SAE_MBBL_W",       "indent0", "PET_STOC_WSTK_A_EP00_SAE_MBBL_W"),
array("PET_STOC_WSTK_A_EP00_SAX_MBBL_W",       "indent0", "PET_STOC_WSTK_A_EP00_SAX_MBBL_W"),
array("PET_STOC_WSTK_A_EPC0_SAE_MBBL_W",       "indent0", "PET_STOC_WSTK_A_EPC0_SAE_MBBL_W"),
array("PET_STOC_WSTK_A_EPC0_SAX_MBBL_W",       "indent1", "PET_STOC_WSTK_A_EPC0_SAX_MBBL_W"),
array("PET_STOC_WSTK_A_EPC0_SAXL_MBBL_W",      "indent1", "PET_STOC_WSTK_A_EPC0_SAXL_MBBL_W"),
array("PET_STOC_WSTK_A_EPC0_SKA_MBBL_W",       "indent2", "PET_STOC_WSTK_A_EPC0_SKA_MBBL_W"),
array("PET_STOC_WSTK_A_EPC0_SAS_MBBL_W",       "indent1", "PET_STOC_WSTK_A_EPC0_SAS_MBBL_W"),
array("PET_STOC_WSTK_A_EPM0_SAE_MBBL_W",       "indent0", "PET_STOC_WSTK_A_EPM0_SAE_MBBL_W"),
array("PET_STOC_WSTK_A_EPM0F_SAE_MBBL_W",      "indent1", "PET_STOC_WSTK_A_EPM0F_SAE_MBBL_W"),
array("PET_STOC_WSTK_A_EPM0R_SAE_MBBL_W",      "indent2", "PET_STOC_WSTK_A_EPM0R_SAE_MBBL_W"),
array("PET_STOC_WSTK_A_EPM0RA_SAE_MBBL_W",     "indent3", "PET_STOC_WSTK_A_EPM0RA_SAE_MBBL_W"),
array("PET_STOC_WSTK_A_EPM0C_SAE_MBBL_W",      "indent2", "PET_STOC_WSTK_A_EPM0C_SAE_MBBL_W"),
array("PET_STOC_WSTK_A_EPM0CA_SAE_MBBL_W",     "indent3", "PET_STOC_WSTK_A_EPM0CA_SAE_MBBL_W"),//CONVENTIONAL GAS BLENDED WITH FUEL ETHANOL LINKS TO SAME AS ED55 AND LOWER
array("PET_STOC_WSTK_A_EPM0CA_SAE_MBBL_W",     "indent3", "PET_STOC_WSTK_A_EPM0CA_SAE_MBBL_W"),
array("PET_STOC_WSTK_A_EPM0CAG55_SAE_MBBL_W",  "indent4", "PET_STOC_WSTK_A_EPM0CAG55_SAE_MBBL_W"),
array("PET_STOC_WSTK_A_EPM0CO_SAE_MBBL_W",     "indent4", "PET_STOC_WSTK_A_EPM0CO_SAE_MBBL_W"),
array("PET_STOC_WSTK_A_EPOBG_SAE_MBBL_W",      "indent2", "PET_STOC_WSTK_A_EPOBG_SAE_MBBL_W"),
array("PET_STOC_WSTK_A_EPOBGRR_SAE_MBBL_W",    "indent3", "PET_STOC_WSTK_A_EPOBGRR_SAE_MBBL_W"),
array("PET_STOC_WSTK_A_EPOBGRRA_SAE_MBBL_W",   "indent4", "PET_STOC_WSTK_A_EPOBGRRA_SAE_MBBL_W"),
array("PET_STOC_WSTK_A_EPOBGRRE_SAE_MBBL_W",   "indent4", "PET_STOC_WSTK_A_EPOBGRRE_SAE_MBBL_W")
// )
),
"M" => array(
array("PET_STOC_WSTK_A_EP00_SAE_MBBL_M",       "indent0", "PET_STOC_WSTK_A_EP00_SAE_MBBL_M"),
array("PET_STOC_WSTK_A_EP00_SAX_MBBL_M",       "indent0", "PET_STOC_WSTK_A_EP00_SAX_MBBL_M"),
array("PET_STOC_WSTK_A_EPC0_SAE_MBBL_M",       "indent0", "PET_STOC_WSTK_A_EPC0_SAE_MBBL_M"),
array("PET_STOC_WSTK_A_EPC0_SAX_MBBL_M",       "indent1", "PET_STOC_WSTK_A_EPC0_SAX_MBBL_M"),
array("PET_STOC_WSTK_A_EPC0_SAXL_MBBL_M",      "indent1", "PET_STOC_WSTK_A_EPC0_SAXL_MBBL_M"),
array("PET_STOC_WSTK_A_EPC0_SKA_MBBL_M",       "indent2", "PET_STOC_WSTK_A_EPC0_SKA_MBBL_M"),
array("PET_STOC_WSTK_A_EPC0_SAS_MBBL_M",       "indent1", "PET_STOC_WSTK_A_EPC0_SAS_MBBL_M"),
array("PET_STOC_WSTK_A_EPM0_SAE_MBBL_M",       "indent0", "PET_STOC_WSTK_A_EPM0_SAE_MBBL_M"),
array("PET_STOC_WSTK_A_EPM0F_SAE_MBBL_M",      "indent1", "PET_STOC_WSTK_A_EPM0F_SAE_MBBL_M"),
array("PET_STOC_WSTK_A_EPM0R_SAE_MBBL_M",      "indent2", "PET_STOC_WSTK_A_EPM0R_SAE_MBBL_M"),
array("PET_STOC_WSTK_A_EPM0RA_SAE_MBBL_M",     "indent3", "PET_STOC_WSTK_A_EPM0RA_SAE_MBBL_M"),
array("PET_STOC_WSTK_A_EPM0C_SAE_MBBL_M",      "indent2", "PET_STOC_WSTK_A_EPM0C_SAE_MBBL_M"),
array("PET_STOC_WSTK_A_EPM0CA_SAE_MBBL_M",     "indent3", "PET_STOC_WSTK_A_EPM0CA_SAE_MBBL_M"),//CONVENTIONAL GAS BLENDED WITH FUEL ETHANOL LINKS TO SAME AS ED55 AND LOWER
array("PET_STOC_WSTK_A_EPM0CA_SAE_MBBL_M",     "indent3", "PET_STOC_WSTK_A_EPM0CA_SAE_MBBL_M"),
array("PET_STOC_WSTK_A_EPM0CAG55_SAE_MBBL_M",  "indent4", "PET_STOC_WSTK_A_EPM0CAG55_SAE_MBBL_M"),
array("PET_STOC_WSTK_A_EPM0CO_SAE_MBBL_M",     "indent4", "PET_STOC_WSTK_A_EPM0CO_SAE_MBBL_M"),
array("PET_STOC_WSTK_A_EPOBG_SAE_MBBL_M",      "indent2", "PET_STOC_WSTK_A_EPOBG_SAE_MBBL_M"),
array("PET_STOC_WSTK_A_EPOBGRR_SAE_MBBL_M",    "indent3", "PET_STOC_WSTK_A_EPOBGRR_SAE_MBBL_M"),
array("PET_STOC_WSTK_A_EPOBGRRA_SAE_MBBL_M",   "indent4", "PET_STOC_WSTK_A_EPOBGRRA_SAE_MBBL_M"),
array("PET_STOC_WSTK_A_EPOBGRRE_SAE_MBBL_M",   "indent4", "PET_STOC_WSTK_A_EPOBGRRE_SAE_MBBL_M")
)
,
"A" => array(
array("PET_STOC_WSTK_A_EP00_SAE_MBBL_A",       "indent0", "PET_STOC_WSTK_A_EP00_SAE_MBBL_A"),
array("PET_STOC_WSTK_A_EP00_SAX_MBBL_A",       "indent0", "PET_STOC_WSTK_A_EP00_SAX_MBBL_A"),
array("PET_STOC_WSTK_A_EPC0_SAE_MBBL_A",       "indent0", "PET_STOC_WSTK_A_EPC0_SAE_MBBL_A"),
array("PET_STOC_WSTK_A_EPC0_SAX_MBBL_A",       "indent1", "PET_STOC_WSTK_A_EPC0_SAX_MBBL_A"),
array("PET_STOC_WSTK_A_EPC0_SAXL_MBBL_A",      "indent1", "PET_STOC_WSTK_A_EPC0_SAXL_MBBL_A"),
array("PET_STOC_WSTK_A_EPC0_SKA_MBBL_A",       "indent2", "PET_STOC_WSTK_A_EPC0_SKA_MBBL_A"),
array("PET_STOC_WSTK_A_EPC0_SAS_MBBL_A",       "indent1", "PET_STOC_WSTK_A_EPC0_SAS_MBBL_A"),
array("PET_STOC_WSTK_A_EPM0_SAE_MBBL_A",       "indent0", "PET_STOC_WSTK_A_EPM0_SAE_MBBL_A"),
array("PET_STOC_WSTK_A_EPM0F_SAE_MBBL_A",      "indent1", "PET_STOC_WSTK_A_EPM0F_SAE_MBBL_A"),
array("PET_STOC_WSTK_A_EPM0R_SAE_MBBL_A",      "indent2", "PET_STOC_WSTK_A_EPM0R_SAE_MBBL_A"),
array("PET_STOC_WSTK_A_EPM0RA_SAE_MBBL_A",     "indent3", "PET_STOC_WSTK_A_EPM0RA_SAE_MBBL_A"),
array("PET_STOC_WSTK_A_EPM0C_SAE_MBBL_A",      "indent2", "PET_STOC_WSTK_A_EPM0C_SAE_MBBL_A"),
array("PET_STOC_WSTK_A_EPM0CA_SAE_MBBL_A",     "indent3", "PET_STOC_WSTK_A_EPM0CA_SAE_MBBL_A"),//CONVENTIONAL GAS BLENDED WITH FUEL ETHANOL LINKS TO SAME AS ED55 AND LOWER
array("PET_STOC_WSTK_A_EPM0CA_SAE_MBBL_A",     "indent3", "PET_STOC_WSTK_A_EPM0CA_SAE_MBBL_A"),
array("PET_STOC_WSTK_A_EPM0CAG55_SAE_MBBL_A",  "indent4", "PET_STOC_WSTK_A_EPM0CAG55_SAE_MBBL_A"),
array("PET_STOC_WSTK_A_EPM0CO_SAE_MBBL_A",     "indent4", "PET_STOC_WSTK_A_EPM0CO_SAE_MBBL_A"),
array("PET_STOC_WSTK_A_EPOBG_SAE_MBBL_A",      "indent2", "PET_STOC_WSTK_A_EPOBG_SAE_MBBL_A"),
array("PET_STOC_WSTK_A_EPOBGRR_SAE_MBBL_A",    "indent3", "PET_STOC_WSTK_A_EPOBGRR_SAE_MBBL_A"),
array("PET_STOC_WSTK_A_EPOBGRRA_SAE_MBBL_A",   "indent4", "PET_STOC_WSTK_A_EPOBGRRA_SAE_MBBL_A"),
array("PET_STOC_WSTK_A_EPOBGRRE_SAE_MBBL_A",   "indent4", "PET_STOC_WSTK_A_EPOBGRRE_SAE_MBBL_A")
)
),
"table_head_data" => array(
array(array("Country", "API key"), array(), array("History"))
)
),
// table 5 ----------------------------------------------------------------
"5" => array(
"tablekeys" => array(
"W" => array(
array("PET_STOC_WSTK_A_EPM0_SAE_MBBL_W",   "indent0", "PET_STOC_WSTK_A_EPM0_SAE_MBBL_W")
),
"M" => array(
array("PET_STOC_WSTK_A_EPM0_SAE_MBBL_M",   "indent0", "PET_STOC_WSTK_A_EPM0_SAE_MBBL_M")
),
"A" => array(
array("PET_STOC_WSTK_A_EPM0_SAE_MBBL_A",   "indent0", "PET_STOC_WSTK_A_EPM0_SAE_MBBL_A")
)
),
"table_head_data" => array(
array(array("Country", "API key"), array(), array("History"))
)
),
// table 6 ----------------------------------------------------------------
"6" => array(
"tablekeys" => array(
"W" => array(
array("PET_STOC_WSTK_A_EPD0_SAE_MBBL_W",   "indent0", "PET_STOC_WSTK_A_EPD0_SAE_MBBL_W")
),
"M" => array(
array("PET_STOC_WSTK_A_EPD0_SAE_MBBL_M",   "indent0", "PET_STOC_WSTK_A_EPD0_SAE_MBBL_M")
),
"A" => array(
array("PET_STOC_WSTK_A_EPD0_SAE_MBBL_A",   "indent0", "PET_STOC_WSTK_A_EPD0_SAE_MBBL_A")
)
),
"table_head_data" => array(
array(array("Country", "API key"), array(), array("History"))
)
),
// table 7 ----------------------------------------------------------------
"7" => array(
"tablekeys" => array(
"W" => array(
array("PET_MOVE_WKLY_DC_NUS-Z00_MBBLPD_W",   "indent0", "PET_MOVE_WKLY_DC_NUS-Z00_MBBLPD_W")
),
"4" => array(
array("PET_MOVE_WKLY_DC_NUS-Z00_MBBLPD_4",   "indent0", "PET_MOVE_WKLY_DC_NUS-Z00_MBBLPD_4")
)
),
"table_head_data" => array(
array(array("Country", "API key"), array(), array("History"))
)
),
// table 8 ----------------------------------------------------------------
"8" => array(
"tablekeys" => array(
"W" => array(
array("PET_MOVE_WIMPC_S1_W",   "indent0", "PET_MOVE_WIMPC_S1_W")
),
"4" => array(
array("PET_MOVE_WIMPC_S1_4",   "indent0", "PET_MOVE_WIMPC_S1_4")
)
),
"table_head_data" => array(
array(array("Country", "API key"), array(), array("History"))
)
),
// table 9 ----------------------------------------------------------------
"9" => array(
"tablekeys" => array(
"W" => array(
array("PET_SUM_SNDW_DCUS_NUS_W",   "indent0", "PET_SUM_SNDW_DCUS_NUS_W")
),
"4" => array(
array("PET_SUM_SNDW_DCUS_NUS_4",   "indent0", "PET_SUM_SNDW_DCUS_NUS_4")
)
),
"table_head_data" => array(
array(array("Country", "API key"), array(), array("History"))
)
),
// table 11 ----------------------------------------------------------------
"11" => array(
"tablekeys" => array(
"D" => array(
array("PET_PRI_SPT_S1_D",   "indent0", "PET_PRI_SPT_S1_D")
),
"W" => array(
array("PET_PRI_SPT_S1_W",   "indent0", "PET_PRI_SPT_S1_W")
)
),
"table_head_data" => array(
array(array("Country", "API key"), array(), array("History"))
)
),
// table 12 ----------------------------------------------------------------
"12" => array(
"tablekeys" => array(
"D" => array(
array("PET_PRI_SPT_S1_D",   "indent0", "PET_PRI_SPT_S1_D")
),
"W" => array(
array("PET_PRI_SPT_S1_W",   "indent0", "PET_PRI_SPT_S1_W")
)
),
"table_head_data" => array(
array(array("Country", "API key"), array(), array("History"))
)
),
// table 13 ----------------------------------------------------------------
"13" => array(
"tablekeys" => array(
"D" => array(
array("PET_PRI_FUT_S1_D",   "indent0", "PET_PRI_FUT_S1_D")
),
"W" => array(
array("PET_PRI_FUT_S1_W",   "indent0", "PET_PRI_FUT_S1_W")
)
),
"table_head_data" => array(
array(array("Country", "API key"), array(), array("History"))
)
),
// table 14 ----------------------------------------------------------------
"14" => array(
"tablekeys" => array(
"W" => array(
array("PET_PRI_GND_DCUS_NUS_W",   "indent0", "PET_PRI_GND_DCUS_NUS_W")
)
)
)
);
function query_builder() { // NOTE array of queries to build tables
//$this->data_table['table']
$table            = $this->data_table['table'];
$table_key        = $this->data_table['table_key'];
$period           = $this->data_table['period'];
$table_key_period = $this->data_table['table_key'] . "_" . $this->data_table['period'];
$db_table = null;
// echo "<pre>dump<br>";
// echo var_dump($this->data_table);
// echo "</pre>";
switch ($period) {
case 'D':
$db_table = "ogirs.UV_GETTBLCRS_DAILY";
break;
case 'W':
$db_table = "ogirs.UV_GETTBLCRS_WEEKLY";
break;
case '4':
$db_table = "ogirs.UV_GETTBLCRS_4WEEKLY";
break;
case 'M':
$db_table = "ogirs.UV_GETTBLCRS_MONTHLY";
break;
}
$query = array(
// table title, units, and footer query ------------------------------
"SELECT * FROM ogirs.UV_GETTBLPUBTABLES WHERE TABLEKEY='{$this->data_table['table_key']}'",
// table body query DAILY ------------------------------------------------
// NOTE need to optimize CRS part of this query !!!!!!!!!!!!!!!!!!!!!!!!!!
"SELECT SECTION.SECTIONNAME, SERIES.DISPLAYTEXT, CRS.*
FROM ogirs.UV_GETTBLPUBSECTION SECTION
JOIN ogirs.UV_GETTBLPUBSERIES SERIES
ON SECTION.SECTIONKEY = SERIES.SECTIONKEY
JOIN {$db_table} CRS
ON SERIES.SOURCEKEY = CRS.SOURCEKEY
WHERE SECTION.TABLEKEY = '{$this->data_table['table_key']}'
AND SERIES.FREQUENCY = '{$this->data_table['period']}'
AND CRS.DDMONDAY = '{$this->data_table['ddmonday']}'
ORDER BY SECTION.SECTIONORDER, SERIES.STUBORDER",
// table body query WEEKLY 4WEEKLY ---------------------------------------
"SELECT PUB_SECTION.SECTIONNAME, PUB_SERIES.DISPLAYTEXT, CRS_WEEKLY.SOURCEKEY, PUB_SERIES.STUBINDENT,
PUB_SERIES.STUBORDER, CRS_WEEKLY.YEAR, CRS_WEEKLY.MONTH,
CRS_WEEKLY.WW01, CRS_WEEKLY.WW01DATE,
CRS_WEEKLY.WW02, CRS_WEEKLY.WW02DATE,
CRS_WEEKLY.WW03, CRS_WEEKLY.WW03DATE,
CRS_WEEKLY.WW04, CRS_WEEKLY.WW04DATE,
CRS_WEEKLY.WW05, CRS_WEEKLY.WW05DATE,
CRS_WEEKLY.DECADE, CRS_WEEKLY.YEAR
FROM ogirs.UV_GETTBLPUBSECTION PUB_SECTION
JOIN ogirs.UV_GETTBLPUBSERIES PUB_SERIES
ON PUB_SECTION.SECTIONKEY = PUB_SERIES.SECTIONKEY
JOIN {$db_table} CRS_WEEKLY
ON PUB_SERIES.SOURCEKEY = CRS_WEEKLY.SOURCEKEY
WHERE PUB_SECTION.TABLEKEY = '{$this->data_table['table_key']}'
AND PUB_SERIES.FREQUENCY = '{$this->data_table['period']}'
AND CRS_WEEKLY.WW01DATE = '{$this->data_table['start_date']}'
AND CRS_WEEKLY.WW04DATE = '{$this->data_table['end_date']}'
ORDER BY PUB_SECTION.SECTIONORDER, PUB_SERIES.STUBORDER",
// table body query MONTHLY ----------------------------------------------
// NOTE need to optimize CRS part of this query !!!!!!!!!!!!!!!!!!!!!!!!!!
"SELECT SECTION.SECTIONNAME, SERIES.DISPLAYTEXT, CRS.*
FROM ogirs.UV_GETTBLPUBSECTION SECTION
JOIN ogirs.UV_GETTBLPUBSERIES SERIES
ON SECTION.SECTIONKEY = SERIES.SECTIONKEY
JOIN {$db_table} CRS
ON SERIES.SOURCEKEY = CRS.SOURCEKEY
WHERE SECTION.TABLEKEY = '{$this->data_table['table_key']}'
AND SERIES.FREQUENCY = '{$this->data_table['period']}'
AND CRS.DDMONDAY = '{$this->data_table['ddmonday']}'
ORDER BY SECTION.SECTIONORDER, SERIES.STUBORDER",
"SELECT PUB_SECTION.SECTIONNAME, PUB_SERIES.DISPLAYTEXT, PUB_SERIES.STUBINDENT,
PUB_SERIES.STUBORDER, CRS_WEEKLY.SOURCEKEY, CRS_WEEKLY.YEAR, CRS_WEEKLY.MONTH,
CRS_WEEKLY.WW01DATE, CRS_WEEKLY.WW01,
CRS_WEEKLY.WW02DATE, CRS_WEEKLY.WW02,
CRS_WEEKLY.WW03DATE, CRS_WEEKLY.WW03,
CRS_WEEKLY.WW04DATE, CRS_WEEKLY.WW04,
CRS_WEEKLY.WW05DATE, CRS_WEEKLY.WW05
FROM ogirs.TBLPUBSECTION PUB_SECTION
JOIN ogirs.TBLPUBSERIES PUB_SERIES
ON PUB_SECTION.SECTIONKEY = PUB_SERIES.SECTIONKEY
JOIN ogirs.TBLCRS_WEEKLY CRS_WEEKLY
ON PUB_SERIES.SOURCEKEY = CRS_WEEKLY.SOURCEKEY
WHERE PUB_SECTION.TABLEKEY = '{$this->data_table['table_key']}'
AND PUB_SERIES.FREQUENCY = '{$this->data_table['period']}'
AND CRS_WEEKLY.YEAR>=1983
AND CRS_WEEKLY.SOURCEKEY='{$this->data_table['source_key']}'
ORDER BY CRS_WEEKLY.YEAR DESC,
(CASE
WHEN CRS_WEEKLY.MONTH = 'Jan' THEN 0
WHEN CRS_WEEKLY.MONTH = 'Feb' THEN 1
WHEN CRS_WEEKLY.MONTH = 'Mar' THEN 2
WHEN CRS_WEEKLY.MONTH = 'Apr' THEN 3
WHEN CRS_WEEKLY.MONTH = 'May' THEN 4
WHEN CRS_WEEKLY.MONTH = 'Jun' THEN 5
WHEN CRS_WEEKLY.MONTH = 'Jul' THEN 6
WHEN CRS_WEEKLY.MONTH = 'Aug' THEN 7
WHEN CRS_WEEKLY.MONTH = 'Sep' THEN 8
WHEN CRS_WEEKLY.MONTH = 'Oct' THEN 9
WHEN CRS_WEEKLY.MONTH = 'Nov' THEN 10
WHEN CRS_WEEKLY.MONTH = 'Dec' THEN 11
END)"
);
return $query;
} // end method --------------------------------------------------------------
} // end class -----------------------------------------------------------------
?>
