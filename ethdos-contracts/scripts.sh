# Build
forge build --via-ir
# Deploy
forge script script/ETHdos.s.sol --rpc-url $RPC_URL --private-key $PRIVATE_KEY --broadcast --via-ir
# Verify
forge script script/ETHdos.s.sol --rpc-url $RPC_URL --private-key $PRIVATE_KEY --verify --etherscan-api-key $ETHERSCAN_API_KEY --via-ir