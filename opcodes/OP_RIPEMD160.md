# OP_RIPEMD160
:::info
**Opcode number:** 166  
**Byte representation:** `0xa6`  
**Short Description:** Hash the top stack item using RIPEMD160.  
:::

The `OP_RIPEMD160` opcode replaces the top stack item with its RIPEMD160 hash.
If the stack is empty the script fails.

## Example
```shell
# ASM script
OP_0 OP_RIPEMD160

# Raw script
00a6

# Final stack
9c1185a5c5e9fc54612808977ee8f548b2258d31
```
