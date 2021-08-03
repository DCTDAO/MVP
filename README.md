# MVP

## Before
Create a new file secrets.json and add your MNEMONIC "privateKey" for testnets and realKey (mnemonic) for AVAX mainet.

      {
          "privateKey": "YOUR-MNEMONIC",
          "ropstenURL": "<infure wss rpc to ropsten>",
	  "realKey": ""
      }


## build

    yarn build
    
## deployment
    yarn moonbase:deploy 
    yarn avaxTest:depoly
