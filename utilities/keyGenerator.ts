import { encoder } from "https://deno.land/x/djwt@v2.8/util.ts";
import {key as secret} from "./deps.ts";
import { rKey as rSecret } from "./deps.ts";

const keyBuf: Uint8Array = encoder.encode(secret);
const rKeyBuf: Uint8Array = encoder.encode(rSecret);
export const key : CryptoKey = await crypto.subtle.importKey("raw", keyBuf, {name: "HMAC",
             hash: "SHA-512"},
             true, ["sign", "verify"],);
export const rKey: CryptoKey = await crypto.subtle.importKey("raw", rKeyBuf, {name: "HMAC", hash: "SHA-512"}, true, ["sign", "verify"]);
