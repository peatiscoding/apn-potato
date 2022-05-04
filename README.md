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

finally make sure `push` script is ready to run.

```bash
chmod +x ./push
```

## Usage

To use it:

For general instruction

```bash
./push --help
```

ํYou can check your configuration by running: 

```bash
./push validate
```

For pushing to specific device:

```bash
./push device <your_device_id>
```

## Advance usage

By default it will push to Staging APN server (produciton = false) override that with

```bash
./push device <your_device_id> --prod true
```

Or if you wish to push the device to non `voip` topic. use `--voip false` to push the notification to normal topic.

```bash
./push device <your_device_id> --voip false
```

You may also customise the notification in `push` script as well. By supplying message which will select the message of push content in the function defined within.