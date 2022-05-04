# APN Potato

Using the APN to run the APN push manually.

## Setup

1. Checkout this code.
1. install nodejs (version 12 or later) [NodeJS](https://nodejs.org/en/download/)
1. run `npm install`
1. Config your credentials. (See configuration section below)

## Configuration

What do you need?

Item|Example
--|--
APN file (p8) file from Apple.|`/home/Downloads/AuthKey_ABCDEFGH1.p8`
keyId of your p8 file.|`ABCDEFGH1`
your app bundle id.|`com.sylli.dev`
teamId that you use to run the app.|`X38DFXXD`
And your iOS device.|-

Create this to `config.json` file located in root folder. See `config.example.json`
