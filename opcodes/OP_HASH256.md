# OP_HASH256
:::info
**Opcode number:** 170  
**Byte representation:** `0xaa`  
**Short Description:** Hash the top stack item using double SHA256.  
:::

The `OP_HASH256` opcode replaces the top stack item with its double SHA256 hash.
If the stack is empty the script fails.

## Example
```shell
# ASM script
OP_0 OP_HASH256

# Raw script
00aa

# Final stack
5df6e0e2761359d30a8275058e299fcc0381534545f55cf43e41983f5d4c9456
```
