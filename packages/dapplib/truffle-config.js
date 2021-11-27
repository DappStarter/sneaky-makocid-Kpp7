require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict industry flame street name repeat mad hospital gloom enroll army genre'; 
let testAccounts = [
"0xb694ae35a86053d060427c8b5c2a8f3b8966541d8e18895a27dabc4892a53c43",
"0x386e1b9900ec4bc81137865472da9551ed20d919e5a1a83c432edb82d66b99fb",
"0x10d43a0814eec354fb23070bd3f343783721a6bc64ba0d90a70b2ad420652502",
"0xcaa946485f5192c430e80f3eee150e370144c868d1e9e62bdb37afa5b33b6026",
"0x934483e84dadcbe7f0d53d7919c6cb79e914b50f98c079749700ef70f00bd4e1",
"0x7e95cf93ef24505d4c67c6b29ced020c73e5e03b6476298a9bfd7001fe4aa60d",
"0xd43df23a05a35f76cc4e4489b8c56d4795f74c2cdcac486edc9295114248c8a6",
"0x9b29c5b968f189cb560e219627fc7419b54badf7670f1ee00efffa7f87359a21",
"0x3275de785f0920445de8e4039c2a950bd42781a608533092702f7f6536936b36",
"0xc820195f14d1dbbd794b5f0ed3190c8d5295256e771c178f1c123a06ae1359ce"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

