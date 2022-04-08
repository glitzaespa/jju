const aoijs = require("aoi.js")
const aoimongo = require("aoi.mongo")

const bot = new aoijs.Bot({
token: process.env.TOKEN, //Discord Bot Token
prefix: "$getServerVar[PREFIX]", //Discord Bot Prefix
intents: "all", //Discord Intents
database: {
     db: aoimongo,
     type: "aoi.mongo",
     path: "mongodb+srv://glitzybitch:IRPgTnbQsrdvImJ0@jujju.vkyte.mongodb.net/?w=majority&retryWrites=true"
   }
})

bot.variables({
//DROP
FORCEDROP: "No drop",
DROP: "Drop",
//PROFILE
FAV_GROUP: "No group set.",
//GROUP NAME
"No group set.": "<:JJU_unknown:957370681400651837> Default",
default: "<:JJU_unknown:957370681400651837> Default",
nmixx: "<:JJU_nmixx:957370681560018994> NMIXX",
enhypen: "<:JJU_enhypen:957393538260271154> ENHYPEN",
blackpink: "<:JJU_blackpink:957397108489597008> BLACKPINK",
txt: "<:JJU_txt:959555876937695233> TOMORROW X TOGETHER",
ateez: "<:JJU_ateez:961745655548743690> ATEEZ",
redvelvet: "<:JJU_redvelvet:957400721597272115> Red Velvet",
//CURRENCY
CHESTNUT: "0",
GEMS: "0",
//PREFIX
PREFIX: "!",
//HACK
HACK_CODE: "No code set.",
//ATTENDANCE
Monday_IMAGE: "https://cdn.discordapp.com/attachments/949848002628038727/956305881841168384/MONDAY.png",
Tuesday_IMAGE: "https://cdn.discordapp.com/attachments/949848002628038727/956305881585291303/TUESDAY.png",
Wednesday_IMAGE: "https://cdn.discordapp.com/attachments/949848002628038727/956305881316868216/WEDNESDAY.png",
Thursday_IMAGE: "https://cdn.discordapp.com/attachments/949848002628038727/956305881107136542/THURSDAY.png",
Friday_IMAGE: "https://cdn.discordapp.com/attachments/949848002628038727/956305880872284190/FRIDAY.png",
Saturday_IMAGE: "https://cdn.discordapp.com/attachments/949848002628038727/956305880624795689/SATURDAY.png",
Sunday_IMAGE: "https://cdn.discordapp.com/attachments/949848002628038727/956305880343789598/SUNDAY.png",
//BANNER
BANNER: "\`☆☆☆\` **JJU Bot** Default",
BANNER_IMAGE: "https://cdn.discordapp.com/attachments/953060221205479434/953060425430364250/JJDF_BN.png",
JJDF_BN: "\`☆☆☆☆\` **JJU Bot** Default",
JJDF_BN_IMAGE: "https://cdn.discordapp.com/attachments/953060221205479434/953060425430364250/JJDF_BN.png",
JJDF_BN_STATUS: "Purchased.",
//PROFILE
taeyeon: "<:taeyeon:953054626721198150> TAEYEON",
//DROP COLOR
red: "https://cdn.discordapp.com/attachments/946791137165836361/947615223664222288/reddrop.png",
orange: "https://cdn.discordapp.com/attachments/946791137165836361/947615223462916196/orangedrop.png",
yellow: "https://cdn.discordapp.com/attachments/946791137165836361/947615223274176522/yellowdrop.png",
green: "https://cdn.discordapp.com/attachments/946791137165836361/947615222951198800/greendrop.png",
cyan: "https://cdn.discordapp.com/attachments/946791137165836361/947615222686949506/cyandrop.png",
lightblue: "https://cdn.discordapp.com/attachments/946791137165836361/947615222519181342/lightbluedrop.png",
blue: "https://cdn.discordapp.com/attachments/946791137165836361/947615222238171226/bluedrop.png",
purple: "https://cdn.discordapp.com/attachments/946791137165836361/947615221973934130/purpledrop.png",
pink: "https://cdn.discordapp.com/attachments/946791137165836361/947615221760028733/pinkdrop.png",
white: "https://cdn.discordapp.com/attachments/946791137165836361/947615221571268638/selcadrop.png",
red_CODE: "e81a1a",
orange_CODE: "e8691a",
yellow_CODE: "e5e81a",
green_CODE: "35e81a",
cyan_CODE: "1ae87d",
lightblue_CODE: "1ac2e8",
blue_CODE: "1a27e8",
purple_CODE: "8f1ae8",
pink_CODE: "e81aa7",
white_CODE: "ffffff",
//SPECIAL COLOR
tank_CODE: "7e6eb0",
tank: "https://cdn.discordapp.com/attachments/949848002628038727/960677668922212362/tankdrop.png",
//ENHYPEN
ENHS_2_DA: "0",
ENHS_2_DA_COLOR: "lightblue",
ENHS_2_DA_IDOL: "ENHYPEN Heeseung",
ENHS_2_DA_RARITY: "★★☆",
ENHS_2_DA_THEME: "Dimension: Answer",
ENHS_2_DA_OWNER: "0",
ENHS_2_DA_NAME: "\`★★☆\` **ENHYPEN Heeseung** Dimension: Answer",
ENHS_2_DA_IMAGE: "https://cdn.discordapp.com/attachments/951117179816923227/951117285718896670/jju_theme_12EB667.png",
ENJY_2_DA: "0",
ENJY_2_DA_COLOR: "lightblue",
ENJY_2_DA_IDOL: "ENHYPEN Jay",
ENJY_2_DA_RARITY: "★★☆",
ENJY_2_DA_THEME: "Dimension: Answer",
ENJY_2_DA_OWNER: "0",
ENJY_2_DA_NAME: "\`★★☆\` **ENHYPEN Jay** Dimension: Answer",
ENJY_2_DA_IMAGE: "https://cdn.discordapp.com/attachments/951117179816923227/951117286008315954/jju_theme_AF33A95.png",
ENJK_2_DA: "0",
ENJK_2_DA_COLOR: "lightblue",
ENJK_2_DA_IDOL: "ENHYPEN Jake",
ENJK_2_DA_RARITY: "★★☆",
ENJK_2_DA_THEME: "Dimension: Answer",
ENJK_2_DA_OWNER: "0",
ENJK_2_DA_NAME: "\`★★☆\` **ENHYPEN Jake** Dimension: Answer",
ENJK_2_DA_IMAGE: "https://cdn.discordapp.com/attachments/951117179816923227/951117286390005800/jju_theme_57E10EA.png",
ENSH_2_DA: "0",
ENSH_2_DA_COLOR: "lightblue",
ENSH_2_DA_IDOL: "ENHYPEN Sunghoon",
ENSH_2_DA_RARITY: "★★☆",
ENSH_2_DA_THEME: "Dimension: Answer",
ENSH_2_DA_OWNER: "0",
ENSH_2_DA_NAME: "\`★★☆\` **ENHYPEN Sunghoon** Dimension: Answer",
ENSH_2_DA_IMAGE: "https://cdn.discordapp.com/attachments/951117179816923227/951117286691971123/jju_theme_A57C65E.png",
ENSN_2_DA: "0",
ENSN_2_DA_COLOR: "lightblue",
ENSN_2_DA_IDOL: "ENHYPEN Sunoo",
ENSN_2_DA_RARITY: "★★☆",
ENSN_2_DA_THEME: "Dimension: Answer",
ENSN_2_DA_OWNER: "0",
ENSN_2_DA_NAME: "\`★★☆\` **ENHYPEN Sunoo** Dimension: Answer",
ENSN_2_DA_IMAGE: "https://cdn.discordapp.com/attachments/951117179816923227/951117287010750484/jju_theme_89A0EB3.png",
ENJW_2_DA: "0",
ENJW_2_DA_COLOR: "lightblue",
ENJW_2_DA_IDOL: "ENHYPEN Jungwon",
ENJW_2_DA_RARITY: "★★☆",
ENJW_2_DA_THEME: "Dimension: Answer",
ENJW_2_DA_OWNER: "0",
ENJW_2_DA_NAME: "\`★★☆\` **ENHYPEN Jungwon** Dimension: Answer",
ENJW_2_DA_IMAGE: "https://cdn.discordapp.com/attachments/951117179816923227/951117287367274496/jju_theme_AD239E2.png",
ENNK_2_DA: "0",
ENNK_2_DA_COLOR: "lightblue",
ENNK_2_DA_IDOL: "ENHYPEN Ni-Ki",
ENNK_2_DA_RARITY: "★★☆",
ENNK_2_DA_THEME: "Dimension: Answer",
ENNK_2_DA_OWNER: "0",
ENNK_2_DA_NAME: "\`★★☆\` **ENHYPEN Ni-Ki** Dimension: Answer",
ENNK_2_DA_IMAGE: "https://cdn.discordapp.com/attachments/951117179816923227/951117287723794492/jju_theme_BFC34CC.png",
//BLACKPINK
BPJS_2_HY: "0",
BPJS_2_HY_COLOR: "pink",
BPJS_2_HY_IDOL: "BLACKPINK Jisoo",
BPJS_2_HY_RARITY: "★★☆",
BPJS_2_HY_THEME: "How You Like That",
BPJS_2_HY_OWNER: "0",
BPJS_2_HY_NAME: "\`★★☆\` **BLACKPINK Jisoo** How You Like That",
BPJS_2_HY_IMAGE: "https://cdn.discordapp.com/attachments/954680727721627658/954705290647969792/1647689205028.png",
BPJN_2_HY: "0",
BPJN_2_HY_COLOR: "pink",
BPJN_2_HY_IDOL: "BLACKPINK Jennie",
BPJN_2_HY_RARITY: "★★☆",
BPJN_2_HY_THEME: "How You Like That",
BPJN_2_HY_OWNER: "0",
BPJN_2_HY_NAME: "\`★★☆\` **BLACKPINK Jennie** How You Like That",
BPJN_2_HY_IMAGE: "https://cdn.discordapp.com/attachments/954680727721627658/954705290350190632/1647689360358.png",
BPRS_2_HY: "0",
BPRS_2_HY_COLOR: "pink",
BPRS_2_HY_IDOL: "BLACKPINK Rosé",
BPRS_2_HY_RARITY: "★★☆",
BPRS_2_HY_THEME: "How You Like That",
BPRS_2_HY_OWNER: "0",
BPRS_2_HY_NAME: "\`★★☆\` **BLACKPINK Rosé** How You Like That",
BPRS_2_HY_IMAGE: "https://cdn.discordapp.com/attachments/954680727721627658/954705291365216326/1647689446736.png",
BPLS_2_HY: "0",
BPLS_2_HY_COLOR: "pink",
BPLS_2_HY_IDOL: "BLACKPINK Lisa",
BPLS_2_HY_RARITY: "★★☆",
BPLS_2_HY_THEME: "How You Like That",
BPLS_2_HY_OWNER: "0",
BPLS_2_HY_NAME: "\`★★☆\` **BLACKPINK Lisa** How You Like That",
BPLS_2_HY_IMAGE: "https://cdn.discordapp.com/attachments/954680727721627658/954705291021271060/1647689383822.png",
//RED VELVET
RVIR_2_R2: "0",
RVIR_2_R2_COLOR: "green",
RVIR_2_R2_IDOL: "Red Velvet Irene",
RVIR_2_R2_RARITY: "★★☆",
RVIR_2_R2_THEME: "ReVe Festival: Day 2",
RVIR_2_R2_OWNER: "0",
RVIR_2_R2_NAME: "\`★★☆\` **Red Velvet Irene** ReVe Festival: Day 2",
RVIR_2_R2_IMAGE: "https://cdn.discordapp.com/attachments/957342560932724836/957342722992271480/RVIR_2_R2.png",
RVSG_2_R2: "0",
RVSG_2_R2_COLOR: "green",
RVSG_2_R2_IDOL: "Red Velvet Seulgi",
RVSG_2_R2_RARITY: "★★☆",
RVSG_2_R2_THEME: "ReVe Festival: Day 2",
RVSG_2_R2_OWNER: "0",
RVSG_2_R2_NAME: "\`★★☆\` **Red Velvet Seulgi** ReVe Festival: Day 2",
RVSG_2_R2_IMAGE: "https://cdn.discordapp.com/attachments/957342560932724836/957342723571089448/RVSG_2_R2.png",
RVWD_2_R2: "0",
RVWD_2_R2_COLOR: "green",
RVWD_2_R2_IDOL: "Red Velvet Wendy",
RVWD_2_R2_RARITY: "★★☆",
RVWD_2_R2_THEME: "ReVe Festival: Day 2",
RVWD_2_R2_OWNER: "0",
RVWD_2_R2_NAME: "\`★★☆\` **Red Velvet Wendy** ReVe Festival: Day 2",
RVWD_2_R2_IMAGE: "https://cdn.discordapp.com/attachments/957342560932724836/957342724065996800/RVWD_2_R2.png",
RVJY_2_R2: "0",
RVJY_2_R2_COLOR: "green",
RVJY_2_R2_IDOL: "Red Velvet Joy",
RVJY_2_R2_RARITY: "★★☆",
RVJY_2_R2_THEME: "ReVe Festival: Day 2",
RVJY_2_R2_OWNER: "0",
RVJY_2_R2_NAME: "\`★★☆\` **Red Velvet Joy** ReVe Festival: Day 2",
RVJY_2_R2_IMAGE: "https://cdn.discordapp.com/attachments/957342560932724836/957342723281653870/RVJY_2_R2.png",
RVYR_2_R2: "0",
RVYR_2_R2_COLOR: "green",
RVYR_2_R2_IDOL: "Red Velvet Yeri",
RVYR_2_R2_RARITY: "★★☆",
RVYR_2_R2_THEME: "ReVe Festival: Day 2",
RVYR_2_R2_OWNER: "0",
RVYR_2_R2_NAME: "\`★★☆\` **Red Velvet Yeri** ReVe Festival: Day 2",
RVYR_2_R2_IMAGE: "https://cdn.discordapp.com/attachments/957342560932724836/957342724376387614/RVYR_2_R2.png",
//TXT
TXYJ_2_CY: "0",
TXYJ_2_CY_COLOR: "orange",
TXYJ_2_CY_IDOL: "TOMORROW X TOGETHER Yeonjun",
TXYJ_2_CY_RARITY: "★★☆",
TXYJ_2_CY_THEME: "Can't You See Me",
TXYJ_2_CY_OWNER: "0",
TXYJ_2_CY_NAME: "\`★★☆\` **TOMORROW X TOGETHER Yeonjun** Can't You See Me",
TXYJ_2_CY_IMAGE: "https://cdn.discordapp.com/attachments/954674970808688650/954705143989944370/1647689608380.png",
TXSB_2_CY: "0",
TXSB_2_CY_COLOR: "orange",
TXSB_2_CY_IDOL: "TOMORROW X TOGETHER Soobin",
TXSB_2_CY_RARITY: "★★☆",
TXSB_2_CY_THEME: "Can't You See Me",
TXSB_2_CY_OWNER: "0",
TXSB_2_CY_NAME: "\`★★☆\` **TOMORROW X TOGETHER Soobin** Can't You See Me",
TXSB_2_CY_IMAGE: "https://cdn.discordapp.com/attachments/954674970808688650/954705144254177350/1647689634879.png",
TXHK_2_CY: "0",
TXHK_2_CY_COLOR: "orange",
TXHK_2_CY_IDOL: "TOMORROW X TOGETHER Huening Kai",
TXHK_2_CY_RARITY: "★★☆",
TXHK_2_CY_THEME: "Can't You See Me",
TXHK_2_CY_OWNER: "0",
TXHK_2_CY_NAME: "\`★★☆\` **TOMORROW X TOGETHER Huening Kai** Can't You See Me",
TXHK_2_CY_IMAGE: "https://cdn.discordapp.com/attachments/954674970808688650/954705145336311868/1647689720302.png",
TXTH_2_CY: "0",
TXTH_2_CY_COLOR: "orange",
TXTH_2_CY_IDOL: "TOMORROW X TOGETHER Taehyun",
TXTH_2_CY_RARITY: "★★☆",
TXTH_2_CY_THEME: "Can't You See Me",
TXTH_2_CY_OWNER: "0",
TXTH_2_CY_NAME: "\`★★☆\` **TOMORROW X TOGETHER Taehyun** Can't You See Me",
TXTH_2_CY_IMAGE: "https://cdn.discordapp.com/attachments/954674970808688650/954705144874926170/1647689688753.png",
TXBG_2_CY: "0",
TXBG_2_CY_COLOR: "orange",
TXBG_2_CY_IDOL: "TOMORROW X TOGETHER Beomgyu",
TXBG_2_CY_RARITY: "★★☆",
TXBG_2_CY_THEME: "Can't You See Me",
TXBG_2_CY_OWNER: "0",
TXBG_2_CY_NAME: "\`★★☆\` **TOMORROW X TOGETHER Beomgyu** Can't You See Me",
TXBG_2_CY_IMAGE: "https://cdn.discordapp.com/attachments/954674970808688650/954705144535220244/1647689662873.png",
//NMIXX
NMLL_3_TA: "0",
NMLL_3_TA_COLOR: "tank",
NMLL_3_TA_IDOL: "NMIXX Lily",
NMLL_3_TA_RARITY: "★★★",
NMLL_3_TA_THEME: "占 (TANK)",
NMLL_3_TA_OWNER: "0",
NMLL_3_TA_NAME: "\`★★★\` **NMIXX Lily** 占 (TANK)",
NMLL_3_TA_IMAGE: "https://cdn.discordapp.com/attachments/960234260697059328/960234480797384744/NMLI_3_TN.png",
NMBA_3_TA: "0",
NMBA_3_TA_COLOR: "tank",
NMBA_3_TA_IDOL: "NMIXX Bae",
NMBA_3_TA_RARITY: "★★★",
NMBA_3_TA_THEME: "占 (TANK)",
NMBA_3_TA_OWNER: "0",
NMBA_3_TA_NAME: "\`★★★\` **NMIXX Bae** 占 (TANK)",
NMBA_3_TA_IMAGE: "https://cdn.discordapp.com/attachments/960234260697059328/960234479174184990/NMBA_3_TN.png",
NMHW_3_TA: "0",
NMHW_3_TA_COLOR: "tank",
NMHW_3_TA_IDOL: "NMIXX Haewon",
NMHW_3_TA_RARITY: "★★★",
NMHW_3_TA_THEME: "占 (TANK)",
NMHW_3_TA_OWNER: "0",
NMHW_3_TA_NAME: "\`★★★\` **NMIXX Haewon** 占 (TANK)",
NMHW_3_TA_IMAGE: "https://cdn.discordapp.com/attachments/960234260697059328/960234479471976468/NMHW_3_TN.png",
NMJN_3_TA: "0",
NMJN_3_TA_COLOR: "tank",
NMJN_3_TA_IDOL: "NMIXX Jinny",
NMJN_3_TA_RARITY: "★★★",
NMJN_3_TA_THEME: "占 (TANK)",
NMJN_3_TA_OWNER: "0",
NMJN_3_TA_NAME: "\`★★★\` **NMIXX Jinny** 占 (TANK)",
NMJN_3_TA_IMAGE: "https://cdn.discordapp.com/attachments/960234260697059328/960234479778136084/NMJN_3_TN.png",
NMJW_3_TA: "0",
NMJW_3_TA_COLOR: "tank",
NMJW_3_TA_IDOL: "NMIXX Jiwoo",
NMJW_3_TA_RARITY: "★★★",
NMJW_3_TA_THEME: "占 (TANK)",
NMJW_3_TA_OWNER: "0",
NMJW_3_TA_NAME: "\`★★★\` **NMIXX Jiwoo** 占 (TANK)",
NMJW_3_TA_IMAGE: "https://cdn.discordapp.com/attachments/960234260697059328/960234480147238922/NMJW_3_TN.png",
NMKJ_3_TA: "0",
NMKJ_3_TA_COLOR: "tank",
NMKJ_3_TA_IDOL: "NMIXX Kyujin",
NMKJ_3_TA_RARITY: "★★★",
NMKJ_3_TA_THEME: "占 (TANK)",
NMKJ_3_TA_OWNER: "0",
NMKJ_3_TA_NAME: "\`★★★\` **NMIXX Kyujin** 占 (TANK)",
NMKJ_3_TA_IMAGE: "https://cdn.discordapp.com/attachments/960234260697059328/960234480503758878/NMKJ_3_TN.png",
NMSY_3_TA: "0",
NMSY_3_TA_COLOR: "tank",
NMSY_3_TA_IDOL: "NMIXX Sullyoon",
NMSY_3_TA_RARITY: "★★★",
NMSY_3_TA_THEME: "占 (TANK)",
NMSY_3_TA_OWNER: "0",
NMSY_3_TA_NAME: "\`★★★\` **NMIXX Sullyoon** 占 (TANK)",
NMSY_3_TA_IMAGE: "https://cdn.discordapp.com/attachments/960234260697059328/960234481095159888/NMSY_3_TN.png",
//ATEEZ
ATYH_2_FE: `0`,
ATYH_2_FE_COLOR: `white`,
ATYH_2_FE_IDOL: `ATEEZ Yunho`,
ATYH_2_FE_RARITY: `★★☆`,
ATYH_2_FE_THEME: `Fever: Epilogue`,
ATYH_2_FE_OWNER: `0`,
ATYH_2_FE_NAME: `\`★★☆\` **ATEEZ Yunho** Fever: Epilogue`,
ATYH_2_FE_IMAGE: `https://cdn.discordapp.com/attachments/961201161401147464/961201216233287690/jju_theme_77032EF.png`,
ATWY_2_FE: `0`,	
ATWY_2_FE_COLOR: `white`,	
ATWY_2_FE_IDOL: `ATEEZ Wooyoung`,	
ATWY_2_FE_RARITY: `★★☆`,	
ATWY_2_FE_THEME: `Fever: Epilogue`,	
ATWY_2_FE_OWNER: `0`,	
ATWY_2_FE_NAME: `\`★★☆\` **ATEEZ Wooyoung** Fever: Epilogue`,	
ATWY_2_FE_IMAGE: `https://cdn.discordapp.com/attachments/961201161401147464/961201216531071036/jju_theme_99CDE71.png`,	
ATJH_2_FE: `0`,
ATJH_2_FE_COLOR: `white`,
ATJH_2_FE_IDOL: `ATEEZ Jongho`,
ATJH_2_FE_RARITY: `★★☆`,
ATJH_2_FE_THEME: `Fever: Epilogue`,
ATJH_2_FE_OWNER: `0`,
ATJH_2_FE_NAME: `\`★★☆\` **ATEEZ Jongho** Fever: Epilogue`,
ATJH_2_FE_IMAGE: `https://cdn.discordapp.com/attachments/961201161401147464/961201216828891146/jju_theme_755159B.png`,
ATSN_2_FE: `0`,
ATSN_2_FE_COLOR: `white`,
ATSN_2_FE_IDOL: `ATEEZ San`,
ATSN_2_FE_RARITY: `★★☆`,
ATSN_2_FE_THEME: `Fever: Epilogue`,
ATSN_2_FE_OWNER: `0`,
ATSN_2_FE_NAME: `\`★★☆\` **ATEEZ San** Fever: Epilogue`,
ATSN_2_FE_IMAGE: `https://cdn.discordapp.com/attachments/961201161401147464/961201228476461147/jju_theme_BAED96E.png`,
ATMG_2_FE: `0`,
ATMG_2_FE_COLOR: `white`,
ATMG_2_FE_IDOL: `ATEEZ Mingi`,
ATMG_2_FE_RARITY: `★★☆`,
ATMG_2_FE_THEME: `Fever: Epilogue`,
ATMG_2_FE_OWNER: `0`,
ATMG_2_FE_NAME: `\`★★☆\` **ATEEZ Mingi** Fever: Epilogue`,
ATMG_2_FE_IMAGE: `https://cdn.discordapp.com/attachments/961201161401147464/961201228795240468/jju_theme_B0AFB83.png`,
ATSH_2_FE: `0`,
ATSH_2_FE_COLOR: `white`,
ATSH_2_FE_IDOL: `ATEEZ Seonghwa`,
ATSH_2_FE_RARITY: `★★☆`,
ATSH_2_FE_THEME: `Fever: Epilogue`,
ATSH_2_FE_OWNER: `0`,
ATSH_2_FE_NAME: `\`★★☆\` **ATEEZ Seonghwa** Fever: Epilogue`,
ATSH_2_FE_IMAGE: `https://cdn.discordapp.com/attachments/961201161401147464/961201229126594560/jju_theme_0CDF5D0.png`,
ATYS_2_FE: `0`,
ATYS_2_FE_COLOR: `white`,
ATYS_2_FE_IDOL: `ATEEZ Yeosang`,
ATYS_2_FE_RARITY: `★★☆`,
ATYS_2_FE_THEME: `Fever: Epilogue`,
ATYS_2_FE_OWNER: `0`,
ATYS_2_FE_NAME: `\`★★☆\` **ATEEZ Yeosang** Fever: Epilogue`,
ATYS_2_FE_IMAGE: `https://cdn.discordapp.com/attachments/961201161401147464/961201237880078366/jju_theme_1B7F039.png`,
ATHJ_2_FE: `0`,
ATHJ_2_FE_COLOR: `white`,
ATHJ_2_FE_IDOL: `ATEEZ Hongjoong`,
ATHJ_2_FE_RARITY: `★★☆`,
ATHJ_2_FE_THEME: `Fever: Epilogue`,
ATHJ_2_FE_OWNER: `0`,
ATHJ_2_FE_NAME: `\`★★☆\` **ATEEZ Hongjoong** Fever: Epilogue`,
ATHJ_2_FE_IMAGE: `https://cdn.discordapp.com/attachments/961201161401147464/961201238257569802/jju_theme_F456D9A.png`,
//AESPA
AEKR_1_FR: `0`,
AEKR_1_FR_COLOR: `white`,
AEKR_1_FR_IDOL: `æspa Karina`,
AEKR_1_FR_RARITY: `★☆☆`,
AEKR_1_FR_THEME: `Forever`,
AEKR_1_FR_OWNER: `0`,
AEKR_1_FR_NAME: `\`★☆☆\` **æspa Karina** Forever`,
AEKR_1_FR_IMAGE: `https://cdn.discordapp.com/attachments/957843176352252065/957843313703125062/Untitled36_20220328112630.png`,
AEWT_1_FR: `0`,
AEWT_1_FR_COLOR: `white`,
AEWT_1_FR_IDOL: `æspa Winter`,
AEWT_1_FR_RARITY: `★☆☆`,
AEWT_1_FR_THEME: `Forever`,
AEWT_1_FR_OWNER: `0`,
AEWT_1_FR_NAME: `\`★☆☆\` **æspa Winter** Forever`,
AEWT_1_FR_IMAGE: `https://cdn.discordapp.com/attachments/957843176352252065/957843314084827157/Untitled36_20220328112623.png`,
AEGS_1_FR: `0`,
AEGS_1_FR_COLOR: `white`,
AEGS_1_FR_IDOL: `æspa Giselle`,
AEGS_1_FR_RARITY: `★☆☆`,
AEGS_1_FR_THEME: `Forever`,
AEGS_1_FR_OWNER: `0`,
AEGS_1_FR_NAME: `\`★☆☆\` **æspa Giselle** Forever`,
AEGS_1_FR_IMAGE: `https://cdn.discordapp.com/attachments/957843176352252065/957843314399383562/Untitled36_20220328112615.png`,
AENN_1_FR: `0`,
AENN_1_FR_COLOR: `white`,
AENN_1_FR_IDOL: `æspa Ningning`,
AENN_1_FR_RARITY: `★☆☆`,
AENN_1_FR_THEME: `Forever`,
AENN_1_FR_OWNER: `0`,
AENN_1_FR_NAME: `\`★☆☆\` **æspa Ningning** Forever`,
AENN_1_FR_IMAGE: `https://cdn.discordapp.com/attachments/957843176352252065/957843314730729502/Untitled36_20220328112607.png`,
//NCT DREAM
NCDRJ_1_GM: `0`,
NCDRJ_1_GM_COLOR: `white`,
NCDRJ_1_GM_IDOL: `NCT Dream Renjun`,
NCDRJ_1_GM_RARITY: `★☆☆`,
NCDRJ_1_GM_THEME: `Glitch Mode`,
NCDRJ_1_GM_OWNER: `0`,
NCDRJ_1_GM_NAME: `\`★☆☆\` **NCT Dream Renjun** Glitch Mode`,
NCDRJ_1_GM_IMAGE: `https://cdn.discordapp.com/attachments/954681718596571157/961528706982101002/jju_one_star_01E4793.png`,
NCDMR_1_GM: `0`,
NCDMR_1_GM_COLOR: `white`,
NCDMR_1_GM_IDOL: `NCT Dream Mark`,
NCDMR_1_GM_RARITY: `★☆☆`,
NCDMR_1_GM_THEME: `Glitch Mode`,
NCDMR_1_GM_OWNER: `0`,
NCDMR_1_GM_NAME: `\`★☆☆\` **NCT Dream Mark** Glitch Mode`,
NCDMR_1_GM_IMAGE: `https://cdn.discordapp.com/attachments/954681718596571157/961528705841233950/jju_one_star_08B099C.png`,
NCDCL_1_GM: `0`,
NCDCL_1_GM_COLOR: `white`,
NCDCL_1_GM_IDOL: `NCT Dream Chenle`,
NCDCL_1_GM_RARITY: `★☆☆`,
NCDCL_1_GM_THEME: `Glitch Mode`,
NCDCL_1_GM_OWNER: `0`,
NCDCL_1_GM_NAME: `\`★☆☆\` **NCT Dream Chenle** Glitch Mode`,
NCDCL_1_GM_IMAGE: `https://cdn.discordapp.com/attachments/954681718596571157/961528706164207696/jju_one_star_57C8F7C.png`,
NCDJM_1_GM: `0`,
NCDJM_1_GM_COLOR: `white`,
NCDJM_1_GM_IDOL: `NCT Dream Jaemin`,
NCDJM_1_GM_RARITY: `★☆☆`,
NCDJM_1_GM_THEME: `Glitch Mode`,
NCDJM_1_GM_OWNER: `0`,
NCDJM_1_GM_NAME: `\`★☆☆\` **NCT Dream Jaemin** Glitch Mode`,
NCDJM_1_GM_IMAGE: `https://cdn.discordapp.com/attachments/954681718596571157/961528706432659456/jju_one_star_5FCC3B1.png`,
NCDHC_1_GM: `0`,
NCDHC_1_GM_COLOR: `white`,
NCDHC_1_GM_IDOL: `NCT Dream Haechan`,
NCDHC_1_GM_RARITY: `★☆☆`,
NCDHC_1_GM_THEME: `Glitch Mode`,
NCDHC_1_GM_OWNER: `0`,
NCDHC_1_GM_NAME: `\`★☆☆\` **NCT Dream Haechan** Glitch Mode`,
NCDHC_1_GM_IMAGE: `https://cdn.discordapp.com/attachments/954681718596571157/961528706705285170/jju_one_star_0EAB1E5.png`,
NCDJN_1_GM: `0`,
NCDJN_1_GM_COLOR: `white`,
NCDJN_1_GM_IDOL: `NCT Dream Jeno`,
NCDJN_1_GM_RARITY: `★☆☆`,
NCDJN_1_GM_THEME: `Glitch Mode`,
NCDJN_1_GM_OWNER: `0`,
NCDJN_1_GM_NAME: `\`★☆☆\` **NCT Dream Jeno** Glitch Mode`,
NCDJN_1_GM_IMAGE: `https://cdn.discordapp.com/attachments/954681718596571157/961528707212783646/jju_one_star_31E494B.png`,
NCDJS_1_GM: `0`,
NCDJS_1_GM_COLOR: `white`,
NCDJS_1_GM_IDOL: `NCT Dream Jisung`,
NCDJS_1_GM_RARITY: `★☆☆`,
NCDJS_1_GM_THEME: `Glitch Mode`,
NCDJS_1_GM_OWNER: `0`,
NCDJS_1_GM_NAME: `\`★☆☆\` **NCT Dream Jisung** Glitch Mode`,
NCDJS_1_GM_IMAGE: `https://cdn.discordapp.com/attachments/954681718596571157/961528707481227284/jju_one_star_477A1BC.png`,
})

//Events

bot.onMessage()

//Ready Event

bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})

const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd,'./commands/') 
