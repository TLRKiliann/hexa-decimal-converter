# React + TypeScript + Vite

A simple converter to help with ASCII, binary, decimal or hexadecimal conversion.

## Run

This app was created with Vite & TypeScript, by this cmd :

└─ $ ▶ pnpm create vite

## Installation

└─ $ ▶ git init

└─ $ ▶ git clone <address to click on github>

└─ $ ▶ cd vite-project

└─ $ ▶ pnpm install

└─ $ ▶ pnpm dev

└─ $ ▶ pnpm install

## Testing

This application was tested with :

└─ $ ▶ pnpm add -D vitest

└─ $ ▶ pnpm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer

└─ $ ▶ pnpm add -D @testing-library/react @testing-library/jest-dom

└─ $ ▶ pnpm install -D jsdom

``` 
% Coverage report from v8
-----------------------------|---------|----------|---------|---------|-------------------
File                         | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-----------------------------|---------|----------|---------|---------|-------------------
All files                    |     100 |      100 |     100 |     100 |                   
 src                         |     100 |      100 |     100 |     100 |                   
  App.tsx                    |     100 |      100 |     100 |     100 |                   
 src/components              |     100 |      100 |     100 |     100 |                   
  ButtonComponent.tsx        |     100 |      100 |     100 |     100 |                   
  CompAsciiToBinary.tsx      |     100 |      100 |     100 |     100 |                   
  CompAsciiToHex.tsx         |     100 |      100 |     100 |     100 |                   
  CompBinaryDecimal.tsx      |     100 |      100 |     100 |     100 |                   
  CompBinaryToAscii.tsx      |     100 |      100 |     100 |     100 |                   
  CompHexToAscii.tsx         |     100 |      100 |     100 |     100 |                   
  CompHexadecimalDecimal.tsx |     100 |      100 |     100 |     100 |                   
  LabelInputComponent.tsx    |     100 |      100 |     100 |     100 |                   
  ResultComponent.tsx        |     100 |      100 |     100 |     100 |                   
 src/functions               |     100 |      100 |     100 |     100 |                   
  asciiToBinary.tsx          |     100 |      100 |     100 |     100 |                   
  asciiToHex.tsx             |     100 |      100 |     100 |     100 |                   
  binaryToAscii.tsx          |     100 |      100 |     100 |     100 |                   
  binaryToDecimal.tsx        |     100 |      100 |     100 |     100 |                   
  converterTarget.tsx        |     100 |      100 |     100 |     100 |                   
  hexToAscii.tsx             |     100 |      100 |     100 |     100 |                   
-----------------------------|---------|----------|---------|---------|-------------------
```

## Informations

- Binary

Everthing is in binary on a computer.

A binary number is a number expressed in the base-2 numeral system or binary numeral system, a method of mathematical expression which uses only two symbols: typically "0" (zero) and "1" (one).

The base-2 numeral system is a positional notation with a radix of 2. Each digit is referred to as a bit, or binary digit. Because of its straightforward implementation in digital electronic circuitry using logic gates, the binary system is used by almost all modern computers and computer-based devices, as a preferred system of use, over various other human techniques of communication, because of the simplicity of the language and the noise immunity in physical implementation.[1]

Negative numbers are commonly represented in binary using two's complement.

ref: https://en.wikipedia.org/wiki/Binary_number

---

- Decimal

The decimal numeral system (also called the base-ten positional numeral system and denary /ˈdiːnəri/[1] or decanary) is the standard system for denoting integer and non-integer numbers. It is the extension to non-integer numbers (decimal fractions) of the Hindu–Arabic numeral system.[2] The way of denoting numbers in the decimal system is often referred to as decimal notation.[3]

ref: https://en.wikipedia.org/wiki/Decimal

---

- ASCII

ASCII (/ˈæskiː/ ⓘ ASS-kee),[3]: 6  abbreviated from American Standard Code for Information Interchange, is a character encoding standard for electronic communication. ASCII codes represent text in computers, telecommunications equipment, and other devices. Because of technical limitations of computer systems at the time it was invented, ASCII has just 128 code points, of which only 95 are printable characters, which severely limited its scope. Modern computer systems have evolved to use Unicode, which has millions of code points, but the first 128 of these are the same as the ASCII set.

The Internet Assigned Numbers Authority (IANA) prefers the name US-ASCII for this character encoding.[2]

ASCII is one of the IEEE milestones. 

ref: https://en.wikipedia.org/wiki/ASCII

---

- Hexadecimal 

In mathematics and computing, the hexadecimal (also base-16 or simply hex) numeral system is a positional numeral system that represents numbers using a radix (base) of sixteen. Unlike the decimal system representing numbers using ten symbols, hexadecimal uses sixteen distinct symbols, most often the symbols "0"–"9" to represent values 0 to 9, and "A"–"F" (or alternatively "a"–"f") to represent values from ten to fifteen.

Software developers and system designers widely use hexadecimal numbers because they provide a human-friendly representation of binary-coded values. Each hexadecimal digit represents four bits (binary digits), also known as a nibble (or nybble).[1] For example, an 8-bit byte can have values ranging from 00000000 to 11111111 (0 to 255 decimal) in binary form, which can be conveniently represented as 00 to FF in hexadecimal.

In mathematics, a subscript is typically used to specify the base. For example, the decimal value 29,404 would be expressed in hexadecimal as 72DC16. In programming, several notations denote hexadecimal numbers, usually involving a prefix. The prefix 0x is used in C, which would denote this value as 0x72DC.

Hexadecimal is used in the transfer encoding Base16, in which each byte of the plaintext is broken into two 4-bit values and represented by two hexadecimal digits. 

ref: https://en.wikipedia.org/wiki/Hexadecimal

---

Where can I find hexadecimal ?

By reading file on linux with cmd :

└─ $ ▶ hexdump -C filename | head

Applications, such as tcpdump (wireshark in GUI) display hexadecimal format too.

---
