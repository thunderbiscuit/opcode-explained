# OP_PUSHDATA4
:::info
**Opcode number:** 78  
**Byte representation:**  `0x4e`  
**Short description:** Read the next 4 bytes as `N`. Push the next `N` bytes as an array onto the stack.
:::

The `OP_PUSHDATA4` opcode will read the 4 bytes that follows it and interpret them as an integer. It will then push the next number of bytes this integer specifies onto the stack. Because it reads 4 bytes and inteprets them as a number, this opcode can push any number of bytes from 1 to 4,294,967,295. Note that for any number of bytes under 65,535, it is more efficient to use either of `OP_PUSHDATA2` (saving 2 bytes), `OP_PUSHDATA1` (saving 1 byte), or any of the opcodes in the `OP_PUSHBYTES` family (saving 4 bytes), depending on the exact situation/number of bytes you need to push on the stack. See the `[OP_PUSHDATA1](./OP_PUSHDATA1.md) page for more of this.

`OP_PUSHDATA4` is part of a group of 3 opcodes that push a custom, user-specified number of bytes onto the stack (its sibling opcodes are [OP_PUSHDATA1](./OP_PUSHDATA1.md) and [OP_PUSHDATA2](./OP_PUSHDATA2.md)).

## Example
A good example for this opcode would require a push of a minimum of 65,536 bytes; we're cutting this one for brievity. See the pages for [OP_PUSHDATA1](./OP_PUSHDATA1.md) and [OP_PUSHDATA2](./OP_PUSHDATA2.md) for complete examples.
```shell
# ASM script pushing 4,000,000 bytes
OP_PUSHDATA4 003d0900 <4 million bytes>

# Raw script
4e003d0900<4millionbytes>

# Final stack
<4millionbytes>
```
