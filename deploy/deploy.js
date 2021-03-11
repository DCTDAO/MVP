async function main() {
    const time = Math.floor(Date.now() / 1000) + 60*60*10;
	
    const cRouter = await ethers.getContractFactory("UniswapV2Router02");
    const cMulticall = await ethers.getContractFactory("Multicall");
    const cFactory = await ethers.getContractFactory("UniswapV2Factory");
    const CWGLMR = await ethers.getContractFactory("WGLMR");
    const Token = await ethers.getContractFactory("MyERC20");

    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:",
    		deployer.address
    );

    console.log("Account balance:", ethers.utils.formatEther(await deployer.getBalance()).toString());

    const multicall = await cMulticall.deploy();

    console.log("Multicall address: ", multicall.address);

    const DCA = await Token.deploy("DCA","DCA");
    const DCB = await Token.deploy("DCB", "DCB");

    console.log("DCA address: ", DCA.address);
    console.log("DCB address: ", DCB.address);

    const WGLMR = await CWGLMR.deploy();

    console.log("WGLMR address: ", WGLMR.address);

    const factory = await cFactory.deploy(deployer.address);

    console.log("Factory address: ", factory.address);
    const INIT_HASH = await factory.pairCodeHash();
    console.log("INIT_HASH: ", INIT_HASH);

    const router = await cRouter.deploy(factory.address, WGLMR.address);

    console.log("Router address: ", router.address);

    await DCA.approve(router.address, ethers.utils.parseEther('50'));
    await DCB.approve(router.address, ethers.utils.parseEther('50'));
    
    const amountSwap = ethers.utils.parseEther('5');
    await router.addLiquidity(DCA.address, DCB.address, amountSwap, amountSwap, 0,0, deployer.address, time);
}



main()
  .then(() => process.exit(0))
  .catch(error => {
	  console.log(error);
	  process.exit(1);
  });
