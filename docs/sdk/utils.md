# Utils

## getAssetTypeAndId()

- **Type**

```tsx
enum Types {
  ETH = 'ETH',
  ERC20 = 'ERC20',
  ERC721 = 'ERC721',
}
interface Asset {
    type: `${Types}`,
    // use with ERC20 and ERC721
    tokenAddress?: string,
    // use with ERC721
    tokenId?: number | string,
    // use with ERC20
    quantum?: number | string,
}
declare const getAssetTypeAndId: (args: Asset) => Promise<{
    assetId: string;
    assetType: string;
}>;
```

- **Example**

```tsx
const { assetId, assetType } = await reddio.utils.getAssetTypeAndId({
  type: 'ERC721',
  tokenAddress: "your layer 1 tokenAddress",
  tokenId: "The NFT token id owned by the user",
});
```