import { ChainId } from "@xxdex/chains";
import { ERC20Token, WETH9 } from "@xxdex/sdk";

import { CAKE, USDC, USDT, WBTC_ETH } from "./common";

export const ethereumTokens = {
    weth: WETH9[ChainId.ETHEREUM],
    usdt: USDT[ChainId.ETHEREUM],
    usdc: USDC[ChainId.ETHEREUM],
    wbtc: WBTC_ETH,
    sdao: new ERC20Token(
        ChainId.ETHEREUM,
        "0x993864E43Caa7F7F12953AD6fEb1d1Ca635B875F",
        18,
        "SDAO",
        "Singularity Dao",
        "https://www.singularitydao.ai/"
    ),
    stg: new ERC20Token(
        ChainId.ETHEREUM,
        "0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6",
        18,
        "STG",
        "StargateToken",
        "https://stargate.finance/"
    ),
    fuse: new ERC20Token(
        ChainId.ETHEREUM,
        "0x970B9bB2C0444F5E81e9d0eFb84C8ccdcdcAf84d",
        18,
        "FUSE",
        "Fuse Token",
        "https://fuse.io/"
    ),
    caps: new ERC20Token(
        ChainId.ETHEREUM,
        "0x03Be5C903c727Ee2C8C4e9bc0AcC860Cca4715e2",
        18,
        "CAPS",
        "Capsule Coin",
        "https://www.ternoa.network/en"
    ),
    cake: CAKE[ChainId.ETHEREUM],
    dai: new ERC20Token(
        ChainId.ETHEREUM,
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        18,
        "DAI",
        "Dai Stablecoin",
        "https://www.makerdao.com/"
    ),
    ldo: new ERC20Token(
        ChainId.ETHEREUM,
        "0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32",
        18,
        "LDO",
        "Lido DAO Token",
        "https://lido.fi/"
    ),
    wstETH: new ERC20Token(
        ChainId.ETHEREUM,
        "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
        18,
        "wstETH",
        "Wrapped liquid staked Ether 2.0",
        "https://lido.fi/"
    ),
    link: new ERC20Token(
        ChainId.ETHEREUM,
        "0x514910771AF9Ca656af840dff83E8264EcF986CA",
        18,
        "LINK",
        "ChainLink Token",
        "https://chain.link/"
    ),
    matic: new ERC20Token(
        ChainId.ETHEREUM,
        "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
        18,
        "MATIC",
        "Matic Token",
        "https://polygon.technology/"
    ),
    cbEth: new ERC20Token(
        ChainId.ETHEREUM,
        "0xBe9895146f7AF43049ca1c1AE358B0541Ea49704",
        18,
        "cbETH",
        "Coinbase Wrapped Staked ETH",
        "https://www.coinbase.com/cbeth"
    ),
    ape: new ERC20Token(
        ChainId.ETHEREUM,
        "0x4d224452801ACEd8B2F0aebE155379bb5D594381",
        18,
        "APE",
        "ApeCoin",
        "https://apecoin.com/"
    ),
    alcx: new ERC20Token(
        ChainId.ETHEREUM,
        "0xdBdb4d16EdA451D0503b854CF79D55697F90c8DF",
        18,
        "ALCX",
        "Alchemix",
        "https://alchemix.fi/"
    ),
    alETH: new ERC20Token(
        ChainId.ETHEREUM,
        "0x0100546F2cD4C9D97f798fFC9755E47865FF7Ee6",
        18,
        "alETH",
        "Alchemix ETH",
        "https://alchemix.fi/"
    ),
    fxs: new ERC20Token(
        ChainId.ETHEREUM,
        "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
        18,
        "FXS",
        "Frax Share",
        "https://frax.finance/"
    ),
    frxETH: new ERC20Token(
        ChainId.ETHEREUM,
        "0x5E8422345238F34275888049021821E8E08CAa1f",
        18,
        "frxETH",
        "Frax Ether",
        "https://frax.finance/"
    ),
    rpl: new ERC20Token(
        ChainId.ETHEREUM,
        "0xD33526068D116cE69F19A9ee46F0bd304F21A51f",
        18,
        "RPL",
        "Rocket Pool",
        "https://rocketpool.net/"
    ),
    rETH: new ERC20Token(
        ChainId.ETHEREUM,
        "0xae78736Cd615f374D3085123A210448E74Fc6393",
        18,
        "rETH",
        "Rocket Pool ETH",
        "https://rocketpool.net/"
    ),
    ankrETH: new ERC20Token(
        ChainId.ETHEREUM,
        "0xE95A203B1a91a908F9B9CE46459d101078c2c3cb",
        18,
        "ankrETH",
        "Ankr Staked ETH",
        "https://www.ankr.com/"
    ),
    axl: new ERC20Token(
        ChainId.ETHEREUM,
        "0x467719aD09025FcC6cF6F8311755809d45a5E5f3",
        6,
        "AXL",
        "Axelar",
        "https://axelar.network/"
    ),
    mask: new ERC20Token(
        ChainId.ETHEREUM,
        "0x69af81e73A73B40adF4f3d4223Cd9b1ECE623074",
        18,
        "MASK",
        "Mask Network",
        "https://mask.io/"
    ),
    wncg: new ERC20Token(
        ChainId.ETHEREUM,
        "0xf203Ca1769ca8e9e8FE1DA9D147DB68B6c919817",
        18,
        "WNCG",
        "Wrapped NCG",
        "https://nine-chronicles.com/"
    ),
    ush: new ERC20Token(
        ChainId.ETHEREUM,
        "0xE60779CC1b2c1d0580611c526a8DF0E3f870EC48",
        18,
        "USH",
        "unshETHing_Token",
        "https://unsheth.xyz/"
    ),
    unshETH: new ERC20Token(
        ChainId.ETHEREUM,
        "0x0Ae38f7E10A43B5b2fB064B42a2f4514cbA909ef",
        18,
        "unshETH",
        "unshETH Ether",
        "https://unsheth.xyz/"
    ),
    wbeth: new ERC20Token(
        ChainId.ETHEREUM,
        "0xa2E3356610840701BDf5611a53974510Ae27E2e1",
        18,
        "wBETH",
        "Wrapped Binance Beacon ETH",
        "https://ethereum.org/en/roadmap/beacon-chain/"
    ),
    pepe: new ERC20Token(
        ChainId.ETHEREUM,
        "0x6982508145454Ce325dDbE47a25d4ec3d2311933",
        18,
        "PEPE",
        "Pepe",
        "https://www.pepe.vip/"
    ),
    blur: new ERC20Token(
        ChainId.ETHEREUM,
        "0x5283D291DBCF85356A21bA090E6db59121208b44",
        18,
        "BLUR",
        "Blur",
        "https://blur.io/"
    ),
    ens: new ERC20Token(
        ChainId.ETHEREUM,
        "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72",
        18,
        "ENS",
        "Ethereum Name Service",
        "https://ens.domains/"
    ),
    tusd: new ERC20Token(
        ChainId.ETHEREUM,
        "0x0000000000085d4780B73119b644AE5ecd22b376",
        18,
        "TUSD",
        "TrueUSD",
        "https://tusd.io/"
    ),
    canto: new ERC20Token(
        ChainId.ETHEREUM,
        "0x56C03B8C4FA80Ba37F5A7b60CAAAEF749bB5b220",
        18,
        "CANTO",
        "Canto",
        "https://tusd.io/"
    ),
    pendle: new ERC20Token(
        ChainId.ETHEREUM,
        "0x808507121B80c02388fAd14726482e061B8da827",
        18,
        "PENDLE",
        "Pendle",
        "https://www.pendle.finance/"
    ),
    wld: new ERC20Token(
        ChainId.ETHEREUM,
        "0x163f8C2467924be0ae7B5347228CABF260318753",
        18,
        "WLD",
        "Worldcoin",
        "https://worldcoin.org/"
    ),
    wom: new ERC20Token(
        ChainId.ETHEREUM,
        "0xc0B314a8c08637685Fc3daFC477b92028c540CFB",
        18,
        "WOM",
        "Wombat Token",
        "https://www.wombat.exchange/"
    ),
    cyber: new ERC20Token(
        ChainId.ETHEREUM,
        "0x14778860E937f509e651192a90589dE711Fb88a9",
        18,
        "CYBER",
        "CyberConnect",
        "https://cyberconnect.me/"
    ),
    woo: new ERC20Token(
        ChainId.ETHEREUM,
        "0x4691937a7508860F876c9c0a2a617E7d9E945D4B",
        18,
        "WOO",
        "Wootrade Network",
        "https://woo.network"
    ),
    pyusd: new ERC20Token(
        ChainId.ETHEREUM,
        "0x6c3ea9036406852006290770BEdFcAbA0e23A0e8",
        6,
        "PYUSD",
        "PayPal USD",
        "https://www.paypal.com/pyusd"
    ),
    roci: new ERC20Token(
        ChainId.ETHEREUM,
        "0xF51092Fe93B4E9282f42c459F05D93D2D079549e",
        18,
        "ROCI",
        "RociFi",
        "https://roci.fi/"
    ),
    ethx: new ERC20Token(
        ChainId.ETHEREUM,
        "0xA35b1B31Ce002FBF2058D22F30f95D405200A15b",
        18,
        "ETHx",
        "ETHx",
        "https://www.staderlabs.com/"
    ),
    meme: new ERC20Token(
        ChainId.ETHEREUM,
        "0xb131f4A55907B10d1F0A50d8ab8FA09EC342cd74",
        18,
        "MEME",
        "Memecoin",
        "https://www.memecoin.org/"
    ),
    btrfly: new ERC20Token(
        ChainId.ETHEREUM,
        "0xc55126051B22eBb829D00368f4B12Bde432de5Da",
        18,
        "BTRFLY",
        "BTRFLY",
        "https://www.redactedcartel.xyz/"
    ),
    sdt: new ERC20Token(
        ChainId.ETHEREUM,
        "0x73968b9a57c6E53d41345FD57a6E6ae27d6CDB2F",
        18,
        "SDT",
        "Stake DAO Token",
        "https://www.stakedao.org/"
    ),
    eura: new ERC20Token(
        ChainId.ETHEREUM,
        "0x1a7e4e63778B4f12a199C062f3eFdD288afCBce8",
        18,
        "EURA",
        "EURA (previously agEUR)",
        "https://angle.money/"
    ),
    insp: new ERC20Token(
        ChainId.ETHEREUM,
        "0x186eF81fd8E77EEC8BfFC3039e7eC41D5FC0b457",
        18,
        "INSP",
        "Inspect",
        "https://www.inspect.xyz/"
    ),
    id: new ERC20Token(
        ChainId.ETHEREUM,
        "0x2dfF88A56767223A5529eA5960Da7A3F5f766406",
        18,
        "ID",
        "SPACE ID",
        "https://space.id/"
    ),
    bonk: new ERC20Token(
        ChainId.ETHEREUM,
        "0x1151CB3d861920e07a38e03eEAd12C32178567F6",
        5,
        "BONK",
        "BONK",
        "https://bonkcoin.com"
    ),
    aioz: new ERC20Token(
        ChainId.ETHEREUM,
        "0x626E8036dEB333b408Be468F951bdB42433cBF18",
        18,
        "AIOZ",
        "AIOZ Network",
        "https://aioz.network/"
    ),
    swETH: new ERC20Token(
        ChainId.ETHEREUM,
        "0xf951E335afb289353dc249e82926178EaC7DEd78",
        18,
        "swETH",
        "swETH",
        "https://www.swellnetwork.io/"
    ),
    osak: new ERC20Token(
        ChainId.ETHEREUM,
        "0xa21Af1050F7B26e0cfF45ee51548254C41ED6b5c",
        18,
        "OSAK",
        "Osaka Protocol",
        "https://osaka.win/"
    ),
    ords: new ERC20Token(
        ChainId.ETHEREUM,
        "0x8AB2ff0116A279a99950C66A12298962D152B83c",
        18,
        "ORDS",
        "Ordiswap",
        "https://ordiswap.fi/"
    ),
    pxETH: new ERC20Token(
        ChainId.ETHEREUM,
        "0x04C154b66CB340F3Ae24111CC767e0184Ed00Cc6",
        18,
        "pxETH",
        "Pirex Ether",
        "https://dineroismoney.com/"
    ),
    weETH: new ERC20Token(
        ChainId.ETHEREUM,
        "0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee",
        18,
        "weETH",
        "Wrapped eETH",
        "https://www.ether.fi/"
    ),
    pandora: new ERC20Token(
        ChainId.ETHEREUM,
        "0x9E9FbDE7C7a83c43913BddC8779158F1368F0413",
        18,
        "PANDORA",
        "Pandora",
        "https://www.ether.fi/"
    ),
    pixel: new ERC20Token(
        ChainId.ETHEREUM,
        "0x3429d03c6F7521AeC737a0BBF2E5ddcef2C3Ae31",
        18,
        "PIXEL",
        "PIXEL",
        "https://www.pixels.xyz/"
    ),
    xrgb: new ERC20Token(
        ChainId.ETHEREUM,
        "0x5cc5E64AB764A0f1E97F23984E20fD4528356a6a",
        18,
        "XRGB",
        "XRGB",
        "https://xrgb.xyz/"
    ),
    mswETH: new ERC20Token(
        ChainId.ETHEREUM,
        "0x32bd822d615A3658A68b6fDD30c2fcb2C996D678",
        18,
        "mswETH",
        "mswETH",
        "https://www.eigenlayer.magpiexyz.io/restake"
    ),
    mstETH: new ERC20Token(
        ChainId.ETHEREUM,
        "0x49446A0874197839D15395B908328a74ccc96Bc0",
        18,
        "mstETH",
        "mstETH",
        "https://www.eigenlayer.magpiexyz.io/restake"
    ),
    nmt: new ERC20Token(
        ChainId.ETHEREUM,
        "0x03AA6298F1370642642415EDC0db8b957783e8D6",
        18,
        "NMT",
        "NetMind Token",
        "https://power.netmind.ai/"
    ),
    rswETH: new ERC20Token(
        ChainId.ETHEREUM,
        "0xFAe103DC9cf190eD75350761e95403b7b8aFa6c0",
        18,
        "rswETH",
        "rswETH",
        "https://www.swellnetwork.io/"
    ),
    masa: new ERC20Token(
        ChainId.ETHEREUM,
        "0x944824290CC12F31ae18Ef51216A223Ba4063092",
        18,
        "MASA",
        "Masa Token",
        "https://www.masa.finance/"
    ),
    mnt: new ERC20Token(
        ChainId.ETHEREUM,
        "0x3c3a81e81dc49A522A592e7622A7E711c06bf354",
        18,
        "MNT",
        "Mantle",
        "https://www.mantle.xyz/"
    ),
    mETH: new ERC20Token(
        ChainId.ETHEREUM,
        "0xd5F7838F5C461fefF7FE49ea5ebaF7728bB0ADfa",
        18,
        "mETH",
        "Mantle Staked Ether",
        "https://www.mantle.xyz/"
    ),
    blb: new ERC20Token(
        ChainId.ETHEREUM,
        "0x904f36d74bED2Ef2729Eaa1c7A5B70dEA2966a02",
        18,
        "BLB",
        "Blueberry",
        "https://www.blueberry.garden/"
    ),
    taiko: new ERC20Token(
        ChainId.ETHEREUM,
        "0x10dea67478c5F8C5E2D90e5E9B26dBe60c54d800",
        18,
        "TAIKO",
        "Taiko Token",
        "https://taiko.xyz/"
    ),
    zro: new ERC20Token(
        ChainId.ETHEREUM,
        "0x6985884C4392D348587B19cb9eAAf157F13271cd",
        18,
        "ZRO",
        "LayerZero",
        "https://www.layerzero.foundation/"
    ),
    deusd: new ERC20Token(
        ChainId.ETHEREUM,
        "0x15700B564Ca08D9439C58cA5053166E8317aa138",
        18,
        "deUSD",
        "Elixir deUSD",
        "https://www.elixir.xyz/"
    ),
    usde: new ERC20Token(
        ChainId.ETHEREUM,
        "0x4c9EDD5852cd905f086C759E8383e09bff1E68B3",
        18,
        "USDe",
        "Ethena USDe",
        "https://ethena.fi/"
    ),
    usd0: new ERC20Token(
        ChainId.ETHEREUM,
        "0x73A15FeD60Bf67631dC6cd7Bc5B6e8da8190aCF5",
        18,
        "USD0",
        "Usual USD",
        "https://usual.money/"
    ),
    swBTC: new ERC20Token(
        ChainId.ETHEREUM,
        "0x8DB2350D78aBc13f5673A411D4700BCF87864dDE",
        8,
        "swBTC",
        "swBTC",
        "https://www.swellnetwork.io/"
    ),
    mBtc: new ERC20Token(
        ChainId.ETHEREUM,
        "0xbDf245957992bfBC62B07e344128a1EEc7b7eE3f",
        8,
        "mBTC",
        "Babypie BTC",
        "https://www.babylon.magpiexyz.io"
    ),
    order: new ERC20Token(
        ChainId.ETHEREUM,
        "0xABD4C63d2616A5201454168269031355f4764337",
        18,
        "ORDER",
        "Orderly Network",
        "https://orderly.network/"
    ),
    cbBTC: new ERC20Token(
        ChainId.ETHEREUM,
        "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
        8,
        "cbBTC",
        "Coinbase Wrapped BTC",
        "https://www.coinbase.com/"
    ),
    eigen: new ERC20Token(
        ChainId.ETHEREUM,
        "0xec53bF9167f50cDEB3Ae105f56099aaaB9061F83",
        18,
        "EIGEN",
        "Eigen",
        "https://www.eigenlayer.xyz/"
    ),
};
