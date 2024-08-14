# OP_SHA256
:::info
**Opcode number:** 168  
**Byte representation:** `0xa8`  
**Short Description:** Hash the top stack item using SHA256.  
:::

The `OP_SHA256` opcode replaces the top stack item with its SHA256 hash.
If the stack is empty the script fails.

## Example
```shell
# ASM script
OP_0 OP_SHA256

# Raw script
00a8

# Final stack
e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
```
