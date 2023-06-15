import { encoder } from "https://deno.land/x/djwt@v2.8/util.ts";
import {key as secret} from "./deps.ts";

const keyBuf: Uint8Array = encoder.encode(secret);

export const key : CryptoKey = await crypto.subtle.importKey("raw", keyBuf, {name: "HMAC",
             hash: "SHA-512"},
             true, ["sign", "verify"],);
