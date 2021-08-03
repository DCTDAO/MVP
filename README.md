# MVP

## Before
Create a new file secrets.json and add your MNEMONIC "privateKey" for testnets and realKey (mnemonic) for AVAX mainet.

      {
           "privateKey": "YOUR-MNEMONIC",
           "ropstenURL": "<infure wss rpc to ropsten>",
           "realKey": "YOUR-MNEMONIC for real for AVAX mainnet"
      }


## build

    yarn build
    
## deployment
    yarn moonbase:deploy 
    yarn avaxTest:depoly
