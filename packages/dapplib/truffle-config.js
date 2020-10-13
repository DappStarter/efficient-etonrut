require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace creek olympic short north rescue spawn protect inner kiwi orient tuition'; 
let testAccounts = [
"0x178353d1e274421bab146d321dab15aaead17c00e1a95e420c972e9c81d82219",
"0xe77edbbfe535f1acd55ae532a1d241d6b0416415165e83934f843e302115c159",
"0x2c60e5d0ddae0889178d0763928c8066032aa331d192146c6712296e8acaba5e",
"0x75d1f0936ce8da8b1788c5beda94c4396a85d594ff02cfff455f0954682c672b",
"0x4dfa51c4bb4c900972b36511b72bb69906a8456fefbd6baa794527b973b61fcb",
"0xd2d8c9a30e60b9ee01c65d33b3b006fea05cf450ed5a4376e69efb6890b1e5fc",
"0x96474aa62c434fd2e276353a0f2145497a091c8dc86bd5ba62296ccf44115a99",
"0xf635666f390ab7132110b8477272e4622e5efab317a3b915b2eab3eb495135f2",
"0x6882eb8d756c53f717bb3cc583fec3cca0bfadb04624d7b9e16d3f82cce2eee6",
"0x5b043366da86d95fcfcda1128d070f1a53b8fb5a17fdb7cb8bccca8d8cdfb31c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
