# OP_HASH160
:::info
**Opcode number:** 169  
**Byte representation:** `0xa9`  
**Short Description:** Hash the top stack item using SHA256 and then RIPEMD160.  
:::

The `OP_HASH160` opcode replaces the top stack item with the RIPEMD160 hash of its SHA256 hash.
If the stack is empty the script fails.

## Example
```shell
# ASM script
OP_0 OP_HASH160

# Raw script
00a9

# Final stack
b472a266d0bd89c13706a4132ccfb16f7c3b9fcb
```
