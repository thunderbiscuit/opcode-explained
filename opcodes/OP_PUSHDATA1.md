# OP_PUSHDATA1
:::info
**Opcode number:** 76  
**Byte representation:** `0x4c`  
**Short description:** Read the next byte as `N`. Push the next `N` bytes as an array onto the stack.
:::

The `OP_PUSHDATA1` opcode will read the byte that follows it and interpret it as an integer. It will then push the next number of bytes this integer specifies onto the stack. Because it reads a single byte and inteprets it as a number, this opcode can push any number of bytes from 0 to 255. Note that for any number of bytes under 76, it is more efficient (and required by standardness rules) to use opcodes in the `OP_PUSHBYTES` family, or more specific opcodes where applicable (see [minimal push operations](../script/push.md#minimal-push-operations)).

`OP_PUSHDATA1` is part of a group of 3 opcodes that push a custom, user-specified number of bytes onto the stack (its sibling opcodes are [OP_PUSHDATA2](./OP_PUSHDATA2.md) and [OP_PUSHDATA4](./OP_PUSHDATA4.md)).

## Example
```shell
# ASM script
OP_PUSHDATA1 96 a4b5c6d7e8f90a1b2c3d4e5fa0b1c2d3e4f56a7b8c9da0b1c2d3e4f57a8b9c0d1e2fa3b4c5d6e7f89a0b1c2d3e4fa5b6c7d8e9f01a2b3c4d5e6fa7b8c90d1e2fa4b5c6d7e8f92a3b4c5d2ea4b5c6d7e8f90a1b2c3d4e5fa0b1c2d3e4f56a7b8c9da0b1c2d3e4f57a8b9c0d1e2fa3b4c5d6e7f89a0b1c2d3e4fa5b6c7d8e9f01a2b3c4d5e6fa7b8c90d1e2fa4b5c6d7e8f92a3b4c5d2e

# Raw script
4c96a4b5c6d7e8f90a1b2c3d4e5fa0b1c2d3e4f56a7b8c9da0b1c2d3e4f57a8b9c0d1e2fa3b4c5d6e7f89a0b1c2d3e4fa5b6c7d8e9f01a2b3c4d5e6fa7b8c90d1e2fa4b5c6d7e8f92a3b4c5d2ea4b5c6d7e8f90a1b2c3d4e5fa0b1c2d3e4f56a7b8c9da0b1c2d3e4f57a8b9c0d1e2fa3b4c5d6e7f89a0b1c2d3e4fa5b6c7d8e9f01a2b3c4d5e6fa7b8c90d1e2fa4b5c6d7e8f92a3b4c5d2e

# Final stack
a4b5c6d7e8f90a1b2c3d4e5fa0b1c2d3e4f56a7b8c9da0b1c2d3e4f57a8b9c0d1e2fa3b4c5d6e7f89a0b1c2d3e4fa5b6c7d8e9f01a2b3c4d5e6fa7b8c90d1e2fa4b5c6d7e8f92a3b4c5d2ea4b5c6d7e8f90a1b2c3d4e5fa0b1c2d3e4f56a7b8c9da0b1c2d3e4f57a8b9c0d1e2fa3b4c5d6e7f89a0b1c2d3e4fa5b6c7d8e9f01a2b3c4d5e6fa7b8c90d1e2fa4b5c6d7e8f92a3b4c5d2e
```
